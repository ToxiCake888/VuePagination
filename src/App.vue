<template>
  <div class="body">
    <NewPostCreation
      @createPost="pushPost"
      :postsLength="postsArray.length"
    />
    <div class="siteTitle">Статьи</div>
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
import { ref, onMounted, computed } from 'vue'
import NewPostCreation from '/src/components/NewPostCreation.vue'
import Posts from '/src/components/Posts.vue'
import Pagination from '/src/components/Pagination.vue'

const postsArray = ref([])
const currentPage = ref(1)
const postsOnPage = ref(6)
const totalPosts = ref(12)
const apiurl = `http://localhost:3000/getData`

const totalPages = computed(() => {
  return Math.ceil(totalPosts.value / postsOnPage.value)
})

onMounted(async () => {
  const response = await fetch(apiurl)
  postsArray.value = await response.json()
  console.log(postsArray.value)
})

const pushPost = (newPost) => {
  postsArray.value.push(newPost)
  totalPosts.value += 1
}

const switchPage = (newPage) => {
  currentPage.value = newPage
}
</script>

<style scoped>
.siteTitle {
  color: white;
  margin-top: 20px;
  font-family: montserrat;
  font-weight: 700;
  font-size: 30px;
  margin-left: 6vw;
}

.body {
  background-image: url('./assets/Group.svg');
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
  /* background: #7b00ff;
  background: linear-gradient(
    -45deg,
    rgba(123, 0, 255, 1) 0%,
    rgba(8, 0, 255, 1) 100%
  ); */
}

@font-face {
  font-family: Montserrat;
  src: url('./fonts/Montserrat-VariableFont_wght.ttf');
}

@font-face {
  font-family: MontserratItalic;
  src: url(./fonts/Montserrat-Italic-VariableFont_wght.ttf);
}
</style>
