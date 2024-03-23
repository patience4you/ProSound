<template>
  <header class="header">
    <div class="logo">
      <a href=" ">
        <img src="../../assets/logo.svg" alt="">
      </a>
    </div>
    <div class="search-bar">
      <input type="text"  placeholder="Что слушаем?">
    </div>
    <div v-if="loggedOut" class="user-actions">
      <div class="user-actions__premium">
        <a href=" ">Премиум</a>
      </div>
      <div>
        <svg width="3" height="50" viewbox="0 0 3 50"
             fill="#A1A1A1" xmlns="http://www.w3.org/2000/svg">
          <rect width="3" height="50" />
        </svg>
      </div>
      <div class="user-actions__registration">
        <a href=" ">Зарегистрироваться</a>
      </div>
      <button
          class="user-actions__login-button"
          href="/login.html"
          @click.prevent="showDialog"
      >
        Войти
      </button>
    </div>
    <div v-if="loggedIn" class="logged-in__actions">
      <div>Привет, <strong :style="{color: 'white'}">{{userData.email}}</strong> </div>
      <button
          class="user-actions__login-button"
          @click.prevent="logoutAccount"
      >
        Выйти
      </button>
    </div>
    <my-dialog v-model:show="loginDialogVisible">
      <login-form
          @login="loginAccount"
      />
    </my-dialog>
  </header>
</template>

<script>
import MyDialog from "@/components/UI/MyDialog.vue";
import LoginForm from "@/components/Header/LoginForm.vue";

export default {

  components: {
    LoginForm,
    MyDialog,
  },

  data() {
    return {
      loggedOut: true,
      loggedIn: false,
      loginDialogVisible: false,
      userData: null,
    }
  },

  methods: {
    showDialog () {
      this.loginDialogVisible = true;
    },

    logoutAccount() {
      this.loggedOut = true;
      this.loggedIn = false;
      this.userData = null;
      this.$emit('userDataChanged', this.userData);
    },

    loginAccount(login) {
      this.loginDialogVisible = false;
      this.loggedIn = true;
      this.loggedOut = false;
      this.userData = login;
      this.$emit('userDataChanged', this.userData);
    },
  }

}
</script>


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
    width: 150px;
    height: 55px;

    font-weight: 700;

    background-color: #DFB751;
    color: #131313;
    border: none;
    border-radius: 45px;
    cursor: pointer;

    transition: background-color 0.3s;
  }

  .logged-in__actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px
  }

  .user-actions__login-button:hover {
    background-color: #ffd979;
  }
</style>