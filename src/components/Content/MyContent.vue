
<template>

  <div class="content">

    <div v-show="currentContent === 'genres'" class="content__genres">
      123
    </div>

    <div v-show="currentContent === 'charts'" class="content__charts">
      456
    </div>

    <div v-show="currentContent === 'favorites'" class="content__favorites">
      789
    </div>

  </div>
</template>

<script>
export default {
  props: {
    currentContent: {
      type: String,
      required: true
    }
  }

}
</script>

<style scoped>

.content {
  grid-area: content;
  //padding: 20px 40px 20px 40px;

  overflow-y: auto;
  scroll-behavior: smooth;

  background-color: #353538;

  border-radius: 10px;
}


</style>