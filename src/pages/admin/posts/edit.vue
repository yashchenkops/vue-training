<template>
  <div class="mb-4">
    <div class="bg-white border border-gray-200 p-4">
      <div class="mb-4">
        <input v-model="post.title" class="border border-gray-200 p-4 w-full" type="text" placeholder="title" />
      </div>
      <div class="mb-4">
        <textarea v-model="post.content" class="border border-gray-200 p-4 w-full" placeholder="content"></textarea>
      </div>
      <div class="mb-4">
        <a @click.prevent="updatePost" class="inline-block px-3 bg-sky-600 border border-sky-600 text-white" href="#">UPDATE POST</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'Edit',
})

onMounted(() => {
  getPost();
})

const route = useRoute();
const post = reactive({
  title: '',
  content: '',
})

const getPost = function () {
  axios.get(`http://localhost:3000/posts/${route.params.id}`).then((res) => {
    Object.assign(post, res.data)
  })
}

const updatePost = function() {
  axios.patch(`http://localhost:3000/posts/${route.params.id}`, post)
    .then(res => {
      Object.assign(post, res.data)
    })
}
</script>

<style lang="scss" scoped></style>
