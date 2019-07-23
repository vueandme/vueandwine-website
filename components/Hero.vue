<template>
  <div class="pt-24 bg-light-green">
    <div
      class="container px-3 max-w-5xl mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Right Col-->
      <div
        class="flex flex-col w-full md:w-3/5 justify-center items-start sm:text-center md:text-left ml-auto"
      >
        <h1
          class="my-4 text-6xl font-bold leading-tight text-dark-green sm:mx-auto md:mx-0"
        >
          <slot name="main" />
        </h1>
        <p
          class="leading-normal text-2xl mb-8 text-dark-green sm:mx-auto md:mx-0"
        >
          <slot name="sub" />
        </p>
        <slot name="action"> </slot>
      </div>
      <!--Left Col-->
      <div class="w-full md:w-2/5 py-6 text-center self-start mr-auto">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
