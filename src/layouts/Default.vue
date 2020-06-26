<template>
    <div id="app">

        <header>
            <nav class="flex items-center justify-between flex-wrap bg-black p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <Logo />
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow text-center relative">
                        <input
                                id="search"
                                v-model="searchTerm"
                                class="input bg-transparent w-1/2 h-8 pl-2"
                                type="text"
                                placeholder="Search blog posts...">
                        <div class="search-results bg-black absolute w-1/2" :class="{hidden: isHidden}">
                            <g-link
                                    v-for="result in searchResults"
                                    :key="result.id"
                                    :to="result.path"
                                    class="navbar-item block text-white">
                                {{ result.title }}
                            </g-link>
                        </div>
                    </div>
                    <div>
                        <g-link to="/blog" class="block px-6 py-2 mt-4 mr-16 lg:mt-0 marker text-2xl">Blog</g-link>
                    </div>
                </div>
            </nav>
        </header>

        <main class="main">
            <slot/>
        </main>

        <footer class="footer text-center mb-5">
            <span class="footer__copyright text-white">Copyright © {{ new Date().getFullYear() }}. </span>
            <span class="footer__links text-white">Powered by <a href="//gridsome.org" class="underline"> Gridsome </a></span>
        </footer>

    </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import ToggleTheme from '~/components/ToggleTheme.vue'

    export default {
        data: () => ({
            searchTerm: '',
            isHidden: true,
        }),
        computed: {
            searchResults () {
                const searchTerm = this.searchTerm
                if (searchTerm.length < 3) {
                    this.isHidden = true
                    return []
                }
                this.isHidden = false
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
