<template>
  <form @submit.prevent class="playlist-form">
    <h4>Создание плейлиста</h4>
    <input
      v-model="playlist.title"
      class="input"
      type="text"
      placeholder="Название плейлиста"
    >
    <input
        v-model="playlist.author"
        class="input"
        type="text"
        placeholder="Автор"
    >
    <button @click.prevent="createPlaylist">
      Создать
    </button>
  </form>
</template>

<script>

  export default {
    data() {
      return {

        playlist: {
          title: '',
          author: '',
          image: require('@/assets/playlist.jpg')
        }
      }
    },

    methods: {

      createPlaylist() {
        this.playlist.id = Date.now();
        this.$emit('create', this.playlist)
        this.playlist = {
          title: '',
          author: '',
          image: ''
        }
      },
    }
  }
</script>

<style scoped>
  .playlist-form {
    width: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    padding: 20px;
  }
</style>