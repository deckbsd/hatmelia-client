<template>
    <div class="center">
        <span>Website address : </span>
        <input style="width: 250px;" type="textbox" v-model="url" />
        <input type="button" value="Check" @click="SendRequest()"/>
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
    SendRequest: function() {
      if (!this.url) {
        return
      }

      this.$socket.emit("check-for-dead", this.SanityzeUrl())
    },
    SanityzeUrl: function() {
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