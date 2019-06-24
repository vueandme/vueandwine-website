<template>
  <figure class="flex flex-col">
    <img
      class="rounded-full  w-3/4 mx-auto mb-4"
      :src="src"
      alt="user avatar"
    />
    <figcaption class="mt-2">
      <slot />
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null
    }
  }
}
</script>

<style></style>
