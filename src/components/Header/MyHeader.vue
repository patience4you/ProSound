<script>
  export default {

  }
</script>

<template>
  <header class="header">

    <div class="logo">
      <a href="main">
        <img src="../../assets/logo.svg" alt="">
      </a>
    </div>

    <div class="search-bar">
      <input type="text"  placeholder="Что слушаем?">
    </div>

    <div class="user-actions">

      <div class="user-actions__premium">
        <a href="/premium.html">Премиум</a>
      </div>

      <div>
        <svg width="3" height="50" viewbox="0 0 3 50"
             fill="#A1A1A1" xmlns="http://www.w3.org/2000/svg">
          <rect width="3" height="50" />
        </svg>
      </div>

      <div class="user-actions__registration">
        <a href="/signIn.html">Зарегистрироваться</a>
      </div>

      <button class="user-actions__login-button" href="/login.html">
        Войти
      </button>

    </div>
  </header>
</template>

<style scoped>

.header {
  grid-area: header;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 40px 15px 40px;
  margin-top: 10px;

  background-color: #353538;

  border-radius: 10px;
}

  .search-bar {
    width: 30%;
    margin: 0 20px;
    position: relative;
  }

  .search-bar input {

    font-weight: 700;
    color: #A1A1A1;

    width: calc(100% - 40px);
    padding: 10px 10px 10px 60px;

    background-color: #1f1f1f;
    border: 0 solid;
    border-radius: 45px;

    background-image: url(/public/search.svg);
    background-repeat: no-repeat; /*Убираем повтор изображения*/
    background-position: 15px; /*Позиционируем*/
  }

  .search-bar input:focus {
    outline: none;
  }

  .search-bar input::placeholder {
    color: #A1A1A1;
  }

  .user-actions {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .user-actions a {
    display: inline-block;
    text-decoration: none;
    color: #A1A1A1;

    transition: color 0.3s; /* Плавная анимация для цвета фона и текста */
  }

  .user-actions a:hover {
    color: #fff;
  }

  .user-actions__login-button {
    width: 190px;
    height: 55px;

    font-weight: 700;

    background-color: #DFB751;
    color: #131313;
    border: none;
    border-radius: 45px;
    cursor: pointer;

    transition: background-color 0.3s;
  }

  .user-actions__login-button:hover {
    background-color: #ffd979;
  }

</style>