<script>
import AppDropdown from "./AppDropdown.vue";
import AppCard from "./AppCard.vue";
export default {
  nome: "AppMain",
  data() {
    return {};
  },
  components: {
    AppDropdown,
    AppCard,
  },
};
</script>

<template>
  <AppDropdown></AppDropdown>
  <AppCard></AppCard>
</template>

<style lang="scss" scoped></style>
