<template>
  <div class="flex flex-row p-2">
    <figure class="flex flex-col mx-2">
      <img
        class="rounded-full"
        src="https://avatars0.githubusercontent.com/u/18719025?s=460&v=4"
      />
      <figcaption class="text-center text-sm">
        <slot name="title" />
      </figcaption>
    </figure>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: null
    }
  }
}
</script>

<style></style>
