<script>
import AsideNav from "@/components/Aside/Nav/AsideNav.vue";
import AsidePlaylists from "@/components/Aside/AsidePlaylists.vue";
import MyGenres from "@/components/Aside/Nav/MyGenres.vue";
  export default {
    components: {
      MyGenres,
      AsideNav,
      AsidePlaylists
    },
  }
</script>

<template>
  <aside class="aside">
    <aside-nav/>
    <aside-playlists/>
  </aside>
</template>

<style scoped>

.aside {
  display: flex;
  flex-flow: column;
  border-radius: 10px;
}

</style>