
<template>

  <div class="content">
    <div v-show="currentContent === 'genres'">
      <div class="title">Жанры</div>

        <div class="genres__content">
          <a href="" v-for="genre in genres">
            <img @click="" class="genre__image" :src="genre.image" alt="Обложка жанра">
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
        {id: 1, title: 'Хип-хоп', image: require('@/assets/genres/хип-хоп.png')},
        {id: 2, title: 'Поп', image: require('@/assets/genres/поп.png')},
        {id: 3, title: 'Рок', image: require('@/assets/genres/рок.png')},
        {id: 5, title: 'R&B', image: require('@/assets/genres/R&B.png')},
        {id: 6, title: 'K-Pop', image: require('@/assets/genres/к-поп.png')},
        {id: 7, title: 'Релакс', image: require('@/assets/genres/релакс.png')},
        {id: 9, title: 'Джаз', image: require('@/assets/genres/джаз.png')},
        {id: 10, title: 'Кантри', image: require('@/assets/genres/кантри.png')},
        {id: 11, title: 'Метал', image: require('@/assets/genres/метал.png')},
        {id: 12, title: 'Аниме', image: require('@/assets/genres/аниме.png')},
        {id: 13, title: 'Классика', image: require('@/assets/genres/классика.png')},
        {id: 14, title: 'Фолк', image: require('@/assets/genres/фолк.png')},
        {id: 15, title: 'Соул', image: require('@/assets/genres/Соул.png')},
        {id: 16, title: 'Панк', image: require('@/assets/genres/панк.png')},
        {id: 17, title: 'Блюз', image: require('@/assets/genres/блюз.png')},
        {id: 18, title: 'Афро', image: require('@/assets/genres/афро.png')},
        {id: 20, title: 'Караоке', image: require('@/assets/genres/караоке.png')}
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

.genre__image {
  display: block;
  width: 90%;
  height: auto;

  top: 20px;


  border-radius: 10px;
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