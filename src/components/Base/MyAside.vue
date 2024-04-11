<script>
import AsideNav from "@/components/Aside/AsideNav.vue";
import AsidePlaylists from "@/components/Aside/AsidePlaylists.vue";
  export default {
    components: {
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