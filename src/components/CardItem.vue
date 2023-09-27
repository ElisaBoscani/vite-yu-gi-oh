<script>
import { store } from "../store";
export default {
  name: "CardItem",
  props: cardinfo,
};
</script>
<template>
  <div class="col">
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
  </div>
</template>
<style></style>
