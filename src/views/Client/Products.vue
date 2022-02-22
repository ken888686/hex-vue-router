<template>
  <div class="container">
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in products"
          :key="index"
        >
          <td style="width: 200px">
            <div
              style="
                height: 100px;
                background-size: cover;
                background-position: center;
              "
            >
              <img
                :src="item.imageUrl"
                style="width: 100%; height: 100%; object-fit: cover"
              >
            </div>
          </td>
          <td>{{ item.title }}</td>
          <td>
            <del class="h6">原價 {{ item.origin_price }} 元</del>
            <div class="h5">
              現在只要 {{ item.price }} 元
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                type="button"
                class="btn btn-outline-secondary"
                :disabled="isLoading && loadingItemId === item.id"
                @click="showProductInfoModal(item.id)"
              >
                <i
                  v-if="isLoading && loadingItemId === item.id"
                  class="fas fa-spinner fa-pulse"
                />
                查看更多
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                :disabled="isLoading && loadingItemId === item.id"
                @click="addProduct({ productId: item.id, quantity: 1 })"
              >
                <i
                  v-if="isLoading && loadingItemId === item.id"
                  class="fas fa-spinner fa-pulse"
                />
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :prop-pagination="pagination"
      @set-current-page="getProducts"
    />
  </div>
</template>
<script>
import { customer } from '@/service';
import Pagination from '@/components/Pagination.vue';

export default {
  components: { Pagination },
  data() {
    return {
      products: [],
      isLoading: false,
      loadingItemId: '',
      pagination: {
        current_page: 1,
        has_next: false,
        has_pre: false,
        total_pages: 1,
      },
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      const loader = this.$loading.show();
      customer
        .getProducts(page)
        .then((res) => {
          console.log(res.data);
          const { products, pagination } = res.data;
          this.products = products;
          this.pagination = pagination;
        })
        .catch((err) => {
          console.dir(err);
        })
        .finally(() => {
          loader.hide();
        });
    },
  },
};
</script>
