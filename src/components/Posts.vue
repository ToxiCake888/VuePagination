<template>
  <section class="postsBody">
    <section class="postsGrid">
      <section
        class="post"
        v-for="post in posts.slice(startId, endId)"
        :key="post.id"
      >
        <section class="postAuthor">{{ post.id }}</section>
        <section class="postHeader">
          <strong>{{ post.title }}</strong>
        </section>
        <section class="postBody">{{ post.body }}</section>
        <section class="postBtn">
          <button
            class="delete-btn"
            @click="postDelete(post.id)"
          >
            Удалить
          </button>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
const apidelete = `http://localhost:3000/delete:id`

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
  },
  methods: {
    async postDelete(id) {
      try {
        const response = await fetch(`http://localhost:3000/delete/${id}`, {
          method: 'DELETE'
        })
        if (!response.ok) {
          throw new Error(`Ошибка удаления: ${response.statusText}`)
        }
        this.$emit('post-deleted', id)
        window.location.reload()
      } catch (error) {
        console.error(error)
        alert('Не удалось удалить пост')
      }
    }
  }
}
</script>

<style scoped>
.postHeader {
  margin-top: 10px;
  margin-bottom: 10px;
}

.delete-btn {
  display: block;
  position: absolute;
  text-align: center;
  justify-items: center;
  right: 10px;
  bottom: 10px;
  height: 30px;
  border-radius: 14px;
  border-width: 0px;
  background-color: rgb(204, 19, 19);
  color: white;
}
.delete-btn:hover {
  background-color: rgb(175, 22, 22);
  color: rgb(230, 230, 230);
}
.delete-btn:active {
  background-color: rgrgb(145, 18, 18);
  color: rgb(201, 201, 201);
}
.postsBody {
  height: fit-content;
}

.post {
  font-family: montserrat;
  padding: 8px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin: 15px;
  position: relative;
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

@media (min-width: 620px) {
  .postsGrid {
    grid-template-columns: 32vw 32vw 32vw;
    grid-template-rows: 80vh 80vh;
  }
}
</style>
