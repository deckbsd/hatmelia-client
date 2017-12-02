<template>
    <div class="center">
        <div  v-if="Total > 0">
            <span>Checked links : {{ Total }} </span>
        </div>
        <div v-if="TimeElapsed > 0">
            <span>Elapsed time : {{ FormatedTimeElapsed }} </span>
        </div>
    </div>
</template>

<script>
import formatService from '../../services/formatService'
export default {
  props: {
    Total: {
      type: Number,
      default: 0,
      required: true
    },
    TimeElapsed: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data() {
    return {
      FormatedTimeElapsed: null
    }
  },
  watch: {
      TimeElapsed: function (value) {
          if(value > 0) {
              this.FormatedTimeElapsed = formatService.msToHMS(value)
          } 
      }
  }
}
</script>