<template>
    <div class="center alert" v-if="Display">
        <span> {{ Message }}</span>
    </div>
</template>

<script>
export default {
  props: {
    Message: {
      type: String,
      default: null,
      required: true
    }
  },
  data() {
    return {
      Display: false
    }
  },
  watch: {
    Message: function(value) {
      setTimeout(() => {
        this.Display = false
      }, 2000)

      this.Display = true
    }
  }
}
</script>