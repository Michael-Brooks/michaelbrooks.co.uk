<template>
    <div>
        <div v-for="post in posts">
<!--            <img :src="coverImage(post.regularPath, post.frontmatter.coverImage)" alt="" />-->
            {{ formateDate(post.frontmatter.date) }}
            <h2><router-link :to="post.path">{{ post.frontmatter.title }}</router-link></h2>
        </div>
    </div>
</template>
<style scoped>
    .blog-index-list {
        display: table;
        width: 100%;
        table-layout: auto;
    }
    .blog-index-list td {
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .blog-index-list td:first-child {
        width: 1px;
        white-space: nowrap;
    }
</style>
<script>
    import moment from "moment"

    export default {
        props: [
            'limit',
        ],
        methods: {
            formateDate(date, format = 'MMM D, YY') {
                return moment(date).format(format)
            },
            coverImage(path, image) {
                return path + 'images/' + image;
            }
        },
        computed: {
            posts() {
                let posts = this.$site.pages
                    .filter(post => !post.frontmatter.blog_index)
                    .filter(post => !post.path.startsWith('/archived/'))
                    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

                if (this.limit > 0) {
                    posts = posts.slice(0, this.limit);
                }


                return posts;
            }
        }
    }
</script>
