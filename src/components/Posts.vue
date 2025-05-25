<template>
  <section
    class="post"
    v-for="post in posts"
  >
    <section class="postAuthor">{{ post.id }}</section>
    <section class="postHeader">
      <strong>{{ post.title }}</strong>
    </section>
    <section class="postBody">{{ post.body }}</section>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  border-radius: 20px;
  background-color: rgb(255, 232, 201);
  margin: 15px;
  max-width: 800px;
}
</style>
