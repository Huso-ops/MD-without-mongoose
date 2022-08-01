<template>
<div>

 <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          type="text/css">
</head> 
<body>
<nav class="panel">
  <p class="panel-heading">
    PhoneBook <br>
        <button class="button is-link is-outlined " @click="openAddDirectory"> 
      Add New
    </button>
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input" type="text" v-model="searchQuery" placeholder="Search" >
      <span class="icon is-left">
        <i class="fas fa fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <a class="panel-block" v-for="list,index in lists" v-bind:key="list.id">    
<span class=" column is-9">
  {{list.name}}
</span>
<span class="panel-icon  is-1">
<i class="has-text-primary fa-solid fa fa-eye" aria-hidden="true" @click="openShow(index)"></i>
    </span>
<span class="panel-icon column is-2">
<i class="has-text-info fa-solid fa fa-edit" aria-hidden="true"  @click="openUpdate(index)"></i>
    </span>       
    <span class="panel-icon  is-3">
<i class="has-text-danger fa-solid fa fa-trash" aria-hidden="true" @click="del(index,list.id)"></i>
  </span>
  </a>
</nav>

<AddDirectory :openmodal='addActive' @closeRequest='close' :lists="this.lists"></AddDirectory>

<ShowDirectory :openmodal='showActive' @closeRequest='close' :list="this.list" ></ShowDirectory>

<UpdateDirectory :openmodal='updateActive' @closeRequest='close' :list="this.list" :lists="this.lists"></UpdateDirectory>
</body>

</div>

</template>
<script >
import 'bulma'
import axios from "axios";
import AddDirectory from './AddDirectory.vue';
import ShowDirectory from './ShowDirectory.vue'
import UpdateDirectory from './UpdateDirectory.vue';




export default {
    emits : "look-panel",
    components:{
    AddDirectory,
    ShowDirectory,
    UpdateDirectory
},
data(){
return {
  addActive : '',
  showActive : '',
  updateActive : '',
  lists:null,
  list:'',
  searchQuery:'',

}
},


watch:{/*
  search(){

    return this.lists.filter((list)=>{
      list.toLowerCase().includes(this.searchQuery.value.toLowerCase())
    })
  }*/

   searchQuery() {
  return this.lists.filter((list) =>
    list.toLowerCase().includes(this.searchQuery.value.toLowerCase())
  );
},
},



  async mounted() {
    try {
      const response = await axios.get('http://localhost:8080/api/phone/get');
      this.lists = response.data
      

      
    } catch (e) {
      console.log(e)
    
    }
    this.lists.sort(function(a,b){
    if(a.name>b.name){
      return 1;
    } if ((a.name<b.name)){
      return -1;
    }
    })
    
  },

  //https://jsonplaceholder.typicode.com/posts
  //http://localhost:8080/api/phone/get



methods:{
  openAddDirectory(){
    this.addActive = 'is-active';
  },
  
   openShow(index){

  this.list = this.lists[index];

   this.showActive = 'is-active';
  },
  openUpdate(index){

   this.list = this.lists[index];

   this.updateActive = 'is-active';
  },


  close(){
    this.addActive = '',
    this.showActive = '',
    this.updateActive = ''
  },
  del(index,id){
    const list = this.lists[index];
    id = list._id;
    if(confirm ("Are you sure about that ?")){
      axios.delete(`http://localhost:8080/api/phone/delete/`+id)
     .then(response => {
      this.lists.splice(index,1);
         console.log(response);
     });
    }

  },
     show(){
      this.$emit('show')
    },

},

};
</script>
<style>
</style>


