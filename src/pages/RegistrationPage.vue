<template>
  <div class="sign-up-container">
    <header>
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.svg" alt="">
        </router-link>
      </div>
    </header>
    <main>
      <div class="title">Зарегистрируйтесь, чтобы быть на волне</div>
      <div class="input-forms">
        <div class="input-title">Почта</div>
        <my-input
            type="email"
            placeholder="name@domain.com"
        />
        <div class="input-title">Пароль</div>
        <my-input
            type="email"
            placeholder="password123"
        />
      </div>
      <my-button
        class="sign-up__button"
      >
        Зарегистрироваться
      </my-button>

      <div class="line-odds"></div>

      <div class="warning-text">Регистрация в разработке....</div>

    </main>
    <footer>
      <div class="footer__text">Здесь Footer</div>
      <div class="footer__text">Автор - Печенюк Денис =)</div>
    </footer>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import PlaylistForm from "@/components/Forms/PlaylistForm.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {

  components: {
    MyInput,
    PlaylistForm,
    MyButton
  }
}

</script>

<style scoped>
  .sign-up-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    height: 100px;
    padding: 20px;

    display: flex;
    align-items: center;
  }

  .logo img {
    height: 50px;
    margin-left: 10px;
  }

  main {
    flex: 1;
    width: 400px;
    margin: 0 auto;

    gap: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    width: 350px;

    text-align: center;
    margin-bottom: 20px;

    font-size: 30px;
    color: white;
  }

  .input-forms {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input-title {
    color: white;
    font-size: 13px;
  }

  .sign-up__button {
    width: 250px;
  }

  .line-odds {
    background-color: #A1A1A1;
    height: 1px;
    width: 300px;
  }

  footer {
    height: 100px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  footer .footer__text {
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
  }

</style>