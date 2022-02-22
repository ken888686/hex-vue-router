<template>
  <div class="container col-md-8">
    <table class="table">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in products"
          :key="index"
        >
          <th scope="row">
            {{ item.category }}
          </th>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <input
              :id="`checkbox-${index}`"
              v-model="item.is_enabled"
              class="form-check-input me-1"
              type="checkbox"
              @change="setProduct(item.id, item.is_enabled)"
            >
            <label :for="`checkbox-${index}`">{{ item.is_enabled }}</label>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <Pagination
        :prop-pagination="pagination"
        @set-current-page="getProducts"
      />
    </div>
  </div>

  <NotifyModal
    ref="modal"
    :prop-title="title"
    :prop-success="success"
    :prop-msg="message"
  />
</template>
<script>
import { Modal } from 'bootstrap';
import { admin } from '@/service';
import NotifyModal from '@/components/NotifyModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    NotifyModal,
    Pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      title: '',
      success: false,
      message: '',
      notifyModal: null,
    };
  },
  mounted() {
    this.getProducts();
    this.notifyModal = new Modal(this.$refs.modal.$el);
  },
  methods: {
    getProducts(page = 1) {
      const loader = this.$loading.show();
      admin
        .getProducts(page)
        .then((res) => {
          const { pagination, products } = res.data;
          this.pagination = pagination;
          this.products = products;
        })
        .catch(() => {})
        .finally(() => {
          loader.hide();
        });
    },
    setProduct(productId, isEnabled) {
      const product = this.products.find((x) => x.id === productId);
      const loader = this.$loading.show();
      product.is_enabled = isEnabled;

      admin
        .updateProduct(product)
        .then((res) => {
          const { success, message } = res.data;
          this.title = '更新結果';
          this.success = success;
          this.message = message;
          this.getProducts();
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
