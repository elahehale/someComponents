<template>
  <v-container style="text-align:center">
      <div  style="width:320px; margin:20px;">
      <line-table></line-table>
      </div>
  </v-container>
</template>
<script>

import lineTable from '../components/RandomChars/Table.vue'

export default {
  components:{
    lineTable,
  },
  data: () => ({

  }),
 
}
</script>
