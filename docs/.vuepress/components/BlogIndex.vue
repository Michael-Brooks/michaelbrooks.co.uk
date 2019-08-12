<template>
    <div>
        <div v-for="post in posts">
            <router-link :to="post.path">
                <div v-if="typeof post.frontmatter.coverImage !== 'undefined'" >
                    <img :src="post.frontmatter.coverImage" alt="" />
                </div>
            </router-link>
            <h3><router-link :to="post.path">{{ post.frontmatter.title }}</router-link></h3>
            <p>Posted On: {{ formateDate(post.frontmatter.date) }}</p>
            <p>{{ post.frontmatter.description }}</p>
            <p><router-link :to="post.path">Read More >>></router-link></p>
        </div>
        <a rel="alternate" type="application/rss+xml" href="/rss.xml">RSS</a>
    </div>
</template>
<script>
    import moment from "moment"

    export default {
        props: [
            'limit',
        ],
        methods: {
            formateDate(date, format = 'MMM D, YY') {
                return moment(date).format(format)
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
