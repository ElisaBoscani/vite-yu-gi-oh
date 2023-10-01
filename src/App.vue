<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppDropdown from "./components/AppDropdown.vue";
import AppCard from "./components/AppCard.vue";

export default {
  name: "App",
  data() {
    return {};
  },

  components: {
    AppHeader,
    AppMain,
    AppDropdown,
    AppCard,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
