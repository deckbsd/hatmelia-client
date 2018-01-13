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
      if(value === '') {
        return
      }
      
      setTimeout(() => {
        this.Display = false
        this.Message = ''
      }, 5000)

      this.Display = true
    }
  }
}
</script>