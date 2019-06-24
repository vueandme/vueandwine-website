<template>
  <div
    :class="{
      'flex flex-wrap items-center justify-center': true,
      'flex-row-reverse ': reverse
    }"
  >
    <div class="w-5/6 sm:w-1/2 p-6">
      <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
        <slot name="title"></slot>
      </h3>
      <div class="text-gray-600 mb-8">
        <slot />
      </div>
    </div>
    <div class="w-full sm:w-1/2 p-6">
      <slot name="img"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
