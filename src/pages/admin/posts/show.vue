<template>
  <div>
    <div class="mb-4">
      <h3>POSTS</h3>
    </div>
    <div>
      <div>
        <div class="bg-white border border-gray-200 p-4">
          <h3 class="mb-4 text-lg">{{ post.title }}</h3>
          <p class="text-sm">{{ post.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'Show',
})

onMounted(() => {
  getPost()
})

const post = ref({})

const route = useRoute()

const getPost = function () {
  axios.get(`http://localhost:3000/posts/${route.params.id}`).then((res) => {
    Object.assign(post.value, res.data)
  })
}
</script>

<style scoped></style>
