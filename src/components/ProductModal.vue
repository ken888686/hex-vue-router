<template>
  <div
    id="productInfoModal"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="productInfoModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-xl"
      role="document"
    >
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5
            id="productInfoModalLabel"
            class="modal-title"
          >
            <span>{{ product.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img
                class="img-fluid"
                :src="product.imageUrl"
                alt=""
              >
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill">
                {{ product.category }}
              </span>
              <p>商品描述：{{ product.description }}</p>
              <p>商品內容：{{ product.content }}</p>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">
                現在只要 {{ product.price }} 元
              </div>
              <div>
                <div class="input-group">
                  <input
                    v-model="quantity"
                    type="number"
                    class="form-control"
                    min="1"
                  >
                  <button
                    type="button"
                    class="btn btn-primary"
                    :disabled="done"
                    @click="addProduct(product.id, quantity)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    propProduct: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['add-product'],
  data() {
    return {
      product: {},
      quantity: 1,
      done: false,
    };
  },
  watch: {
    propProduct() {
      this.product = this.propProduct;
      this.quantity = 1;
      this.done = false;
    },
    quantity() {
      this.done = false;
    },
  },
  mounted() {},
  methods: {
    addProduct(productId, quantity) {
      this.done = true;
      this.$emit('add-product', { productId, quantity });
    },
  },
};
</script>
