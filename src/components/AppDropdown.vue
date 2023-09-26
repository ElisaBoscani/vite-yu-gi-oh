<script></script>

<template>
  <section class="mb-4">
    <div class="dropdown container pt-3">
      <a
        class="btn text-start dropdown-toggle fs-4"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Alien
      </a>

      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Mostro</a></li>
        <li><a class="dropdown-item" href="#">Mago</a></li>
        <li><a class="dropdown-item" href="#">Trappola</a></li>
      </ul>
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
