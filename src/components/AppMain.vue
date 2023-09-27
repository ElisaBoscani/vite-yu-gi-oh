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
  created() {
    store.cardData();
  },
  methods: {
    findArchetipe() {
      const url_arch =
        "https://db.ygoprodeck.com/api/v7/cardinfo.php" +
        `&archetype=${store.cardArch}`;
      store.base_url = url_arch + "&num=20&offset=0";

      console.log(store.base_url);
    },
  },
};
</script>

<template>
  <AppDropdown @serch="findArchetipe()"></AppDropdown>
  <AppCard></AppCard>
</template>

<style lang="scss" scoped></style>
