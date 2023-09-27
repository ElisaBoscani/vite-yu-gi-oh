<script>
export default {
  name: "CardItem",
  props: { cardinfo: Object },
};
</script>
<template>
  <div class="col">
    <div class="card h-100">
      <img
        :src="cardinfo.card_images[0].image_url_small"
        class="card-img-top"
        alt="..."
      />
      <div
        class="bg card-body d-flex flex-column align-items-center card_botton"
      >
        <p class="card-text text-center text-uppercase text-white">
          {{ cardinfo.name }}
        </p>
        <span>{{ cardinfo.archetype }}</span>
      </div>
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
