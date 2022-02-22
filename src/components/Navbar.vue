<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link
        class="navbar-brand"
        to="/"
      >
        <img
          src="@/assets/logo.png"
          alt="logo"
          :width="logoSize"
          :height="logoSize"
        >
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul
          v-if="$route.path.includes('admin')"
          class="navbar-nav me-auto mb-2 mb-lg-0"
        >
          <!-- Admin -->
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/admin"
            >
              首頁
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/admin/products"
            >
              商品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/admin/orders"
            >
              訂單列表
            </router-link>
          </li>
        </ul>
        <ul
          v-else
          class="navbar-nav me-auto mb-2 mb-lg-0"
        >
          <!-- Client -->
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/"
            >
              首頁
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/products"
            >
              產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/carts"
            >
              購物車
            </router-link>
          </li>
        </ul>
      </div>
      <router-link
        v-if="$route.path.includes('admin')"
        type="button"
        class="btn btn-outline-secondary me-1"
        to="/"
      >
        進入前台
      </router-link>
      <button
        v-else
        type="button"
        class="btn btn-outline-secondary me-1"
        @click="checkLogin"
      >
        進入後台
      </button>
      <router-link
        v-if="!isLogin"
        to="/admin/login"
        type="button"
        class="btn btn-primary"
      >
        登入
      </router-link>
      <button
        v-else
        type="button"
        class="btn btn-outline-primary"
        :disabled="isProcessing"
        @click="logout"
      >
        登出
      </button>
    </div>
  </nav>

  <!-- Modal -->
  <div
    id="logoutModal"
    ref="logoutModal"
    class="modal fade"
    tabindex="-1"
    aria-hidden="true"
    aria-labelledby="logoutModalLabel"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="logoutModalLabel"
            class="modal-title"
          >
            Hexschool
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <p>{{ message }}</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap';
import store from '@/store';
import router from '@/router';
import { auth } from '@/service';

export default {
  data() {
    return {
      logoSize: 25,
      isProcessing: false,
      message: '',
      logoutModal: null,
    };
  },
  computed: {
    isLogin() {
      return store.state.isLogin;
    },
  },
  mounted() {
    this.logoutModal = new Modal(this.$refs.logoutModal);
  },
  methods: {
    checkLogin() {
      const loader = this.$loading.show();
      auth
        .check()
        .then((res) => {
          const { success } = res.data;
          if (success) {
            router.push('/admin');
          }
        })
        .catch(() => {
          router.push('/admin/login');
        })
        .finally(() => {
          loader.hide();
        });
    },

    logout() {
      this.isProcessing = true;
      auth
        .logout()
        .then((res) => {
          const { data } = res;
          this.logoutResult(true, data.message);
        })
        .catch((err) => {
          this.logoutResult(false, err.response.data.message);
        })
        .finally(() => {
          this.isProcessing = false;
        });
    },
    logoutResult(success, message) {
      this.message = message;
      this.logoutModal.toggle();
      if (success) {
        store.dispatch('logout');
        router.push('/');
      }
    },
  },
};
</script>
