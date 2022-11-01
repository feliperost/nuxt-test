<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Test Name',
                title: 'Test Title',
                content: 'Test content for a post!',
                thumbnailLink: 'https://ifood-news-wp-prod.s3.us-east-1.amazonaws.com/uploads/2022/07/IFN_066_BNN_01.png'
            }
        }
    }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}

</style>