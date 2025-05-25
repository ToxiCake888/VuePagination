<template>
  <div class="newPostCreation">
    <input
      type="text"
      class="newPostAutor"
      placeholder="autor"
      v-model="postAutor"
    />
    <input
      type="text"
      class="newPostTitle"
      placeholder="title"
      v-model="postTitle"
    />
    <input
      type="text"
      class="newPostText"
      placeholder="text"
      v-model="postBody"
    />
    <button
      type="submit"
      class="submitBtn"
      @click="SubmitPost"
    >
      Submit
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
.submitBtn {
  margin-left: 10px;
  height: 25px;
  width: 60px;
}
</style>
