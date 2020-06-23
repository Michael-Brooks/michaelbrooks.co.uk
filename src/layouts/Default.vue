<template>
    <div id="app">

        <header class="header" style="background-color: var(--bg-content-color);">
            <div class="header__left">
                <Logo />
            </div>

            <div class="header__center">
                <input
                        id="search"
                        v-model="searchTerm"
                        class="input"
                        type="text"
                        placeholder="Search">
                <div class="search-results">
                    <g-link
                            v-for="result in searchResults"
                            :key="result.id"
                            :to="result.path"
                            class="navbar-item">
                        {{ result.title }}
                    </g-link>
                </div>
            </div>

            <div class="header__right">
                <nav>
                    <g-link to="/blog">Blog</g-link>
                </nav>
            </div>
        </header>

        <main class="main">
            <slot/>
        </main>

        <footer class="footer">
            <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
            <span class="footer__links">Powered by <a href="//gridsome.org"> Gridsome </a></span>
        </footer>

    </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import ToggleTheme from '~/components/ToggleTheme.vue'

    export default {
        data: () => ({
            searchTerm: ''
        }),
        computed: {
            searchResults () {
                const searchTerm = this.searchTerm
                if (searchTerm.length < 3) return []
                return this.$search.search({ query: searchTerm, limit: 5 })
            }
        },
        props: {
            showLogo: {default: true}
        },
        components: {
            Logo,
            ToggleTheme
        }
    }
</script>

<style lang="scss">
    nav {
        a {
            text-decoration: none;

            &.active {
                text-decoration: underline !important;
            }
        }

        a:hover {
            text-decoration: underline;
        }

        a:not(.button) {
            color: var(--body-color);
        }
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: var(--header-height);
        padding: 0 calc(var(--space) / 2);
        top: 0;
        z-index: 10;

        &__left,
        &__right {
            display: flex;
            align-items: center;
        }

        @media screen and (min-width: 1300px) {
            //Make header sticky for large screens
            position: sticky;
            width: 100%;
        }
    }

    .main {
        margin: 0 auto;
        padding: 1.5vw 15px 0;
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: calc(var(--space) / 2);
        text-align: center;
        font-size: .8em;

        > span {
            margin: 0 .35em;
        }

        a {
            color: currentColor;
        }
    }
</style>
