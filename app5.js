var myapp= new Vue({
    el:"#my-app5",
    data:{
        counter:0
    },
    methods:{
        increment: function(){
            this.counter++
        },
        decrement: function(){
            this.counter--
        }
    }
    
})