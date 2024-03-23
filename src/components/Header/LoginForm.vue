<template>
  <form @submit.prevent class="login-form">
    <div class="login-form__title">Войти в ProSound</div>
    <div v-if=" ((login.email === '' || login.password === '') && buttonClicked)"
         class="input__block"

    >
      Вы не ввели почту или пароль
    </div>
    <div class="email-content">
      <div class="email title">Электронная почта или логин</div>
      <input
          v-model="login.email"
          class="email input"
          :class="{'empty': (login.email === '' && buttonClicked)}"
          type="email"
          placeholder="Электронная почта или логин"
      >
    </div>
    <div class="password-content">
      <div class="password title">Пароль</div>
      <input
          v-model="login.password"
          class="password input"
          :class="{'empty': (login.password === '' && buttonClicked)}"
          type="password"
          placeholder="Пароль"
      >
    </div>
    <button
        @click="loginAccount"
    >
      Войти
    </button>
    <div class="sign-link">У вас еще нет аккаунта? <a href="">Зарегистрироваться</a></div>
  </form>
</template>

<script>
  import MyHeader from "@/components/Header/MyHeader.vue";

  export default {
    components: {
      MyHeader,
    },

    data() {
      return {
        login: {
          email: '',
          password: '',
        },
        buttonClicked: false
      }
    },

    methods: {
      loginAccount() {

        this.buttonClicked = true;

        /*if (this.login.email === '' || this.login.password === '') {
          // Выходим из метода
          return;
        }*/

        if (!this.isValidEmail(this.login.email)) {
          // Если электронная почта некорректна, выводим сообщение об ошибке
          return;
        }

        // Если поля заполнены, выполняем отправку данных
        this.$emit('login', this.login);
        // Очищаем поля формы
        this.login = {
          email: '',
          password: ''
        }
      },

      isValidEmail(email) {
        // Проверяем, содержит ли email символ "@"
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
    }
  }

</script>

<style scoped>

.login-form {
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  padding: 40px 20px;
}

.login-form__title {
  color: white;
  font-size: 30px;
  margin-bottom: 15px;
}

.sign-link {
  display: flex;
  flex-direction: column;
  gap: 10px;

  text-align: center;
  font-size: 15px;
}

a {
  font-size: 15px;
  font-weight: 600;
  color: white;
}

a:hover {
  color: #DFB751;
}

.email-content, .password-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  font-size: 15px;
  color: white;
}

.login-form h4 {
  margin: 0;

  color: white;
  font-size: 20px;
  font-weight: 800;
}

.input.empty {
  outline: 2px solid #df5151;
}

.input.empty:focus {
  outline: 2px solid #df5151;
}

.input__block {
  font-size: 15px;
  color: white;
  text-align: center;

  background-color: #df5151;

  width: 300px;
  padding: 5px 10px;
  border-radius: 5px;
}

.login-form input {
  font-weight: 600;
  color: #A1A1A1;

  width: 300px;
  padding: 10px 15px;
  font-size: 20px;

  background-color: #48484B;
  border: 0;
  border-radius: 10px;
}

.login-form input:hover {
  outline: 1px solid #DFB751;
}

.login-form input:focus {
  outline: 2px solid #DFB751;
}

.login-form input::placeholder  {
  color: #868686;
}

.login-form button {
  width: 150px;
  height: 55px;

  background-color: #DFB751;
  color: #131313;
  border: none;
  border-radius: 35px;
  cursor: pointer;

  transition: 0.3s;
}

.login-form button:hover {
  background-color: #ffd979;
}

.login-form button.disabled {
  opacity: 0.3;
  cursor: not-allowed; /* Меняем курсор */
}
</style>