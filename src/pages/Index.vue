<template>
    <Layout :show-logo="false">
        <!-- Author intro -->
        <Author :show-title="true"/>

        <!-- List posts -->
        <div class="posts">
            <h2 class="text-center">Latest Post</h2>
            <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
        </div>
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
