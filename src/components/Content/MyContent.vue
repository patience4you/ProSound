
<template>

  <div class="content">

    <div v-show="currentContent === 'genres'">
      <div class="title">Жанры</div>

        <div class="genres__content">
          <a href="" v-for="genre in genres">
            <div class="genre__title">{{genre.title}}</div>
          </a>
        </div>

    </div>

    <div v-show="currentContent === 'charts'">
      <div class="title">Чарты</div>
      <div class="charts__content"> sadad </div>
    </div>

    <div v-show="currentContent === 'favorites'">
      <div class="title">Любимое</div>
      <div class="favorites__content"> sadad </div>
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
  },

  data() {
    return {
      genres: [
        {id: 1, title: 'Хип-хоп'},
        {id: 2, title: 'Поп'},
        {id: 3, title: 'Рок'},
        {id: 4, title: 'Инди'},
        {id: 5, title: 'R&B'},
        {id: 6, title: 'K-Pop'},
        {id: 7, title: 'Релакс'},
        {id: 9, title: 'Джаз'},
        {id: 10, title: 'Кантри'},
        {id: 11, title: 'Метал'},
        {id: 12, title: 'Аниме'},
        {id: 13, title: 'Классика'},
        {id: 14, title: 'Фолк'},
        {id: 15, title: 'Соул'},
        {id: 15, title: 'Панк'},
        {id: 15, title: 'Блюз'},
        {id: 15, title: 'Афро'},
        {id: 15, title: 'Netflix'},
        {id: 15, title: 'Караоке'},
      ],

    }
  },

}
</script>

<style scoped>

.content {
  grid-area: content;
  padding: 20px 40px 20px 40px;

  overflow-y: auto;
  scroll-behavior: smooth;

  background-color: #353538;

  border-radius: 10px;
}

.content::-webkit-scrollbar {
  width: 10px;
}

.content::-webkit-scrollbar-thumb {
  background-color: #7e7e7e;
  border-radius: 5px;
}

.title {
  font-size: 30px;
  color: white;

  margin-bottom: 20px;
}

.genres__content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 40px;
}

.genres__content a {
  width: 200px;
  height: 200px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #DFB751;
  text-decoration: none;
}

.genre__title {
  font-size: 22px;
  color: #1f1f1f;
}



</style>