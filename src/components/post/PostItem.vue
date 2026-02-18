<script setup>
import { computed } from 'vue';
import PostDelete from './PostDelete.vue';

const { post } = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(['deletepost', 'editpost']);

const editPost = (post) => {
  emits('editpost', post);
};

const postClass = computed(() => post.isFavored ? 'border-sky-400' : 'border-gray-200')

const deletePost = (post) => {
  emits('deletepost', post);
};
</script>

<template>
  <div :class="[postClass, 'bg-white border p-4 mb-4 flex items-center justify-between']">
    <div>
      <h3 class="text-lg text-gray-700">{{ post.title }}</h3>
      <p class="text-sm text-gray-500">{{ post.message }}</p>
    </div>
    <div class="flex gap-2">
      <button @click="editPost(post)" type="button" class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 text-emerald-600">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </svg>
      </button>
      <PostDelete :post="post" />
      <button @click="post.isFavored = !post.isFavored" type="button" class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :fill="post.isFavored ? 'oklch(85.2% 0.199 91.936)' : 'none'"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="post.isFavored ? 'oklch(85.2% 0.199 91.936)' : 'currentColor'"
          class="size-5 text-sky-600">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      </button>
    </div>
  </div>
</template>
