<template>
    <div class="center">
        <span>Website address : </span>
        <input style="width: 250px;" type="textbox" v-model="Url" />
        <input type="button" value="Check" @click="sendRequest()" :disabled="CheckButtonDisabled"/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      Url: null,
      CheckButtonDisabled: true
    }
  },
  methods: {
    sendRequest: function() {
      if (!this.Url) {
        return
      }

      if (this.$store.state.requestRunning === false) {
        this.$socket.emit('check-for-dead', this.sanityzeUrl())
        this.$emit('start', true)
      }
    },
    sanityzeUrl: function() {
      let curl = ''

      if (this.Url.startsWith('http') === false) {
           curl = 'http://' + this.Url
      }
      else {
          curl = this.Url
      }

      return curl
    }
  },
  sockets: {
    connect: function () {
      this.CheckButtonDisabled = false
    },
    disconnect: function () {
      this.CheckButtonDisabled = true
    }
  }
}
</script>