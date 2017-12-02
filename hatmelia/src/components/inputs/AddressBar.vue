<template>
    <div class="center">
        <span>Website address : </span>
        <input style="width: 250px;" type="textbox" v-model="url" />
        <input type="button" value="Check" @click="sendRequest()"/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      url: null
    }
  },
  methods: {
    sendRequest: function() {
      if (!this.url) {
        return
      }

      this.$socket.emit("check-for-dead", this.sanityzeUrl())
      this.$emit('start', true)
    },
    sanityzeUrl: function() {
      let curl = ""

      if (this.url.startsWith("http") === false) {
           curl = "http://" + this.url
      }
      else {
          curl = this.url
      }

      return curl
    }
  }
}
</script>