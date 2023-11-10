<template>
  <div class="product grid wide">
    <router-view name="product-to-buy" />
    <router-view name="product-list-auth" title="Cùng tác giả" />
    <router-view name="product-list-categories" title="Cùng thể loại" />
    <router-view name="product-info" />
  </div>
</template>
<script>
export default {};
</script>
<style></style>
