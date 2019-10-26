var myapp= new Vue({
    el:"#my-app8",
    data:{
       counter:0
    },
    methods:{
        incrementby1: function(event){
        this.counter++;
        },
        submitClick: function(result){
            console.log("click",result); 
        },
        parentClass: function(){
            console.log("patent clicking "); 
        },
        btnClick: function(){
            console.log("Button click"); 
        }
    }
    
})