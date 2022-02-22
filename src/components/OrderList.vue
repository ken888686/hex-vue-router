<template>
  <div class="row justify-content-center">
    <Form
      v-slot="{ errors }"
      class="col-md-8"
      @submit="onSubmit"
    >
      <div class="mb-3">
        <label
          for="email"
          class="form-label"
        > Email </label>
        <Field
          id="email"
          v-model="user.email"
          rules="email|required"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
        />
        <ErrorMessage
          name="email"
          class="invalid-feedback"
        />
      </div>

      <div class="mb-3">
        <label
          for="name"
          class="form-label"
        > 姓名 </label>
        <Field
          id="name"
          v-model="user.name"
          rules="required"
          name="name"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['name'] }"
          placeholder="請輸入姓名"
        />
        <ErrorMessage
          name="name"
          class="invalid-feedback"
        />
      </div>

      <div class="mb-3">
        <label
          for="tel"
          class="form-label"
        >收件人電話</label>
        <Field
          id="tel"
          v-model="user.tel"
          :rules="isPhone"
          name="phone"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['phone'] }"
          placeholder="請輸入電話"
        />
        <ErrorMessage
          name="phone"
          class="invalid-feedback"
        />
      </div>

      <div class="mb-3">
        <label
          for="address"
          class="form-label"
        >收件人地址</label>
        <Field
          id="address"
          v-model="user.address"
          rules="required"
          name="address"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['address'] }"
          placeholder="請輸入地址"
        />
        <ErrorMessage
          name="address"
          class="invalid-feedback"
        />
      </div>

      <div class="mb-3">
        <label
          for="message"
          class="form-label"
        >留言</label>
        <textarea
          id="message"
          v-model="memo"
          class="form-control"
          cols="30"
          rows="10"
        />
      </div>

      <div class="text-end">
        <button
          type="submit"
          class="btn btn-danger"
          :disabled="carts.length <= 0"
        >
          送出訂單
        </button>
      </div>
    </Form>
  </div>
</template>
<script>
import {
  Form, Field, ErrorMessage, configure, defineRule,
} from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize, loadLocaleFromURL } from '@vee-validate/i18n';
import { customer } from '@/service';

loadLocaleFromURL(
  'https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_TW.json',
);
configure({
  generateMessage: localize('zh_TW'),
  validateOnInput: true,
});
defineRule('required', required);
defineRule('email', email);

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    propCarts: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['get-cart'],
  data() {
    return {
      carts: [],
      user: {
        email: '',
        name: '',
        tel: '',
        address: '',
      },
      memo: '',
    };
  },
  watch: {
    propCarts(val) {
      this.carts = val;
    },
  },
  mounted() {},
  methods: {
    isPhone(value) {
      // cell: (^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$
      // phone: (((\+?(886)\d{1,2})|(^0\d{1,2}))-?)(\d{3,4}-?)(\d{4}-?)$
      const phoneNum = /(^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$/;
      return phoneNum.test(value) ? true : '需要正確的手機號碼';
    },
    onSubmit() {
      const loader = this.$loading.show();
      const data = {
        user: {
          email: this.user.email,
          name: this.user.name,
          tel: this.user.tel,
          address: this.user.address,
        },
        message: this.memo,
      };

      customer
        .submitOrder(data)
        .then((res) => {
          const { success, message } = res.data;
          this.message = message;
          this.success = success;
          this.user = {
            email: '',
            name: '',
            tel: '',
            address: '',
          };
          this.memo = '';
        })
        .catch((err) => {
          const { message, success } = err.response.data;
          this.message = message;
          this.success = success;
        })
        .finally(() => {
          this.$router.go();
          loader.hide();
        });
    },
  },
};
</script>
