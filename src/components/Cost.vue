<template>
  <div  >
    <v-stepper v-model="index" style="background-color:#F2F2F2; " >
      <v-stepper-items style="background-color:#F2F2F2;">
        <v-stepper-content v-for="(question,n) in $store.state.questions" :key="`${n+1}-content`" :step="n+1" style="background-color:#F2F2F2;min-height:450px;">
          <v-container style="color:#707070;">
              <v-row >
                  <v-col>
                      <v-row>
                          <v-col md='1' sm='12' v-if="index != 1" >
                                <v-icon  @click='prevStep(n);change_line(n)'
                                        color="#909090"
                                        style="font-size:70px; position:relative; "
                                        >mdi-chevron-left
                                </v-icon> 
                          </v-col>
                          <v-col md='11' sm='12'>
                                <h1 style="font-weight:900; font-size:50px;" >TITLE </h1>
                          </v-col>
                      </v-row>
                      <br/>
                      <h1 style="font-weight:400;">matnkheyli mohem soal injast {{question.question}}</h1>
                   </v-col>
                   <v-col align='center'>                       
                      <div class='answers' @click='select($event,n,0)'>
                          <v-row><v-col> <div class='checkBox' ></div></v-col>  <v-col md='8'>  {{question.answers[0]}}</v-col></v-row>
                      </div>
                      <div class='answers' @click='select($event,n,1)'>
                          <v-row><v-col> <div class='checkBox' ></div></v-col>  <v-col md='8'>  {{question.answers[1]}}</v-col></v-row>
                      </div>
                      <div class='answers' @click='select($event,n,2)'>
                          <v-row><v-col> <div class='checkBox' ></div></v-col>  <v-col md='8'>  {{question.answers[2]}}</v-col></v-row>
                      </div>
                      <!-- <v-btn >hi</v-btn> -->
                      <!-- <v-btn class='nextBtn' color="#43B65C"  height="70" :disabled='firstempty'  @click="nextStep(n + 1);change_line(n+2)"> -->
                      <v-btn class='nextBtn' color="#43B65C"  height="70" 
                       :disabled='$store.getters.questionIsDisabled(n)'  @click="nextStep(n + 1);change_line(n+2)">
                       <v-row style="text-align:left; width:100%;" align="center" justify="start">
                        <v-icon color="white" x-large >mdi-chevron-right </v-icon> 
                        <h2 class='btnText' style="margin:0;" v-if="$store.getters.questionIsEmpty(n)">{{question.text}}</h2>
                        <h2 class='btnText' style="margin:0;" v-else>next</h2>
                       </v-row>
                      </v-btn>
                  </v-col>
              </v-row>
          </v-container>
        </v-stepper-content>
        <v-stepper-content :step='9' style="min-height:450px;">
             <v-container>
              <v-row style="color:#707070;">
                  <v-col>
                      <v-row>
                          <v-col md='1' v-if="index != 1">
                                <v-icon  @click='prevStep(8);change_line(8)'
                                        color="#909090"
                                        style="font-size:100px; position:relative; left:-50px;"
                                        >mdi-chevron-left
                                </v-icon> 
                          </v-col>
                          <v-col md='11' style="font-weight:900; font-size:30px;">
                            <h3 >ESTIMATION</h3>
                            <h3 style="color:#43B65C;" >{{estimate_low}}$-{{estimate_high}}$</h3>
                          </v-col>
                      </v-row>
                      <br/>
                      <h3 style="font-weight:400;">BMA INEBARAVORD MA INEBBARAVORD MA INEBARAVORD MA INEBARAVORD MA INEARAVORD MA INEBARAVORD MA BARAVORD MA INEBARAVORD MA INEINEBARAVORD MA INEBARAVORD MA INEBARAVORD MA INE</h3>
                   </v-col>
                   <v-col align='center' >                       
                      <input type='text' class='sendMessageInput' placeholder="YOUR NAME"  style="width:300px;">
                      <input type='text' class='sendMessageInput' placeholder="YOUR EMAIL" style="width:300px;">
                      <textarea type='text' class='sendMessageInput' placeholder="YOUR MESSAGE" style="width:300px; "></textarea><br/>
                      <v-btn class='sendBtn' color="#43B65C"  height="70" width="300" ><p class='btnText'>Send</p></v-btn>
                  </v-col>
              </v-row>
          </v-container>
        </v-stepper-content>
      </v-stepper-items>
      <!-- nav line -->
      <v-container style="background-color:#F2F2F2; color:gray;">
          <h5 class='informStyle' v-if="index!=9">you can choose multiple answers</h5>
          <h5 class='informStyle' v-else>this is just an estimation</h5>
          <div style='background-color:white; height:10px; width:100%; border-radius:20px;'>
            <div v-bind:style="progress" class='greenLine'
            style='background-color:#43B65C; height:10px; width:50%; border-radius:20px;'>
            </div>
            </div>

        <v-row class='d-flex justify-space-around' style="margin-top:20px;">
            <div  class="nav_items"  @click='change_line(index + 1);goStep(index + 1)'
            v-for="(item, index) in items" v-bind:key="item.id">{{items[index]}}</div>
            
        </v-row>
      </v-container>
    </v-stepper>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        // answers: [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
        index: 1,
        steps: 9,
        firstempty:true,
        stepsPercentage:'5',
        items:["one","two","three","four","five","six","seven","eight"],
        estimate_low:2000,
        estimate_high:5000,
        // questions:[
        //     {question:'em1',answers:['1','2','3']},
        //     {question:'em2',answers:['1','2','3']},
        //     {question:'em3',answers:['1','2','3']},
        //     {question:'em4',answers:['1','2','3']},
        //     {question:'em5',answers:['1','2','3']},
        //     {question:'em6',answers:['1','2','3']},
        //     {question:'em7',answers:['1','2','3']},
        //     {question:'em8',answers:['1','2','3']},
           
        // ]
      }
    },
    computed:{
        progress(){return{width:this.stepsPercentage + "%"}}
        },
    watch: {
      steps (val) {
        if (this.index > val) {
          this.index = val
        }
      },
    },

    methods: {
      
        select(event,n,i){
            event.currentTarget.classList.toggle("greenShadow");
            let childs = event.currentTarget.childNodes
            childs[0].childNodes[0].childNodes[0].classList.toggle("selectedBtn") // change select btn
            this.toggle(n,i);
            

        },
        
      nextStep (n) {
        
          this.index = (n + 1) %10
      },
      goStep(n){
          this.index = n;
      },
      prevStep(n){
        if (n != 0)
           this.index = this.index - 1
      },
      change_line(i){
          if ( i === 1)
              this.stepsPercentage = "5"
          else
            this.stepsPercentage = (100/(this.steps - 1) * (i- 1)).toString() 
      },
      // toggle(n,i){
      //     if (this.answers[n][i] == 0)
      //       this.answers[n][i] = 1;
      //     else
      //       this.answers[n][i] = 0;
      //   //   this.answers[n][i] = (this.answers[n][i] + 1)%2;
      //     // console.log(this.answers)
      // }
      toggle(n,i){
        this.$store.commit('select',{n:n,i:i})
      }
    ,
      getPrice(){
          // mohasebe mohasebe mohasebe
        //   this.estimate_low =0000
        //   this.estimate_high=0000
      }
    },
  }
</script>
<style scoped>
v-btn{
    height:60px;
}
.items{

    border:2px solid gray;
    border-radius: 10px;
    height: 50px;
}
.greenShadow{
    box-shadow: rgba(15, 192, 39, 0.349) 0px 0px 0.25em, rgba(64, 212, 27, 0.233) 0px 0.25em 1em !important;
}
.greenLine{
    transition: width 0.5s;
}
.nav_items{
    cursor: pointer;
}
.selectedBtn{
  /* border:solid green 2px; */
  box-shadow:0 0 0px 3px  white inset;
  background-color:#43B65C;
}
.answers{
    margin:10px;
    box-shadow: rgba(33, 34, 33, 0.219) 0px 0px 1px, rgba(50, 53, 50, 0.205) 0px 1px 0.25px;
    width:300px;
    padding:18px;
    height:55px;
    border-radius:5px;
    background-color: white;
    transition: all 0.5s;
    cursor: pointer;

}

.nextBtn{
    margin:10px;
    width: 300px;
    height:100px;
    border-radius:5px;
}

.btnText{
    margin:0px;
    color:white;
}
.informStyle{
    margin-bottom: 20px;
    color:gray;
    font-weight: 300;
}


.checkBox{
    cursor: pointer;
    width: 20px;
    height: 20px;
    transform: scale(1.1);
    border: 2px solid rgb(182, 182, 182);
    border-radius: 100px;
    transition: all 0.5s;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #808080;
  font-size:15px;
  opacity: 1; /* Firefox */
}

input:focus{
    outline: none;
}
textarea:focus{
    outline: none;
}
textarea{
    resize: none;
    height:130px;
}
.sendMessageInput{
    border-radius:10px;
    background-color:#DADADA;
    color:black !important;
    font-size:15px;
    padding:10px;
    min-height:30px;
    margin-top:10px;
}

</style>