<template>
  <nav
    aria-label="Page navigation"
    class="d-inline-block"
  >
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ disabled: !pagination.has_pre }"
      >
        <button
          class="page-link"
          @click="setCurrentPage(pagination.current_page - 1)"
        >
          Previous
        </button>
      </li>
      <li
        v-for="(page, index) in pagination.total_pages"
        :key="index"
        class="page-item"
        :class="{ active: pagination.current_page === page }"
        :aria-current="pagination.current_page === page ? 'page' : null"
      >
        <button
          class="page-link"
          @click="setCurrentPage(page)"
        >
          {{ page }}
        </button>
      </li>
      <li
        class="page-item"
        :class="{ disabled: !pagination.has_next }"
      >
        <button
          class="page-link"
          @click="setCurrentPage(pagination.current_page + 1)"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    propPagination: {
      type: Object,
      default: () => ({
        current_page: 1,
        has_next: false,
        has_pre: false,
        total_pages: 1,
      }),
    },
  },
  emits: ['set-current-page'],
  data() {
    return {
      pagination: {},
    };
  },
  watch: {
    propPagination() {
      this.pagination = this.propPagination;
    },
  },
  methods: {
    setCurrentPage(page) {
      this.$emit('set-current-page', page);
    },
  },
};
</script>
