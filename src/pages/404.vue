<template>
    <Layout :show-logo="false" class="bg-black">
        <div class="container mx-auto text-center md:my-64 mb-64 px-2 md:px-0">
            <h1 class="text-white md:text-5xl">
                This page seems to have been lost in the forest.
            </h1>
            <h1 class="text-white md:text-5xl mt-6">
                We will continue searching through the trees.
            </h1>
            <h1 class="text-white md:text-5xl mt-6">
                In the meantime, please try using the search or links above.
            </h1>
        </div>
    </Layout>
</template>

<page-query>
    query ($page: Int) {
    posts: allPost(perPage: 5, page: $page, filter: { published: { eq: true }}) @paginate {
    pageInfo {
    totalPages
    currentPage
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
            title: '404 Page Not Found'
        }
    }
</script>
