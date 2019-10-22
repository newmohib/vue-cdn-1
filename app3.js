new Vue({
    el:"#my-app",
    data:{
        name: "Online web Tutoeial",
        playlist:"Vue Js"
    },
    methods:{
        run: function (message){
            return " I am running " + message;
        },
        welcome: function (dayTime){
            return   "Good" + dayTime;
        },
        accessValue: function (){
            return   this.name + " "+ this.playlist;
        }
    }
})