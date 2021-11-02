<template>
    <div class="d-flex">
        <div class="d-flex flex-row  ">

            <div style='display:none;'>{{ch}}</div>

            <div class='character'><div class='cell' v-if='notWord[0]'>{{displayChars[0]}}</div>
                                    <div class='word' v-else>{{displayWords[0]}}</div></div>
            <div class='character'><div class='cell' v-if='notWord[1]'>{{displayChars[1]}}</div>
                                    <div class='word' v-else>{{displayWords[1]}}</div></div>
            <div class='character'><div class='cell' v-if='notWord[2]'>{{displayChars[2]}}</div>  
                                    <div class='word' v-else>{{displayWords[2]}}</div></div>
            <div class='character'><div class='cell' v-if='notWord[3]'>{{displayChars[3]}}</div>
                                    <div class='word' v-else>{{displayWords[3]}}</div></div>
            <div class='character'><div class='cell' v-if='notWord[4]'>{{displayChars[4]}}</div>
                                    <div class='word' v-else>{{displayWords[4]}}</div></div>
            <div class='character'><div class='cell' v-if='notWord[5]'>{{displayChars[5]}}</div>
                                    <div class='word' v-else>{{displayWords[5]}}</div></div>
            <div class='character'><div class='cell' v-if='notWord[6]'>{{displayChars[6]}}</div>
                                    <div class='word' v-else>{{displayWords[6]}}</div></div>
            <div class='character'><div class='cell' v-if='notWord[7]'>{{displayChars[7]}}</div>
                                    <div class='word' v-else>{{displayWords[7]}}</div></div>

            
        </div>
    </div>
</template>
<script>
export default{
    computed:{

    },
    data: () => ({
        notWord : [true,true,true,true,true,true,true,true],
        displayWords:["","","","","",'A',"N","D"],
        displayChars:["A","E","!","#","5","R","4","5"],
        Chars:["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#"],
        ch:'9',

  }),
  mounted(){
      this.setIntervals();
  },
  methods:{
    setIntervals(){
        let context = this;
        for(let i = 0 ; i<8 ; i++){
            setInterval(function(){
                context.displayChars[i] = context.Chars[Math.floor(Math.random() * 28)];
                context.ch = Math.floor(Math.random() * 7);
            }, 300 +   Math.floor(Math.random() *20)* 70);
        }

      },
     wordChange(str){
        let startIndex = Math.floor(Math.random()*(9- str.length))
        let counter = 0;
        let cont = this
        for(let i = startIndex; i<startIndex + str.length;i++){
            cont.displayWords[i] = str[counter]
            setTimeout(function(){cont.notWord[i] = !cont.notWord[i]},200*i)
            setTimeout(function(){cont.notWord[i] = !cont.notWord[i]},1500 + 200*(8-i))
            counter++;
        }
     },
  }
}

</script>
<style>
.character{
  width: 40px !important;;
  height: 40px;
  font-size: 20px;
  text-align:center;
  font-weight: bold;
  color:rgb(223, 223, 223);
}
.word{
    font-size: 20px;
    color:black;
    font-weight: bold;
}
</style>