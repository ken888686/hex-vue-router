<template>
  <Navbar />
  <div class="text-center">
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  mounted() {},
};
</script>
