<template>
  <div>posts</div>
  <div v-for="post in posts">
    {{ post.title }}
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

onMounted(() => {
  getPosts()
})

const posts = ref([])

const getPosts = function () {
  axios.get('http://localhost:3000/posts').then((res) => {
    posts.value = res.data
  })
}
</script>

<style scoped></style>
