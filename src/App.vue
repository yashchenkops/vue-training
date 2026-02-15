<script setup>
import { reactive, ref, watch } from 'vue';
import PostItem from './components/post/PostItem.vue';

const posts = ref([]);
const errors = ref([]);
const isModalOpen = ref(false);
const post = reactive({
  title: '',
  message: '',
});
const editedPost = reactive({
  index: null,
  title: '',
  message: '',
});

const storePost = () => {
  if (isNotValidated()) return;

  posts.value.unshift({
    title: post.title,
    message: post.message,
  });

  Object.assign(post, {
    title: '',
    message: '',
  });
};

const editPost = (post) => {
  isModalOpen.value = true;

  Object.assign(editedPost, {
    index: posts.value.indexOf(post),
    title: post.title,
    message: post.message,
  });
};

const updatePost = () => {
  Object.assign(posts.value[editedPost.index], {
    title: editedPost.title,
    message: editedPost.message,
  });
  isModalOpen.value = false;
};

const deletePost = (post) => {
  posts.value = posts.value.filter((postItem) => postItem !== post);
};

const isNotValidated = () => {
  errors.value = [];
  if (post.title === '') {
    errors.value.push('The title field is required!');
  }
  if (post.message === '') {
    errors.value.push('The message field is required!');
  }

  return errors.value.length > 0;
};

watch(post, () => {
  errors.value = [];
});
</script>

<template>
  <div v-if="isModalOpen" @click="isModalOpen = false" class="modal-overlay">
    <div @click.stop class="modal bg-white border border-gray-200 p-4 mb-4">
      <form action="#">
        <div class="mb-4">
          <input v-model="editedPost.title" class="p-4 border border-gray-200 w-full" type="text" placeholder="Title..." />
        </div>
        <div class="mb-4">
          <textarea v-model="editedPost.message" class="p-4 border border-gray-200 w-full min-h-20" placeholder="Message..."></textarea>
        </div>
        <div>
          <a @click.prevent="updatePost" href="#" class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white">Update post</a>
        </div>
      </form>
    </div>
  </div>

  <div class="w-1/2 mx-auto p-4">
    <div class="bg-white border border-gray-200 p-4 mb-4">
      <form action="">
        <div class="mb-4">
          <input v-model="post.title" class="p-4 border border-gray-200 w-full" type="text" placeholder="Title..." />
        </div>
        <div class="mb-4">
          <textarea v-model="post.message" class="p-4 border border-gray-200 w-full min-h-20" placeholder="Message..."></textarea>
        </div>
        <div v-if="errors.length > 0" class="mb-4">
          <div v-for="error in errors" class="text-red-600">
            {{ error }}
          </div>
        </div>
        <div>
          <a @click.prevent="storePost" href="#" class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white">Store post</a>
        </div>
      </form>
    </div>
    <div>
      <PostItem v-for="post in posts" :post="post" />
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal {
  width: 50%;
}
</style>
