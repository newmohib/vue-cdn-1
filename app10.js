var myapp= new Vue({
    el:"#my-app10",
    data:{
       character:"",
       name:"",
       email:"",
       user:{
        username:"",
        password:"",
       }
    },
    methods:{
        keypressfunction: function(event){
            this.character=event.key
        console.log("simple message");
        }
    }
    
})