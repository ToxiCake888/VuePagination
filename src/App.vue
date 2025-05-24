<script setup>
import { ref, onMounted } from 'vue'
const apiurl = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
const posts = ref([])

onMounted(async () => {
  const response = await fetch(apiurl)
  posts.value = await response.json()
  console.log(posts.value)
})
</script>

<template>
  <div
    v-for="item in posts"
    :key="item.id"
  >
    <li>{{ item.id }} {{ item.body }}</li>
  </div>
</template>

<style scoped>
li {
  margin: 15px;
  max-width: 800px;
}
</style>
