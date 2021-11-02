<template>
  <div style="text-align:center;">
    <linee ref="line1"></linee>
    <linee ref="line2"></linee>
    <linee ref="line3"></linee>
    <linee ref="line4"></linee>
    <linee ref="line5"></linee>
    <linee ref="line6"></linee>
    <linee ref="line7"></linee>
    <linee ref="line8"></linee>
  </div>
</template>
<script>
import linee from './Line.vue'

export default {
  components:{
    linee,
  },
  data: () => ({
        words :['APP','GOZAR','MOBILE','ANDROID','WEB'],

word_idex:0,
  }),
  mounted(){
    let context = this
    setInterval(function(){
                    let line_nuumber = Math.floor(Math.random()*8) + 1
                    if (line_nuumber == 8)
                      context.$refs.line8.wordChange(context.words[context.word_idex])
                       if (line_nuumber == 7)
                      context.$refs.line7.wordChange(context.words[context.word_idex])
                       if (line_nuumber == 6)
                      context.$refs.line6.wordChange(context.words[context.word_idex])
                       if (line_nuumber == 5)
                      context.$refs.line5.wordChange(context.words[context.word_idex])
                       if (line_nuumber == 4)
                      context.$refs.line4.wordChange(context.words[context.word_idex])
                       if (line_nuumber == 3)
                      context.$refs.line3.wordChange(context.words[context.word_idex])
                      if (line_nuumber == 2)
                      context.$refs.line2.wordChange(context.words[context.word_idex])
                       if (line_nuumber == 1)
                      context.$refs.line1.wordChange(context.words[context.word_idex])
                      context.word_idex =( context.word_idex + 1) %5
               }, 3000);
  },
  methods:{
  }
}
</script>
