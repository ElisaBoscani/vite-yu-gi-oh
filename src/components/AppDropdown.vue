<script>
import { store } from "../store.js";
export default {
  name: "AppDropdown",
  emits: ["filter"],
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section class="mt-4 mb-2 d-flex container">
    <div class="filter">
      <select
        class="p-2"
        @change="$emit('filter')"
        v-model="store.archetypeTex"
      >
        <!--  <option :value="cardinfo.archetype" v-for="cardinfo in store.url_arch">
        {{ cardinfo.archetype }}
      </option> -->
        <option :value="arche.archetype_name" v-for="arche in store.cardArch">
          {{ arche.archetype_name }}
        </option>
        <!-- <option><a class="dropdown-item" href="#">Mago</a></option>
      <option><a class="dropdown-item" href="#">Trappola</a></option> -->
      </select>
    </div>
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
