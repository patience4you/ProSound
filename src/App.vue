<template>
  <div class="container">
    <my-header/>
    <aside-nav @contentChange="updateContent"/>
    <aside-playlists/>
    <my-content :currentContent="currentContent"/>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from "@/components/Header/MyHeader.vue";
import MyContent from "@/components/Content/MyContent.vue";
import MyFooter from "@/components/Footer/MyFooter.vue";
import AsideNav from "@/components/Aside/AsideNav.vue";
import AsidePlaylists from "@/components/Aside/AsidePlaylists.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import PlaylistItem from "@/components/Aside/PlaylistItem.vue";

export default {
  components: {
    PlaylistItem,
    MyDialog,
    MyHeader,
    AsideNav,
    AsidePlaylists,
    MyContent,
    MyFooter
  },

  data() {
    return {
      currentContent: 'genres'
    }
  },

  methods: {
    updateContent(content) {
      this.currentContent = content;
    }
  }
}
</script>

<style>

  * {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    color: #A1A1A1;
    font-weight: 700;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #1f1f1f;
  }

  .container {
    width: 90%;
    display: grid;
    grid-gap: 10px;
    margin: 0 auto;
  }

  /* Для ПК */
  @media screen and (min-width: 1000px) {
    .container {
      height: 100vh;
      grid-template-columns: minmax(400px, 1fr) minmax(300px, 4fr);
      grid-template-rows: minmax(100px, auto) 1fr 2fr minmax(125px, auto);
      grid-template-areas:
              'header header'
              'asidenav content'
              'asideplay content'
              'footer footer';
    }
  }

  /* Для мобильных устройств */
  @media screen and (max-width: 1000px) {
    .container {
      width: auto;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(100px, auto) minmax(100px, auto) minmax(400px, auto) minmax(500px, auto) minmax(125px, auto); /* Изменяем значения строк */
      grid-template-areas:
              'header'
              'asidenav'
              'asideplay'
              'content'
              'footer';
    }
  }

</style>