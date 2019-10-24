var myapp= new Vue({
    el:"#my-app5",
    data:{
        counter:0
    },
    methods:{
        increment: function(inc){
            this.counter += inc
        },
        decrement: function(desc){
            this.counter -= this.counter !== 0 ? desc:0
        }
    }
    
})