<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-9">
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">
                品名
              </th>
              <th scope="col">
                數量
              </th>
              <th scope="col">
                單價
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in carts"
              :key="index"
            >
              <th scope="row">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="removeProduct(item.id)"
                >
                  移除購物車
                </button>
              </th>
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }} / {{ item.product.unit }}</td>
              <td>{{ item.product.price }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td
                class="text-end"
                colspan="3"
              >
                總計
              </td>
              <td>{{ final_total }}</td>
            </tr>
          </tfoot>
        </table>

        <OrderList
          :prop-carts="carts"
          @get-cart="getCart"
        />
      </div>
    </div>
  </div>
  <NotifyModal
    ref="modal"
    :prop-title="title"
    :prop-msg="message"
    :prop-success="success"
  />
</template>
<script>
import { Modal } from 'bootstrap';
import { customer } from '@/service';
import NotifyModal from '@/components/NotifyModal.vue';
import OrderList from '@/components/OrderList.vue';

export default {
  components: {
    NotifyModal,
    OrderList,
  },
  data() {
    return {
      carts: [],
      total: 0,
      final_total: 0,
      notifyModal: null,
      success: false,
      message: '',
      title: '',
    };
  },
  mounted() {
    this.getCart();
    this.notifyModal = new Modal(this.$refs.modal.$el);
  },
  methods: {
    getCart() {
      const loader = this.$loading.show();
      customer
        .getCart()
        .then((res) => {
          const { carts, total, final_total } = res.data.data;
          this.carts = carts;
          this.total = total;
          this.final_total = final_total;
        })
        .catch(() => {})
        .finally(() => {
          loader.hide();
        });
    },
    removeProduct(productId) {
      customer
        .removeCart(productId)
        .then((res) => {
          const { success, message } = res.data;
          this.success = success;
          this.message = message;
          this.title = '移除結果';
          this.notifyModal.show();
          this.getCart();
        })
        .catch(() => {})
        .finally(() => {});
    },
  },
};
</script>
