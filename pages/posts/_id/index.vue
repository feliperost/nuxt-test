<template>
  <div class="single-post-page">
    <section class="post">
        <h1 class="post-title">{{ lodadedPost.title }}</h1>
        <div class="post-details">
            <div class="post-detail">Last updated on {{ lodadedPost.updatedDate | date }}.</div>
            <div class="post-detail">Written by {{ lodadedPost.author }}.</div>
        </div>
        <p class="post-content">{{ lodadedPost.content }}</p>
    </section>
    <section class="post-feedback">
        <p>Let me know what you think about the post. Send a mail to: <a href="mailto:feedback@email.com">feedback@email.com</a></p>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData(context) {
    return axios.get(process.env.baseUrl + '/posts/' + context.params.id + '.json')
    .then(res => {
      return {
        loadedPost: res.data
      }
    })
    .catch(e => context.error(e))
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}

</style>