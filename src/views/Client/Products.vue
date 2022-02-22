<template>
  <div>
    {{ title }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Products',
    };
  },
  mounted() {
    console.log('Products');
  },
};
</script>
