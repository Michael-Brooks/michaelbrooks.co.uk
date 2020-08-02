<template>
  <Layout>
    <div class="dark-blue pb-12 mb-12">
      <div class="container mx-auto mb-20 pt-10">
        <div class="post-title">
          <h1 class="post-title__text yellow text-4xl my-6 mx-10 marker">
            {{ $page.post.title }}
          </h1>

          <PostMeta class="text-white mb-12" :post="$page.post" />

        </div>

        <div class="post mx-auto content-box bg-white rounded">
          <div class="post__header">
            <g-image class="rounded-t" alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
          </div>

          <div class="py-12 px-20">
            <div class="mt-10 block mx-auto" style="width: 304px;">
              <iframe src="https://michaelbrooks.substack.com/embed" class="newsletter-widget"
                      style="border:1px solid #EEE; background:white; margin-bottom: 30px;" frameborder="0"
                      scrolling="no"></iframe>
            </div>

            <div class="post__content text-xl" v-html="$page.post.content" />

            <div class="mt-10 block mx-auto" style="width: 304px;">
              <iframe src="https://michaelbrooks.substack.com/embed" class="newsletter-widget"
                      style="border:1px solid #EEE; background:white; margin-bottom: 30px;" frameborder="0"
                      scrolling="no"></iframe>
            </div>

            <div class="post__footer mt-10">
              <PostTags :post="$page.post" />

            </div>
          </div>
        </div>
      </div>
    </div>
    <Author class="post-author" />
  </Layout>
</template>

<script async src="https://comments.app/js/widget.js?2" data-comments-app-website="-xWhIPRa" data-limit="5"></script>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'

export default {
  components: {
    Author,
    PostMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {
  min-height: 788px;
  position: relative;
  max-width: 860px;

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    a {
      color: #1a0dab;
    }

    a:visited {
      color: #7e359e;
    }

    h2 {
      @apply text-3xl font-bold
    }

    h2:first-child {
      margin-top: 0;
    }

    p {
      margin: 30px 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      font-weight: bold;
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: 100%;
    }
  }

  .post-tags__link {
    background-color: #F3F7F9;
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
