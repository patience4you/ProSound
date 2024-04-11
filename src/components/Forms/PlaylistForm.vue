<template>
  <form @submit.prevent class="playlist-form">
    <h4>Создание плейлиста</h4>
    <div v-if="playlist.title === '' "
         class="input__block"
    >
      Введите название плейлиста
    </div>
    <my-input
      v-model="playlist.title"
      class="input"
      :class="{'empty': playlist.title === ''}"
      type="text"
      placeholder="Название плейлиста"
    />
    <my-input
        v-model="playlist.author"
        class="input"
        type="text"
        placeholder="Автор"
    />
    <my-button
        @click.prevent="createPlaylist"
        :disabled="playlist.title === ''"
        :class="{  'disabled': playlist.title === '' }"
    >
      Создать
    </my-button>
  </form>
</template>

<script>
import AsidePlaylist from "@/components/Aside/AsidePlaylists.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";

  export default {
    components: {
      AsidePlaylist,
      MyInput,
      MyButton
    },

    props: {
      playlistCounter: Number,
      required: true
    },

    data() {
      return {
        playlist: {
          title: 'Новый плейлист №' + this.playlistCounter,
          author: 'patience',
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

    padding: 40px 20px;
  }

  .playlist-form h4 {
    margin: 0;

    color: white;
    font-size: 20px;
    font-weight: 800;
  }

  .input.empty {
    outline: 2px solid #df5151;
  }

  .input.empty:focus {
    outline: 2px solid #df5151;
  }

  .input__block {
    font-size: 15px;
    color: white;

    background-color: #df5151;

    width: 250px;
    padding: 5px 10px;
    border-radius: 5px;
  }

  .playlist-form input {
    font-weight: 600;
    color: #A1A1A1;

    width: 250px;
    padding: 10px 15px;
    font-size: 20px;

    background-color: #48484B;
    border: 0;
    border-radius: 10px;
  }

  .playlist-form input:hover {
    outline: 1px solid #DFB751;
  }

  .playlist-form input:focus {
    outline: 2px solid #DFB751;
  }

  .playlist-form input::placeholder  {
    color: #868686;
  }

  .playlist-form button {
    width: 150px;
    height: 55px;

    background-color: #DFB751;
    color: #131313;
    border: none;
    border-radius: 35px;
    cursor: pointer;

    transition: background-color 0.3s;
  }

  .playlist-form button:hover {
    background-color: #ffd979;
  }

  .playlist-form button.disabled {
    opacity: 0.3;
    cursor: not-allowed; /* Меняем курсор */
  }

  .playlist-form button.disabled:hover {
    background-color:#DFB751
  }
</style>