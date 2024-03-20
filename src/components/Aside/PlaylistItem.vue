<template>
  <div class="aside-library__playlists">
    <a>
      <div class="playlist" v-for="playlist in playlists">
        <div class="img">
          <img :src="playlist.image" alt="Picture">
        </div>
        <div class="playlist__data">
          <div class="title">{{playlist.title}}</div>
          <div class="author">{{playlist.author}}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    playlists: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

  .aside-library__playlists{
    margin-top: 20px;
  }

  .aside-library__playlists a{
    text-decoration: none;
  }

  .img {
    height: 55px;
  }

  .playlist__data {
    overflow: hidden;
  }

  .playlist .author {
    font-size: 13px;
    margin-top: 5px;
    color: #DFB751
  }

  .aside-library__playlists .playlist img{
    height: 55px;
    width: 55px;
    border-radius: 6px;
    /*background-color: #DFB751;*/
  }

  .aside-library__playlists .playlist img:before{
    content: "";
    display: block;
  }

  .aside-library__playlists .playlist {
    display: flex;
    flex-direction: row;
    padding: 10px;
    border-radius: 10px;
    margin-left: 30px;
    gap: 20px;
    align-items: center;
  }

  .aside-library__playlists .playlist:hover{
    background-color: rgba(126, 126, 126, 0.22);
  }


</style>