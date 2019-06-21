<template>
  <no-ssr>
    <vac :end-time="wDay">
      <span slot="process" slot-scope="{ timeObj }">
        <p class="text-5xl">{{ addLabel(timeObj.d, 'Day') }}</p>

        <p class="text-4xl">{{ addLabel(timeObj.h, 'Hour') }}</p>
        <p class="text-3xl">{{ addLabel(timeObj.m, 'Minutes') }}</p>
        <p class="text-2xl">{{ addLabel(timeObj.s, 'Second') }}</p>
      </span>
    </vac>
  </no-ssr>
</template>

<script>
export default {
  data() {
    return {
      wDay: new Date(2019, 8, 27, 9).getTime()
    }
  },
  methods: {
    addLabel(value, unit) {
      const result = `${value} ${unit}`
      return +value === 1 ? result : result + 's'
    }
  }
}
</script>

<style></style>
