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
      <my-input
          v-model="login.email"
          class="input"
          :class="{'empty': (login.email === '' && buttonClicked)}"
          type="email"
          placeholder="name@domain.com"
      />
    </div>
    <div class="password-content">
      <div class="password title">Пароль</div>
      <my-input
          v-model="login.password"
          class="input"
          :class="{'empty': (login.password === '' && buttonClicked)}"
          type="password"
          placeholder="password123"
      />
    </div>
    <my-button
        @click="loginAccount"
    >
      Войти
    </my-button>
    <div class="sign-link">У вас еще нет аккаунта?
      <router-link to="/sign-up">Зарегистрироваться</router-link>
    </div>
  </form>
</template>

<script>
  import MyHeader from "@/components/Base/MyHeader.vue";
  import MyInput from "@/components/UI/MyInput.vue";
  import MyButton from "@/components/UI/MyButton.vue";

  export default {
    components: {
      MyButton,
      MyHeader,
      MyInput
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

        if (this.login.email === '' || this.login.password === '') {
          // Выходим из метода
          return;
        }

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

.input__block {
  font-size: 15px;
  color: white;
  text-align: center;

  background-color: #df5151;

  width: 300px;
  padding: 5px 10px;
  border-radius: 5px;
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