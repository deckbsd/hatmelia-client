<template>
    <div v-if="isLinksArrayEmpty()">
        <div class="right">
            <input type='button' value="Export (csv)" @click="exportToCsv()">
        </div>      
        <table class="center"> 
            <tr>
                <th style="border-bottom: 1px solid #ddd">
                    Page(s)
                </th>
                <th style="border-bottom: 1px solid #ddd">
                    Dead link(s)
                </th>
                <th style="border-bottom: 1px solid #ddd">
                    Reason(s)
                </th>
            </tr>
            <tbody v-for="(link, index) in Links">
                <tr>
                    <td>
                        <a target="_blank" :href="link.from" :title="link.from"><span>{{ link.from }}</span></a>
                    </td>
                    <td>
                        <a target="_blank" :href="link.url" :title="link.url"><span>{{ link.url }}</span></a>
                    </td>
                    <td>
                        <span> {{ link.reason }}</span></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>  
</template>

<script>
import csvService from '../../services/csvService'
export default {
  props: {
    Links: {
      type: Array,
      default: [],
      required: true
    }
  },
  data() {
    return {
      Rows: [
        {
          title: 'Page(s)',
          name: 'from'
        },
        {
          title: 'Dead link(s)',
          name: 'url'
        },
        {
          title: 'Reason(s)',
          name: 'reason'
        }
      ]
    }
  },
  methods: {
    isLinksArrayEmpty: function() {
      return this.Links.length > 0
    },
    exportToCsv: function() {
      csvService.exportDataTableToCsv(
        this.Rows,
        this.Links,
        'deadlinks-results.csv'
      )
    }
  }
}
</script>