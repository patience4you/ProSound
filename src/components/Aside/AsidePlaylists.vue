<template>
  <div class="aside-library">

    <div>

      <div class="aside-library__title">
        <a href="/genres" class="social-icons"></a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#a1a1a1" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="40" height="40">
          <path d="m23.927,20.125l-3.971-17.729c-.359-1.615-1.969-2.634-3.581-2.275l-.976.218c-.466.104-.882.312-1.23.594-.547-.573-1.317-.931-2.17-.931h-6c-1.654,0-3,1.346-3,3v2c0,.552.447,1,1,1s1-.448,1-1v-2c0-.551.448-1,1-1h2v6c0,.552.447,1,1,1s1-.448,1-1v-1h3v10h-3v-1c0-.552-.447-1-1-1s-1,.448-1,1v6h-2c-.552,0-1-.449-1-1v-2c0-.552-.447-1-1-1s-1,.448-1,1v2c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3v-8.706l2.097,9.364c.313,1.393,1.556,2.343,2.928,2.343.215,0,.434-.023.652-.072l.976-.218c.783-.175,1.451-.644,1.881-1.321.43-.678.569-1.482.394-2.265Zm-7.974-12.727l2.928-.655,2.267,10.122-2.929.654-2.267-10.121Zm-.118-5.108s1.122-.242,1.195-.242c.188,0,.372.053.534.156.226.144.382.366.44.627l.439,1.96-2.928.655-.439-1.962c-.119-.539.221-1.074.759-1.194Zm-5.835,2.71v-3h2c.552,0,1,.449,1,1v2h-3Zm2,17h-2v-3h3v2c0,.551-.448,1-1,1Zm9.844-.683c-.143.226-.365.382-.627.44l-.976.218c-.537.117-1.072-.219-1.193-.756l-.392-1.749,2.929-.653.391,1.745c.059.261.012.53-.132.755ZM3,13H1c-.553,0-1-.448-1-1s.447-1,1-1h2v-2c0-.552.447-1,1-1s1,.448,1,1v2h2c.553,0,1,.448,1,1s-.447,1-1,1h-2v2c0,.552-.447,1-1,1s-1-.448-1-1v-2Z"/>
        </svg>
        <div id="title">Моя библиотека</div>
      </div>

      <div class="aside-library search-bar__actions">

        <div class="aside-library__search">
          <input type="text"  placeholder="Поиск...">
        </div>

        <button class="aside-library__add-playlist" @click="showDialog" title="Создать плейлист">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#a1a1a1" id="Outline" width="25" height="25"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg>
        </button>

      </div>

      <playlist-item v-bind:playlists="playlists"/>
      <my-dialog v-model:show="dialogVisible" class="playlist-dialog">
        <playlist-form
          @create="createPlaylist"
          class="playlist-form"
        />
      </my-dialog>
    </div>

  </div>

</template>

<script>
  import PlaylistItem from "@/components/Aside/PlaylistItem.vue";
  import MyDialog from "@/components/UI/MyDialog.vue";
  import PlaylistForm from "@/components/Aside/PlaylistForm.vue";

  export default {
    components: {
      PlaylistForm,
      PlaylistItem,
      MyDialog
    },


    data() {
      return {
        dialogVisible: false,
        playlists: [
          {id: 1, title: 'overdose', author: 'patience', image: require('@/assets/playlist.jpg')},
          {id: 2, title: 'dreams', author: 'patience', image: require('@/assets/playlist.jpg')},
          {id: 3, title: 'love', author: 'patience', image: require('@/assets/playlist.jpg')}
        ],
        playlistCounter: 3,
      }
    },

    methods: {
      showDialog () {
        this.dialogVisible = true;
      },

      createPlaylist (playlist) {
        this.playlists.push(playlist)

        this.dialogVisible = false
      },
    }
  }
</script>

<style scoped>

  .aside-library {
    grid-area: asideplay;

    margin: 0;

    background-color: #353538;
    border-radius: 10px;

    padding: 0 30px 0 0;

    overflow-y: auto;
    scroll-behavior: smooth;
  }

  .aside-library::-webkit-scrollbar {
    width: 10px;
  }

  .aside-library::-webkit-scrollbar-thumb {
    background-color: #7e7e7e;
    border-radius: 5px;
  }

  .aside-library__title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 40px;
    margin-top: 18px;
  }

  .aside-library__title #title{
    margin-left: 30px;
  }

  .aside-library__add-playlist {
    width: 44px;
    height: 44px;
    padding: 0;
    margin-left: 10px;

    border-radius: 25px;
    background: none;

    border: none;
    cursor: pointer;

    transition: background-color 0.3s;
  }

  .aside-library__add-playlist a {
    text-decoration: none;
  }

  .aside-library__add-playlist svg{
    display: flex;
    margin-left: 10px;
  }

  .aside-library__add-playlist:hover {
    background-color: #48484b;
  }

  .aside-library__add-playlist:active {
    background-color: #000;
  }

  .search-bar__actions {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    padding: 0;
  }

  .aside-library__search input {
    font-weight: 700;
    color: #A1A1A1;

    width: 180px;
    padding: 10px 10px 10px 60px;
    margin-left: 40px;
    font-size: 20px;

    background-color: #48484B;
    border: 0 solid;
    border-radius: 10px;

    background-image: url('/public/search.svg');
    background-repeat: no-repeat; /*Убираем повтор изображения*/
    background-position: 15px; /*Позиционируем*/
  }

  .aside-library__search input:focus {
    outline: none;
  }

  .aside-library__search input::placeholder  {
    color: #A1A1A1;
  }



</style>