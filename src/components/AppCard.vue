<script>
import { store } from "../store";
import CardItem from "./CardItem.vue";
export default {
  name: "AppCard",
  data() {
    return {
      store,
    };
  },
  methods: {
    load() {
      return setTimeout(this.cardData(), 5000);
    },
  },
  components: {
    CardItem,
  },
  created() {
    store.cardData();
  },
};
</script>

<template>
  <section v-if="store.cardinfo">
    <div class="container bg-white p-5">
      <div class="bg-black">
        <p class="text-white p-3 mb-0">Found 39 cards</p>
      </div>

      <div
        class="row row-cols-lg-6 row-cols-sm-3 row-cols-md-4 gap-3 justify-content-lg-between justify-content-sm-center justify-content-md-evenly"
      >
        <CardItem
          :cardinfo="cardinfo"
          v-for="cardinfo in store.cardinfo"
        ></CardItem>
        >
        <!--  <div class="col" v-for="item in store.cardinfo">
          <div class="card">
            <img
              :src="item.card_images[0].image_url_small"
              class="card-img-top"
              alt="..."
            />
            <div
              class="bg card-body d-flex flex-column align-items-center card_botton"
            >
              <p class="card-text text-center text-uppercase text-white">
                {{ item.name }}
              </p>
              <span>{{ item.archetype }}</span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
  <div
    v-else
    class="d-flex justify-content-center align-content-center p-5 flex-column"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-arrow-clockwise"
        viewBox="0 0 16 16"
        style="color: white"
      >
        <path
          fill-rule="evenodd"
          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
        />
        <path
          d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
        />
      </svg>
    </div>
    <div>
      <span class="text-white fs-1">Loading . . .</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
.card_botton {
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
}
.bg {
  background-color: $yu-gi_oh-primary;
}
</style>
