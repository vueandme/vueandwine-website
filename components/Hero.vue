<template>
  <div class="pt-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase tracking-loose w-full">
          <slot name="intro" />
        </p>
        <h1 class="my-4 text-5xl font-bold leading-tight">
          <slot name="main" />
        </h1>
        <p class="leading-normal text-2xl mb-8">
          <slot name="sub" />
        </p>

        <slot name="action"> </slot>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center self-start">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
