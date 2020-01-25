<template>
  <div>
    <button
      v-for="(box, index) in quantity"
      :key="index"
      class="w-20 h-20 m-6 font-bold text-white bg-green-500 rounded outline-none hover:bg-green-700"
    >
      {{ box }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      default: 1
    }
  }
}
</script>
