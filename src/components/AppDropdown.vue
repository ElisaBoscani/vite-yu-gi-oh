<script>
import { store } from "../store.js";
export default {
  name: "AppDropdown",
  emits: ["serch"],
  data() {
    return {
      store,
      archetype_array: [],
    };
  },
  created() {
    store.cardData();
  },
};
</script>

<template>
  <section class="mt-4 mb-2 d-flex container">
    <select class="p-2" @change="$emit('serch')">
      <option v-for="cardinfo in store.cardinfo">
        <a class="dropdown-item" href="#">{{ cardinfo.archetype }}</a>
      </option>
      <!-- <option><a class="dropdown-item" href="#">Mago</a></option>
      <option><a class="dropdown-item" href="#">Trappola</a></option> -->
    </select>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
div {
  a {
    background-color: white;
  }
}
</style>
