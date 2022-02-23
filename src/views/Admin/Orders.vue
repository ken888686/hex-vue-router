<template>
  <div class="container col-md-8">
    <table class="table text-center">
      <thead>
        <tr>
          <th>結帳</th>
          <th>訂購人</th>
          <th>總價</th>
          <th>建立時間</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in orders"
          :key="index"
        >
          <th
            scope="row"
            width="120"
          >
            <input
              :id="`checkbox-${index}`"
              v-model="item.is_paid"
              class="form-check-input me-1"
              type="checkbox"
              @change="setOrderPaid(item.id, item.is_paid)"
            >
            <label :for="`checkbox-${index}`">
              {{ item.is_paid ? '已結帳' : '未結帳' }}
            </label>
          </th>
          <td width="200">
            {{ item.user.name }}
          </td>
          <td width="100">
            {{ item.total }}
          </td>
          <td>{{ createTime(item.create_at) }}</td>
        </tr>
      </tbody>
    </table>
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
import dateFormat, { masks } from 'dateformat';
import { admin } from '@/service';
import NotifyModal from '@/components/NotifyModal.vue';

export default {
  components: {
    NotifyModal,
  },
  data() {
    return {
      orders: [],
      pagination: {},
      title: '',
      success: false,
      message: '',
      notifyModal: null,
    };
  },
  computed: {},
  mounted() {
    this.getOrders();
    this.notifyModal = new Modal(this.$refs.modal.$el);
  },
  methods: {
    createTime(seconds) {
      const date = new Date(seconds * 1000);

      masks.hammerTime = 'yyyy-mm-dd HH:MM:ss';
      dateFormat(date, 'hammerTime');

      return dateFormat(date, 'hammerTime');
    },
    getOrders() {
      const loader = this.$loading.show();
      admin
        .getOrders()
        .then((res) => {
          const { orders, pagination, success } = res.data;
          this.orders = orders;
          this.pagination = pagination;
          this.success = success;
        })
        .catch(() => {})
        .finally(() => {
          loader.hide();
        });
    },
    setOrderPaid(orderId, isPaid) {
      const order = this.orders.find((item) => item.id === orderId);
      const loader = this.$loading.show();
      order.is_paid = isPaid;
      admin
        .updateOrder(orderId, order)
        .then((res) => {
          const { success, message } = res.data;
          this.success = success;
          this.message = message;
          this.title = '訂單狀態更新';
        })
        .catch(() => {})
        .finally(() => {
          loader.hide();
          this.notifyModal.show();
        });
    },
  },
};
</script>
