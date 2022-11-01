<template>
  <section class="post-list">
      <PostPreview
      id="1"
      thumbnail="https://ifood-news-wp-prod.s3.us-east-1.amazonaws.com/uploads/2022/07/IFN_066_BNN_01.png"
      title="First Post Test"
      previewText="preview text for post 1!"
      />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>