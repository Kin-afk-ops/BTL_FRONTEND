<template>
  <customer-content-info />
  <customer-content-edit />
</template>

<script>
import CustomerContentInfo from "./customerContentInfo/CustomerContentInfo.vue";
import CustomerContentEdit from "./customerContentEdit/CustomerContentEdit.vue";

export default {
  components: {
    CustomerContentInfo,
    CustomerContentEdit,
  },
};
</script>
