<template>
  <div
    class="container mt-4 h-100 text-center d-flex flex-column align-items-center justify-content-center"
  >
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">
        請先登入
      </h1>
      <div class="col-8">
        <form
          id="form"
          class="form-sign"
          @submit.prevent="login"
        >
          <div class="form-floating mb-3">
            <input
              id="username"
              v-model="account"
              type="email"
              class="form-control"
              placeholder="name@example.com"
              required
              autofocus
              :disabled="disabled"
            >
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              id="password"
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Password"
              required
              :disabled="disabled"
            >
            <label for="password">Password</label>
          </div>
          <button
            class="btn btn-lg btn-primary w-100 mt-3"
            type="submit"
            :disabled="disabled"
          >
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="row mt-5 mb-3 text-muted">
      &copy; 2021~∞ - 六角學院
    </p>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import { auth } from '@/service';
import store from '@/store';

export default {
  data() {
    return {
      account: '',
      password: '',
      disabled: false,
      loginModal: null,
      message: 'Success!',
    };
  },
  mounted() {
    if (store.state.isLogin) {
      this.$router.push('/admin');
    }
  },
  methods: {
    ...mapActions(['login']),
    login() {
      this.disabled = true;
      const { account, password } = this;

      auth
        .login(account, password)
        .then((res) => {
          const { data } = res;
          store.dispatch('login', data.token);
          this.loginResult(true, data.message);
        })
        .catch((err) => {
          this.disabled = false;
          this.loginResult(false, err.response.data.message);
        });
    },
    loginResult(success, message) {
      this.message = message;
      if (success) {
        this.$router.push('/');
      } else {
        this.password = '';
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.form-sign {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
