<template>
    <span>
        <status-indicator positive pulse v-if="State" title="API online"/>
        <status-indicator negative pulse v-if="!State" title="API offline"/>
    </span>
</template>

<script>
export default {
  data() {
    return {
      State: false
    }
  },
  sockets: {
    connect: function() {
      this.State = true
    },
    disconnect: function() {
      this.State = false
    }
  }
}
</script>