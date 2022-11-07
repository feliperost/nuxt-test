<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'
import axios from 'axios'

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    asyncData(context) {
        return axios.get('https://nuxt-blog-c4b21-default-rtdb.firebaseio.com/posts/' + context.params.postId + '.json')
        .then(res => {
        return {
            loadedPost: res.data
        }
        })
        .catch(e => context.error(e))
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
    },
    methods: {
        onSubmitted(editedPost) {
            axios.put('https://nuxt-blog-c4b21-default-rtdb.firebaseio.com/posts/' + this.$route.params.postId + '.json', editedPost)
            .then(res => {
                this.$router.push('/admin')
            })
            .catch(e => console.log(e))
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