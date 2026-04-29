import axios from 'axios'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'

export const usePostStore = defineStore('posts', {
  state: () => ({
    // це наші змінні які об"являються глобально
    posts: [],
    post: {},
  }),
  // це той самий computed
  getters: {
    postTitle: (state) => state.post.title,
  },
  actions: {
    // це наші методи для рообти зі змінними які об"являються глобально
    getPosts() {
      axios.get('http://localhost:3000/posts').then((res) => {
        this.posts = res.data
      })
    },
    getPost() {
      axios.get(`http://localhost:3000/posts/${useRoute().params.id}`).then((res) => {
        this.post = res.data
      })
    },
    storePost() {
      axios.post('http://localhost:3000/posts', this.post).then((res) => {
        console.log(res)
      })

      Object.assign(post, {
        title: '',
        content: '',
      })
    },
    updatePost() {
      axios.patch(`http://localhost:3000/posts/${this.post.id}`, this.post).then((res) => {
        Object.assign(this.post, res.data)
      })
    },
    deletePost(post) {
      axios.delete(`http://localhost:3000/posts/${post.id}`).then((res) => {
        this.posts = this.posts.filter((postItem) => postItem !== post)
      })
    },
  },
})
