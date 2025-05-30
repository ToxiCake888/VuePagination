<template>
  <div class="newPostCreation">
    <section class="inputs">
      <img
        src="../assets/logo.svg"
        alt=""
        class="logo"
      />
      <!-- <input
        type="text"
        class="newPostAutor postCreationInputs"
        placeholder="autor"
        v-model="postAutor"
      /> -->
      <input
        type="text"
        class="newPostTitle postCreationInputs"
        placeholder="title"
        v-model="postTitle"
      />
      <input
        type="text"
        class="newPostText postCreationInputs"
        placeholder="text"
        v-model="postBody"
      />
    </section>

    <button
      type="submit"
      class="submitBtn"
      @click="SubmitPost"
    >
      Добавить новую статью
    </button>
  </div>
</template>
<script>
export default {
  props: ['postsLength'],
  data() {
    return {
      postAutor: '',
      postTitle: '',
      postBody: ''
    }
  },
  methods: {
    SubmitPost(event) {
      const post = {
        id: this.postsLength + 1,
        autorId: this.postAutor,
        title: this.postTitle,
        body: this.postBody
      }
      this.$emit('createPost', post)
      this.post = {
        autorId: '',
        title: '',
        body: ''
      }
    }
  }
}
</script>
<style scoped>
.logo {
  margin: 10px;
}

.newPostCreation {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submitBtn {
  display: flex;
  color: white;
  justify-self: center;
  border: 0px;
  width: 350;
  height: 70;
  top: 197px;
  left: 925px;
  border-radius: 9px;
  background: #5b98e3;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0%;
  margin: 8px;
}
.submitBtn:hover {
  color: rgb(214, 214, 214);
  background: #558ed3;
}
.submitBtn:active {
  color: rgb(172, 172, 172);
  background: #4a7ab6;
}

.postCreationInputs {
  align-self: flex-end;
  justify-self: center;
  box-sizing: border-box;
  width: 20vw;
  height: 70px;
  top: 197px;
  left: 545px;
  border-width: 1px;
  border-radius: 5px;

  border: 1px solid #ffffff;
  height: 35px;
  margin-left: 8px;
  margin-right: 8px;
}
.inputs {
  display: flex;
  justify-self: center;
}

@media (max-width: 860px) {
  .newPostCreation {
    display: block;
  }

  .postCreationInputs {
    justify-self: center;
    width: 30vw;
  }
}

@media (max-width: 570px) {
  .inputs {
    display: block;
  }
  .postCreationInputs {
    margin-top: 4px;
    display: block;
    width: 70vw;
  }
}
</style>
