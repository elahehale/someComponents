<template>
  <v-container style="text-align:center">
      <div  style="width:700px; margin:20px;">
      <cost-slide></cost-slide>
      </div>
  </v-container>
</template>
<script>

import CostSlide from '../components/Cost.vue'

export default {
  components:{
    CostSlide,
  },
  data: () => ({

  }),
 
}
</script>
