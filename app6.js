var myapp= new Vue({
    el:"#my-app6",
    data:{
       x:0,
       y:0
    },
    methods:{
        movefunction: function(event){
           this.x=event.offsetX;
           this.y=event.offsetY;
        },
      overfunction: function(event){
        console.log("mouse over");
      },
      outfunction: function(event){
        console.log("mouse out");
      }
    }
    
})