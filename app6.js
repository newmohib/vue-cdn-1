var myapp= new Vue({
    el:"#my-app6",
    data:{
       
    },
    methods:{
        keypressfunction: function(event){
        console.log(event.key);
        },
        keyupfunction: function(event){
            console.log(event.key);
        },
        keydownfunction: function(event){
            console.log(event.key);
        }
    }
    
})