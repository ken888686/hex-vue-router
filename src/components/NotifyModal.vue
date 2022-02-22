<template>
  <div
    id="modal"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="modalLabel"
            class="modal-title"
          >
            {{ title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          {{ message }}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            :class="success ? 'btn-primary' : 'btn-danger'"
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
export default {
  props: {
    propTitle: {
      type: String,
      default: '結果',
    },
    propMsg: {
      type: String,
      default: '',
    },
    propSuccess: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title: '',
      message: '',
      success: false,
      modal: null,
    };
  },
  watch: {
    propTitle(newVal) {
      this.title = newVal;
    },
    propMsg(newVal) {
      this.message = newVal;
    },
    propSuccess(newVal) {
      this.success = newVal;
    },
  },
  mounted() {
    this.modal = this.$refs.modal;
  },
};
</script>
