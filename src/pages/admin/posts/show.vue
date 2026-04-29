<template>
  <div>
    <div class="mb-4">
      <h3>POSTS</h3>
    </div>
    <div>
      <div>
        <div class="bg-white border border-gray-200 p-4">
          <h3 class="mb-4 text-lg">{{ postStore.postTitle }}</h3>
          <p class="text-sm">{{ postStore.post.content }}</p>
        </div>
        <div class="mt-4">
          <router-link :to="{ name: 'admin.posts.index' }" class="inline-block px-3 bg-sky-600 border border-sky-600 text-white">
            BACK
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post'
import { onMounted, ref } from 'vue'

defineOptions({
  name: 'Show',
})

onMounted(() => {
  postStore.getPost()
})

const postStore = usePostStore()
</script>

<style scoped></style>
