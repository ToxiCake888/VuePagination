<template>
  <section class="paginationUI">
    <button
      @click="switchEmit(1)"
      class="pagebtns"
    >
      <<
    </button>
    <div
      v-for="pagenum in totPages"
      :key="pagenum"
      class="pagebtns"
      :class="{ selectedPage: curPage === pagenum }"
      @click="switchEmit(pagenum)"
    >
      {{ pagenum }}
    </div>
    <button
      @click="switchEmit(totPages)"
      class="pagebtns"
    >
      >>
    </button>
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
  background-color: #b0b4ff;
  margin: 2px;
  padding: 8px;
  border: 0px;
  border-radius: 5px;
}
.pagebtns:hover {
  background-color: #c5c8ff;
}
.selectedPage {
  background-color: rgb(255, 255, 255) !important;
}
</style>
