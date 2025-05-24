<script setup>
import { ref, onMounted } from 'vue'
const apiurl = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
const posts = ref([])

const newPostAutor = ref()
const newPostTitle = ref()
const newPostBody = ref()

onMounted(async () => {
  const response = await fetch(apiurl)
  posts.value = await response.json()
  console.log(posts.value)
})
</script>

<template>
  <div class="newPostCreation">
    <input
      type="text"
      class="newPostAutor"
      placeholder="autor"
    />
    <input
      type="text"
      class="newPostTitle"
      placeholder="title"
    />
    <input
      type="text"
      class="newPostText"
      placeholder="text"
    />
    <button
      type="submit"
      class="submitBtn"
    ></button>
  </div>

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

.submitBtn {
  margin-left: 10px;
  height: 20px;
  width: 40px;
}
</style>
