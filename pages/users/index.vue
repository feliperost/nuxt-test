<template>
  <div>
    <input type="text" v-model="userID">
    <button @click="onLoadUser">Load User</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            userID: ''
        }
    },
    methods: {
        onLoadUser() {
            this.$router.push('/users/' + this.userID)
        }
    }
}
</script>

<style>

</style>