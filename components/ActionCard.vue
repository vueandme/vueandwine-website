<template>
  <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
    <div
      class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
    >
      <div class="w-full font-bold text-xl text-gray-800 px-6 pt-6 text-center">
        <slot name="title"></slot>
      </div>
      <div class="w-full px-6 py-4 text-l flex flex-col items-center">
        <slot name="subtitle"> </slot>
      </div>
      <p class="text-gray-800 text-base px-6 mb-5 mt-5">
        <slot />
      </p>
    </div>
    <div
      class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
    >
      <div class="flex items-center justify-center">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
