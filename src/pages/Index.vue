<template>
    <Layout :show-logo="false" class="bg-black">
        <div class="md:p-6 pb-6">
            <!-- Author intro -->
            <div class="md:m-24 mb-24 h-24">
                <g-image alt="Author image" class="portrait md:float-left mx-auto" src="~/assets/images/author.jpg" width="180"
                         height="180"
                         blur="5"/>
                <span>
                    <p class="text-white md:ml-56 md:pt-12 pt-6 text-xl text-center md:text-left">I'm a freelance website developer <br>
                        and blogger in Newton Abbot, Devon</p>
                </span>
            </div>
        </div>
        <div class="hero relative">

            <a href="https://twitter.com/MBrooksUK" title="My personal Twitter account" class="twitter md:absolute float-left">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M70 13.2913C67.4246 14.4346 64.6567 15.2046 61.7517 15.5517C64.7179 13.7754 66.9958 10.9608 68.0663 7.60667C65.2925 9.25167 62.2183 10.4475 58.9458 11.0921C56.3296 8.30084 52.5933 6.55667 48.4633 6.55667C39.1912 6.55667 32.3779 15.2075 34.4721 24.1879C22.54 23.59 11.9583 17.8733 4.87375 9.18459C1.11125 15.6392 2.9225 24.0829 9.31583 28.3588C6.965 28.2829 4.74833 27.6383 2.81458 26.5621C2.65708 33.215 7.42583 39.4392 14.3325 40.8246C12.3113 41.3729 10.0975 41.5013 7.84583 41.0696C9.67167 46.7746 14.9742 50.925 21.2625 51.0417C15.225 55.7754 7.61833 57.89 0 56.9917C6.35542 61.0663 13.9067 63.4433 22.015 63.4433C48.6792 63.4433 63.7437 40.9238 62.8337 20.7258C65.6396 18.6988 68.075 16.17 70 13.2913V13.2913Z" fill="#FFF01A"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="70" height="70" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </a>

            <a href="https://www.facebook.com/MBrooksDeveloper" title="My personal Facebook account" class="facebook md:absolute float-left">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 0C15.6713 0 0 15.6713 0 35C0 54.3288 15.6713 70 35 70C54.3288 70 70 54.3288 70 35C70 15.6713 54.3288 0 35 0ZM43.75 23.3333H39.8125C38.2433 23.3333 37.9167 23.9779 37.9167 25.6025V29.1667H43.75L43.1404 35H37.9167V55.4167H29.1667V35H23.3333V29.1667H29.1667V22.435C29.1667 17.2754 31.8821 14.5833 38.0013 14.5833H43.75V23.3333Z" fill="#FFF01A"/>
                </svg>
            </a>

            <a href="https://github.com/Michael-Brooks" title="My personal GitHub account" class="github md:absolute float-left">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 0C15.6742 0 0 15.6713 0 35C0 50.4642 10.0275 63.5833 23.9371 68.2121C25.6842 68.5358 26.25 67.4508 26.25 66.5292V60.0133C16.5142 62.1308 14.4871 55.8833 14.4871 55.8833C12.8946 51.8379 10.5992 50.7617 10.5992 50.7617C7.42292 48.5887 10.8413 48.6354 10.8413 48.6354C14.3558 48.8804 16.205 52.2433 16.205 52.2433C19.3258 57.5925 24.3921 56.0467 26.39 55.1513C26.7021 52.8908 27.6092 51.345 28.6125 50.4729C20.8396 49.5833 12.6671 46.5821 12.6671 33.1742C12.6671 29.3504 14.035 26.2296 16.2721 23.7796C15.9104 22.8958 14.7117 19.3346 16.6133 14.5163C16.6133 14.5163 19.5533 13.5771 26.2412 18.1037C29.0325 17.3279 32.025 16.94 35 16.9254C37.975 16.94 40.9704 17.3279 43.7675 18.1037C50.4496 13.5771 53.3837 14.5163 53.3837 14.5163C55.2883 19.3375 54.0896 22.8988 53.7279 23.7796C55.9738 26.2296 57.33 29.3533 57.33 33.1742C57.33 46.6171 49.1429 49.5775 41.3496 50.4438C42.6038 51.5288 43.75 53.6579 43.75 56.9246V66.5292C43.75 67.4596 44.31 68.5533 46.0863 68.2092C59.9842 63.5746 70 50.4583 70 35C70 15.6713 54.3288 0 35 0Z" fill="#FFF01A"/>
                </svg>
            </a>

            <a href="https://michaelbrooks.substack.com/" title="Join my personal newsletter" class="newsletter md:absolute">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 37.0796L0.04375 8.75H69.9592L35 37.0796ZM19.1771 31.7654L0 16.2225V52.6838L19.1771 31.7654ZM50.8229 31.7654L70 52.6838V16.2225L50.8229 31.7654ZM46.2817 35.4433L35 44.5871L23.7183 35.4433L0.0641667 61.25H69.9358L46.2817 35.4433V35.4433Z" fill="#FFF01A"/>
                </svg>
            </a>
        </div>
        <div class="post-container relative">
            <h2 class="md:absolute latest-heading text-center text-5xl text-white">Latest Post</h2>
            <svg class="absolute yellow-bg" width="938" height="872" viewBox="0 0 938 872" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.880157" y="76.4311" width="870" height="798" transform="rotate(-5 0.880157 76.4311)" fill="#FFF01A"/>
            </svg>
            <div class="container mx-auto">
                <div class="posts rounded pt-10">
                    <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
                </div>
            </div>
        </div>

        <div style="height: 750px"></div>
    </Layout>
</template>

<page-query>
    query ($page: Int) {
    posts: allPost(perPage: 1, page: $page, filter: { published: { eq: true }}) @paginate {
    pageInfo {
    totalPages
    currentPage
    }
    edges {
    node {
    id
    title
    date (format: "D. MMMM YYYY")
    timeToRead
    description
    cover_image (width: 770, height: 380, blur: 10)
    path
    tags {
    id
    title
    path
    }
    }
    }
    }
    }
</page-query>

<script>
    import Author from '~/components/Author.vue'
    import {Pager} from 'gridsome'
    import PostCard from '~/components/PostCard.vue'

    export default {
        components: {
            Author,
            Pager,
            PostCard
        },
        metaInfo: {
            title: 'Website Developer'
        }
    }
</script>
