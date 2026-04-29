<template>
  <div class="mb-4">
    <div class="bg-white border border-gray-200 p-4">
      <div class="mb-4">
        <input v-model="postStore.post.title" class="border border-gray-200 p-4 w-full" type="text" placeholder="title" />
      </div>
      <div class="mb-4">
        <textarea v-model="postStore.post.content" class="border border-gray-200 p-4 w-full" placeholder="content"></textarea>
      </div>
      <div class="mb-4 flex items-center justify-between">
        <a @click.prevent="postStore.updatePost" class="inline-block px-3 bg-sky-600 border border-sky-600 text-white" href="#">
          UPDATE POST
        </a>
        <router-link :to="{ name: 'admin.posts.index' }" class="inline-block px-3 bg-sky-600 border border-sky-600 text-white">
          BACK
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post'
import { onMounted } from 'vue'

defineOptions({
  name: 'Edit',
})

onMounted(() => {
  postStore.getPost()
})

const postStore = usePostStore()
</script>
