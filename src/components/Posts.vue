<template>
  <section class="postsBody">
    <section class="postsGrid">
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
    </section>
  </section>
</template>

<script>
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
.postsBody {
  height: fit-content;
}

.post {
  font-family: montserrat;
  padding: 8px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin: 15px;

  height: 90%;
  overflow: hidden;
}

.postsGrid {
  display: grid;
  grid-template-rows: 30vh 30vh;
  grid-template-columns: 32vw 32vw 32vw;
  grid-auto-rows: minmax(auto, 40vh);
}

@media (max-width: 500px) {
  .post {
    max-height: 50vh;
  }
  .postsGrid {
    display: grid;
    grid-template-columns: 48vw 48vw;
    grid-template-rows: 50vh;
  }
}

@media (max-width: 1050px) {
  .postsGrid {
    grid-template-rows: 45vh 45vh;
  }
}
@media (max-width: 850px) {
  .post {
    margin: 10px;
  }
  .postsGrid {
    grid-template-rows: 70vh 70vh;
  }
}
@media (max-width: 620px) {
  .post {
    margin: 5px;
  }
  .postsGrid {
    grid-template-rows: 54vh 54vh 54vh;
  }
}

@media (min-width: 620px) {
  .postsGrid {
    grid-template-columns: 32vw 32vw 32vw;
    grid-template-rows: 80vh 80vh;
  }
}
</style>
