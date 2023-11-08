<template>
  <customer-content-info v-if="path === 'info'" />
  <customer-content-edit v-else-if="path === 'edit'" />
  <customer-content-account v-else-if="path === 'account'" />
</template>

<script>
import CustomerContentInfo from "./customerContentInfo/CustomerContentInfo.vue";
import CustomerContentEdit from "./customerContentEdit/CustomerContentEdit.vue";
import CustomerContentAccount from "./customerContentAccount/CustomerContentAccount.vue";
console.log(window.location.pathname.split("/")[2]);

export default {
  data() {
    return {
      path: window.location.pathname.split("/")[2],
    };
  },
  components: {
    CustomerContentInfo,
    CustomerContentEdit,
    CustomerContentAccount,
  },
};
</script>

<style>
@import "./customerContent.css";
</style>
