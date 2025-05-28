<template>
  <div class="body">
    <NewPostCreation
      @createPost="pushPost"
      :postsLength="postsArray.length"
    />
    <Posts
      :posts="postsArray"
      :curPage="currentPage"
      :postsAmount="postsOnPage"
    />
    <Pagination
      :posts="postsArray"
      :curPage="currentPage"
      :totPages="totalPages"
      @pageChanged="switchPage"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NewPostCreation from '/src/components/icons/NewPostCreation.vue'
import Posts from '/src/components/Posts.vue'
import Pagination from '/src/components/Pagination.vue'

const postsArray = ref([])
const currentPage = ref(1)
const postsOnPage = ref(6)
const totalPosts = ref(24)
const apiurl = `https://jsonplaceholder.typicode.com/posts?_limit=${totalPosts.value}`
const totalPages = Math.ceil(totalPosts.value / postsOnPage.value)
onMounted(async () => {
  const response = await fetch(apiurl)
  postsArray.value = await response.json()
  console.log(postsArray.value)
})

const pushPost = (newPost) => {
  postsArray.value.push(newPost)
}

const switchPage = (newPage) => {
  currentPage.value = newPage
}
</script>

<style scoped>
.body {
  height: 100vh;
  width: 100vw;
  background: #7b00ff;
  background: linear-gradient(
    -45deg,
    rgba(123, 0, 255, 1) 0%,
    rgba(8, 0, 255, 1) 100%
  );
}
</style>
