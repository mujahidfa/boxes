<template>
  <div>
    <button
      v-for="box in quantity"
      class="bg-green-500 hover:bg-green-700 text-white font-bold h-20 w-20 rounded outline-none m-6"
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

<style></style>
