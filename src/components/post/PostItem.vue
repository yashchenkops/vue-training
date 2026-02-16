<script setup>
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

const deletePost = (post) => {
  emits('deletepost', post);
};
</script>

<template>
  <div class="bg-white border border-gray-200 p-4 mb-4 flex items-center justify-between">
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
    </div>
  </div>
</template>
