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

.postBtn {
  margin-top: auto;
  width: 100%;
}

.delete-btn {
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border-radius: 14px;
  border: none;
  background-color: rgb(204, 19, 19);
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.delete-btn:hover {
  background-color: rgb(175, 22, 22);
  color: rgb(230, 230, 230);
}

.delete-btn:active {
  background-color: rgb(145, 18, 18);
  color: rgb(201, 201, 201);
}

.postsBody {
  height: auto;
}

.post {
  font-family: montserrat;
  padding: 8px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin: 15px;
  position: relative;

  height: auto;
  overflow: visible;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.postsGrid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 15px;
}

@media (max-width: 1050px) {
  .postsGrid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
  }
}

@media (max-width: 500px) {
  .postsGrid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  .post {
    margin: 10px;
  }
}

@media (max-width: 850px) {
  .post {
    margin: 10px;
  }
}

@media (min-width: 620px) {
  .postsGrid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
  }
}
</style>
