<template>
  <h1 class="container text-center">
    {{ title }}
  </h1>
</template>
<script>
export default {
  data() {
    return {
      title: 'Admin',
    };
  },
  mounted() {
    this.title = 'Admin Logged In';
  },
};
</script>
