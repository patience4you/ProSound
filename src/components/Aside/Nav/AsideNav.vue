<template>
  <nav class="aside-nav">
    <ul class="aside-nav__menu">
      <li class="genres">
        <my-genres
            @contentChange="updateContent"
            :current-content="currentContent"
        />
      </li>
      <li class="charts">
        <my-charts
            @contentChange="updateContent"
            :current-content="currentContent"
        />
      </li>
      <li class="favorites">
        <my-favorites
            @contentChange="updateContent"
            :current-content="currentContent"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import MyGenres from "@/components/Aside/Nav/MyGenres.vue";
import MyCharts from "@/components/Aside/Nav/MyCharts.vue";
import MyFavorites from "@/components/Aside/Nav/MyFavorites.vue";

  export default {
    components: {
      MyGenres,
      MyCharts,
      MyFavorites
    },

    props: {
      currentContent: {
        type: String,
        required: true
      }
    },

    methods: {
      updateContent(content) {
        this.$emit('contentChange', content)
      }
    },

  }
</script>

<style scoped>

  .aside-nav {
    grid-area: asidenav;

    background-color: #353538;
    border-radius: 10px;
  }

  @media screen and (max-width: 1000px) {
    .aside-nav__menu {

      display: flex;
      padding: 0;

      flex-direction: row; /* Изменяем направление на row для мобильных устройств */
      justify-content: space-around; /* Меняем распределение по оси главной */

      list-style-type: none;
    }
  }

  @media screen and (min-width: 1000px) {
    .aside-nav__menu {

      display: flex;
      padding: 0;

      flex-direction: column; /* Изменяем направление на row для мобильных устройств */
      gap: 20px;
      justify-content: space-around; /* Меняем распределение по оси главной */

      list-style-type: none;
    }
  }

  .aside-nav__menu a {

    display: flex;
    align-items: center;
    gap: 30px;

    fill: #DFB751;

    font-weight: 700;

    text-decoration: none;
  }

  .aside-nav__menu li:hover {
    fill: #ffffff; /* Новый цвет для заливки иконки SVG */
  }

  .aside-nav__menu li:hover {
    color: #ffffff; /* Новый цвет для текста внутри <span> */
  }

  .genres, .charts, .favorites {
    padding: 8px 40px;
  }
</style>