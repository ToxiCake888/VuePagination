<template>
  <section class="paginationUI">
    <button @click="switchEmit(1)">first</button>
    <div
      v-for="pagenum in totPages"
      :key="pagenum"
      class="pagebtns"
      :class="{ selectedPage: curPage === pagenum }"
      @click="switchEmit(pagenum)"
    >
      {{ pagenum }}
    </div>
    <button @click="switchEmit(totPages)">last</button>
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
    totPages: { type: Number, required: true }
  },

  methods: {
    switchEmit(pagenum) {
      this.$emit('pageChanged', pagenum)
    }
  }
}
</script>
<style scoped>
.paginationUI {
  display: flex;
}
.pagebtns {
  margin: 2px;
  padding: 8px;
  border: solid, 2px;
}
.selectedPage {
  background-color: rgb(190, 190, 190);
}
</style>
