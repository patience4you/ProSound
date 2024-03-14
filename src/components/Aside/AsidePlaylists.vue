<template>
  <div class="aside-library">

    <div>

      <div class="aside-library__title">
        <a href="/genres" class="social-icons"></a>
        <img src="@/assets/playlist.jpg" alt="">
        <div id="title">Моя библиотека</div>
      </div>

      <div class="aside-library search-bar__actions">

        <div class="aside-library__search">
          <input type="text"  placeholder="Поиск...">
        </div>

        <button class="aside-library__add-playlist" @click.prevent="createPlaylist" title="Создать плейлист">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#a1a1a1" id="Outline" width="25" height="25"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg>
        </button>

      </div>

      <playlist-item :playlists="playlists"/>

    </div>

  </div>

</template>

<script>
  import PlaylistItem from "@/components/Aside/PlaylistItem.vue";

  export default {
    components: {
      PlaylistItem
    },

    data() {
      return {
        playlists: [
          {id: 1, title: 'overdose', author: 'patience', image: require('@/assets/playlist.jpg')},
          {id: 2, title: 'dreams', author: 'patience', image: require('@/assets/playlist.jpg')},
          {id: 3, title: 'love', author: 'patience', image: require('@/assets/playlist.jpg')}
        ],
        playlistCounter: 3
      }
    },

    methods: {
      createPlaylist (event) {
        this.playlistCounter++;
        const newPlaylist = {
          id: Date.now(),
          title: `Новый плейлист № ${this.playlistCounter}`,
          author: "patience",
          image: require('@/assets/playlist.jpg')
        };
        this.playlists.push(newPlaylist);
      }
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