<template>
  <div>
    <AdminLayout v-if="isAdmin">
      <router-view></router-view>
    </AdminLayout>
    <ClientLayout v-else>
      <router-view></router-view>
    </ClientLayout>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AdminLayout from './layouts/AdminLayout.vue'
import ClientLayout from './layouts/ClientLayout.vue'

onMounted(() => {
  console.log(useRoute().name)
})

defineOptions({
  name: 'App',
})

const router = useRouter()
const route = useRoute()
const isAdmin = ref(false)

router.isReady().then(() => {  
  isAdmin.value = route.name.split('.')[0] === 'admin'
})
</script>

<style scoped></style>
