<template>
    <Layout :show-logo="false">
        <!-- Author intro -->
        <Author :show-title="true"/>

        <div class="container mx-auto text-center">
            <h1 class="yellow text-6xl mt-20 mb-6 marker">
                Blog
            </h1>
        </div>

        <!-- List posts -->
        <div class="dark-blue py-1">
            <div class="mt-10 block mx-auto" style="width: 304px;">
                <iframe src="https://michaelbrooks.substack.com/embed" class="newsletter-widget"
                        style="border:1px solid #EEE; background:white; margin-bottom: 30px;" frameborder="0"
                        scrolling="no"></iframe>
            </div>

            <div class="posts container mx-auto">
                <PostCard class="my-20" v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
            </div>
        </div>

        <Pager class="yellow text-center text-3xl pagination my-10" :info="$page.posts.pageInfo"/>
    </Layout>
</template>

<page-query>
    query ($page: Int) {
    posts: allPost(perPage: 5, page: $page, filter: { published: { eq: true }}) @paginate {
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
            title: 'Blog Posts'
        }
    }
</script>
