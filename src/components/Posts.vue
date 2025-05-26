<template>
  <section
    class="post"
    v-for="post in posts.slice(startId, endId)"
    :key="posts.id"
  >
    <section class="postAuthor">{{ post.id }}</section>
    <section class="postHeader">
      <strong>{{ post.title }}</strong>
    </section>
    <section class="postBody">{{ post.body }}</section>
  </section>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    posts: {
      type: Array,
      required: true
    },
    curPage: { type: Number, required: true },
    postsAmount: { type: Number, required: true }
  },

  computed: {
    startId() {
      return (this.curPage - 1) * this.postsAmount
    },
    endId() {
      return this.startId + this.postsAmount
    }
  }
}
</script>

<style scoped>
.post {
  padding: 8px;
  border-radius: 20px;
  background-color: rgb(255, 232, 201);
  margin: 15px;
  max-width: 800px;
}
</style>
