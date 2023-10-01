<script>
import AppDropdown from "./AppDropdown.vue";
import AppCard from "./AppCard.vue";
import { store } from "../store";
export default {
  nome: "AppMain",
  data() {
    return {
      store,
    };
  },
  components: {
    AppDropdown,
    AppCard,
  },

  methods: {
    findArchetipe() {
      const url = this.store.base_url + `&archetype=${this.store.archetypeTex}`;
      this.store.cardData(url);
      console.log("store.base_url:", url);
    },
  },
  mounted() {
    this.store.cardData(this.store.base_url);

    this.store.archetypesDate(this.store.arch_url);
  },
};
</script>

<template>
  <AppDropdown @filter="findArchetipe" />

  <AppCard></AppCard>
</template>

<style lang="scss" scoped></style>
