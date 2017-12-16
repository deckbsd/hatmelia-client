<template>
    <div class="center error" v-if="Display">
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
      }, 5000)

      this.Display = true
    }
  }
}
</script>