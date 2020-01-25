<template>
  <div class="container">
    <div>
      <h1 class="inline">
        Enter number of buttons:
      </h1>
      <input v-model.number="numberOfButtons" class="inline" type="number" />
      <h1>Clicked button # {{ clickedButton }}</h1>
    </div>

    <div
      v-for="(button, index) in buttonArray"
      :key="index"
      class="inline-block"
    >
      <button
        :ref="'buttonRef' + button"
        class="w-20 h-20 m-6 font-bold text-white bg-blue-500 rounded outline-none hover:bg-blue-700"
        @click="getButtonId(button)"
      >
        {{ button }}
      </button>
    </div>
    <Boxes :quantity="numberOfButtons" />
  </div>
</template>

<script>
import Boxes from '~/components/Boxes.vue'

export default {
  components: {
    Boxes
  },
  data() {
    return {
      numberOfButtons: 5,
      clickedButton: null
    }
  },
  computed: {
    buttonArray() {
      const buttonArray = [...Array(this.numberOfButtons)].map((_, i) => i + 1)
      return buttonArray
    }
  },
  methods: {
    getButtonId(element) {
      // this.clickedButton = Math.floor(Math.random() * 100)
      // eslint-disable-next-line no-console
      // console.log(this.$refs['buttonRef' + index][0].textContent)
      this.clickedButton = this.$refs['buttonRef' + element][0].textContent
    }
  }
}
</script>

<style>
.container {
  @apply min-h-screen justify-center items-center bg-gray-100 text-center mx-2;
}

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>
