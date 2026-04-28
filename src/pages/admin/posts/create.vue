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
        <a @click.prevent="storePost" class="inline-block px-3 bg-sky-600 border border-sky-600 text-white" href="#">STORE POST</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue'

defineOptions({
  name: 'Create',
})

const post = reactive({
  title: '',
  content: '',
})

const storePost = function () {
  axios.post('http://localhost:3000/posts', post).then((res) => {
    console.log(res)
  })

  Object.assign(post, {
    title: '',
    content: '',
  })
}
</script>

<style lang="scss" scoped></style>
