import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    questions:[
      {question:'em1',answers:['1','2','3'],selected:[],min:1,text:'no em1'},
      {question:'em2',answers:['1','2','3'],selected:[],min:0,text:'no em2'},
      {question:'em3',answers:['1','2','3'],selected:[],min:0,text:'no em3'},
      {question:'em4',answers:['1','2','3'],selected:[],min:0,text:'no em4'},
      {question:'em5',answers:['1','2','3'],selected:[],min:0,text:'no em5'},
      {question:'em6',answers:['1','2','3'],selected:[],min:0,text:'no em6'},
      {question:'em7',answers:['1','2','3'],selected:[],min:0,text:'no em7'},
      {question:'em8',answers:['1','2','3'],selected:[],min:0,text:'no em8'},
     
  ]
  },
  getters:{
    getQuestionByIndex: (state) => (index)=> {
          return state.questions[index]
        },
    questionIsDisabled:(state) => (index)=> {
        if (state.questions[index].selected.length < state.questions[index].min)
          return true
        return false
      }, 
    questionIsEmpty:(state) => (index)=> {
        if (state.questions[index].selected.length ===0)
          return true
        return false
      },
    }
      
  ,
  mutations:{
    select(store,data){
      // console.log(store,data);
      let n = data.n
      let i =data.i
      if (store.questions[n].selected.includes(i+1))
        store.questions[n].selected.pop(i+1)
      else
        store.questions[n].selected.push(i+1)
      // console.log(store.questions)
    }
  }
  
})
