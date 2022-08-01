<template>
<div class="modal " :class='openmodal'>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Update {{list.name}}'s Details'</p>
     
      <button class="delete" aria-label="close" @click="close"></button>
    </header>
    <section class="modal-card-body">

     <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input ref="list" class="input" type="text" placeholder="Name" v-model="this.$props.list.name" required="true">
    

  </div>
</div>
     <div class="field">
  <label class="label">phone</label>
  <div class="control">
    <input class="input" type="number" placeholder="Phone" v-model="this.$props.list.phoneNumber"  required="true">
    
  </div>
</div>
     <div class="field">
  <label class="label">email</label>
  <div class="control">
    <input class="input" type="text" placeholder="Email" v-model="this.$props.list.email" required="true">
    
  </div>
</div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="update">Update</button>
      <button class="button" @click="close">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
import axios from 'axios';



export default {
     emits : "update-directory",
  props: ['openmodal','list','lists'],
data(){
  return {
   directory : {
    name:"",
    phoneNumber:"",
    email:""
  
}

   
     
  
   

  }
},

  errors:{},

  methods:{
    close(){
      this.$emit('closeRequest')
    },
   async update(){
    let  _id = this.$props.list._id
  
    this.directory.name = this.$props.list.name
    this.directory.phoneNumber = this.$props.list.phoneNumber
    this.directory.email =  this.$props.list.email

    try{
    await  axios.put('http://localhost:8080/api/phone/update/' +_id,this.directory
    );
      //this.$props.list
   

    }catch(err){
      console.log(err);
      
    }
     this.$props.lists.sort(function(a,b){
    if(a.name>b.name){
      return 1;
    } if ((a.name<b.name)){
      return -1;
    }
    })
     this.close();
    }

  }

};

</script>