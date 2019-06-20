<template>
  <section class="w-full flex">
    <div class="container mx-auto ">
      <h2 class="text-center text-2xl">
        <slot name="header" />
      </h2>
      <div class="px-4 flex flex-col md:flex-row items-center my-12 md:my24">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
