<template>

<div class="modal " :class='openmodal'>
  <div class="modal-background"></div>
<form @submt.prevent="submitForm" autocomplete="off">
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Add new</p>
     
      <button class="delete" aria-label="close" @click="close"></button>
    </header>
    <section class="modal-card-body">

     <div class="field">
  <label class="label">Name</label>
  <div class="control">

    <input class="input" type="text" placeholder="Name" v-model="directory.name" required="true" name="fname" >

  </div>
</div>
     <div class="field">
  <label class="label">phone</label>
  <div class="control">
    <input class="input" type="number" onkeydown="javascript: return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code) ? true : !isNaN(Number(event.key)) && event.code!=='Space'"  placeholder="Phone" v-model="directory.phoneNumber"  required="true" name="fphoneNumber" >

  </div>
</div>
     <div class="field">
  <label class="label">email</label>
  <div class="control">
    <input  class="input" type="text" pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/" placeholder="Email" v-model="directory.email"  required="true" name="femail">
     <br>
      <span v-if="msg.email">{{msg.email}}</span>
  </div>
</div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="save" >Save changes</button>
      <button class="button" @click="close">Cancel</button>
    </footer>
  </div>
</form>
</div>
</template>

<script>


import axios from "axios";
export default {
     emits : "add-directory",


data(){
  return  {
    directory:{
      name:'',
      phoneNumber:'',
      email:''
    },
msg:[],
  }
},





  props: ['openmodal','lists'],
  errors:{},

 validateForm() {
  let x = document["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document["fphoneNumber"].value;
  if (y == "") {
    alert("Number must be filled out");
    return false
  }
   let z = document["femail"].value;
  if (z == "") {
    alert("Number must be filled out");
    return false
  }
},

  watch: {

    email(value){

      this.directory.email = value;
      this.validateEmail(value);
    }


  },


  methods:{
    close(){
      this.$emit('closeRequest')
      
    },

   async save(){
   //this.validateForm();
    try{
 await axios.post('http://localhost:8080/api/phone/add' , this.directory).then((response) =>{

  
  this.simple = response.data;

  console.log(response)}
  
  
  )

    }catch(error){
      console.log(error);
    }
       

 this.$props.lists.push(this.simple);
 this.$props.lists.sort(function(a,b){
    if(a.name>b.name){
      return 1;
    } if ((a.name<b.name)){
      return -1;
    }
  })

  
  this.close();
 
    },

  submitForm () {
  const nameIsValid = !this.directory.name;
  const formIsValid = nameIsValid;
  if(formIsValid){
    console.log('form submitted');
  }else {
    console.log("Invalid form")
  }
  }
  },


};
</script>
