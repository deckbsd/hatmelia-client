<template>
    <div>
        <address-bar @start="start"></address-bar>
        <messages :Message="Message"></messages>
        <total :Total="TotalLinkChecked" :TimeElapsed="TimeElapsed"></total>
        <loading v-if="Loading"></loading>
        <links-table :Links="Links"></links-table>
    </div>
</template>

<script>
import AddressBar from "../components/inputs/AddressBar.vue"
import LinksTable from "../components/display/HtmlDeadLinksTable.vue"
import Total from "../components/display/Statistics.vue"
import Loading from "../components/display/Loading.vue"
import Messages from "../components/display/Messages.vue"
export default {
  components: {
    AddressBar: AddressBar,
    LinksTable: LinksTable,
    Total: Total,
    Loading: Loading,
    Messages: Messages
  },
  data() {
    return {
      Links: [],
      TotalLinkChecked: 0,
      TimeElapsed: 0,
      Loading: false,
      Message: ""
    }
  },
  methods: {
    start: function(started) {
      this.Links = []
      this.TotalLinkChecked = this.TimeElapsed = 0
    }
  },
  sockets: {
    deadlinkDetected: function(deadLink) {
      this.Links.push(deadLink)
    },
    linkChecked: function(total) {
      this.TotalLinkChecked = total
      this.Loading = true
    },
    requestStarted: function() {
      this.$store.commit("REQUEST_RUNNING", true)
    },
    requestFinished: function(time) {
      this.TimeElapsed = time
      this.Loading = false
      this.$store.commit("REQUEST_RUNNING", false)
    },
    serverError: function(error) {
      this.Message = error
    }
  }
}
</script>