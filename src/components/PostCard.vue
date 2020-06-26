<template>
  <div class="post-card content-box rounded bg-white mx-auto">
    <div class="post-card__header">
      <g-image alt="Cover image" v-if="post.cover_image" class="post-card__image rounded-t" :src="post.cover_image" />
    </div>
    <div class="post-card__content py-12 px-20">
      <h2 class="text-3xl font-extrabold" v-html="post.title" />
      <p class="post-card__description mt-8 text-xl" v-html="post.description" />

      <PostMeta class="post-card__meta pt-8 text-gray-600" :post="post" />

      <PostTags class="post-card__tags" :post="post" />

      <g-link class="post-card__link" :to="post.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
.post-card {
  min-height: 788px;
  position: relative;
  max-width: 860px;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    margin-top: 0;
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }

  .post-tags__link {
    background-color: #F3F7F9;
  }
}
</style>
