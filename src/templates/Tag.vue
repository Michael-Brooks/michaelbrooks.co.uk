<template>
  <Layout>
    <div class="container mx-auto text-center">
      <div class="post-title">
        <h1 class="post-title__text yellow text-4xl my-6 mx-10 marker">
          # {{ $page.tag.title }}
        </h1>
      </div>
    </div>

    <div class="posts">
      <PostCard class="my-20" v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    id
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            cover_image (width: 770, height: 380, blur: 10)
            description
            content
            tags {
            id
            title
            path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import PostMeta from '~/components/PostMeta'

export default {
  components: {
    Author,
    PostCard,
    PostMeta
  },
  metaInfo () {
    return {
      title: this.$page.tag.title,
      meta: [
        {
          name: 'description',
          content: `View tags for ${this.$page.tag.title}`
        }
      ]
    }
  }
}
</script>

