var myapp=new Vue({
    el:"#my-app",
    data:{
        name: "Online web Tutoeial",
        playlist:"Vue Js"
    },
    methods:{
        run: (message)=>{
            return " I am running " + message;
        },
        welcome: (dayTime)=>{
            return "Good" + dayTime;
        },
        valueAccess: ()=>{
            return this.name;
        }
    }
})