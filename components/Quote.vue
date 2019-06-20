<template>
  <blockquote
    class="italic antialised w-2/3 mx-auto flex flex-col justify-center items-center"
  >
    <div class="relative">
      <slot />
    </div>
    <footer class="my-2 border-t border-gray-300">
      <slot name="footer" />
    </footer>
  </blockquote>
</template>

<script>
export default {}
</script>

<style>
blockquote p:first-of-type:before {
  content: '\201c';
  position: absolute;
  left: -0.5rem;
}

blockquote p:last-of-type:after {
  content: '\201d';
  position: absolute;
}
</style>
