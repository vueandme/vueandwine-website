<template>
  <nav
    :class="{
      'fixed w-full z-30 top-0 text-white': true,
      'bg-white shadow': scrolled,
      gradient: !scrolled
    }"
  >
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <nuxt-link
          :class="{
            'no-underline hover:no-underline font-bold text-2xl lg:text-3xl': true,
            'text-white': !scrolled,
            'text-gray-800': scrolled
          }"
          to="/"
        >
          Vueand.me
        </nuxt-link>
      </div>

      <div class="block lg:hidden pr-4">
        <button
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
          @click="openMenu"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        :class="{
          'w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20': true,
          'bg-white': scrolled,
          'hidden ': !menuOpen
        }"
      >
        <ul
          class="list-reset lg:flex justify-end flex-1 items-center mb-2 lg:mb-0"
        >
          <li class="mr-3">
            <nuxt-link
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              to="/#teachers"
            >
              Teachers
            </nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              to="/#workshops"
            >
              Workshops
            </nuxt-link>
          </li>
        </ul>
        <TicketButton
          :class="{
            'mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75': true,
            'gradient text-white': scrolled,
            'bg-white text-gray-800': !scrolled
          }"
        />
      </div>
    </div>

    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
import TicketButton from '@/components/eventbrite/TicketButton'
export default {
  components: {
    TicketButton
  },
  props: {
    scrolled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style></style>
