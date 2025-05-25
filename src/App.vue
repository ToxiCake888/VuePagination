<template>
  <NewPostCreation
    @createPost="pushPost"
    :postsLength="initPosts.length"
  />
  <Posts v-bind:posts="initPosts" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NewPostCreation from '/src/components/icons/NewPostCreation.vue'
import Posts from '/src/components/Posts.vue'

const apiurl = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
const initPosts = ref([])

onMounted(async () => {
  const response = await fetch(apiurl)
  initPosts.value = await response.json()
  console.log(initPosts.value)
})

const pushPost = (newPost) => {
  initPosts.value.push(newPost)
}
</script>

<style scoped></style>
