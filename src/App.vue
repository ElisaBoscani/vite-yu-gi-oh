<script>
import AppHeader from "./components/AppHeader.vue";
import AppDropdown from "./components/AppDropdown.vue";
import { store } from "./store";
export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppDropdown,
  },
  created() {
    store.cardData();
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <AppDropdown></AppDropdown>
    <section>
      <div class="container bg-white">
        <div class="row p-5">
          <div class="col">
            <p class="bg-black text-white p-3">Found 39 cards</p>
          </div>
        </div>
        <div
          class="card"
          style="width: 18rem"
          v-for="(item, index) in store.cardinfo"
        >
          <img
            :src="item.card_images.image_url_small"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use "./assets/scss/variables" as *;
</style>
