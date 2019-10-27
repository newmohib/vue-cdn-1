var myapp= new Vue({
    el:"#my-app9",
    data:{
       
    },
    methods:{
        keypressfunction: function(){
        console.log(" on keypress");
        },
        modifierAltEnter: function(){
            console.log(" alt & enter");
        },
        modifierDelete: function(){
            console.log("Delete");
        },
        modifierCtrlEnter: function(){
            console.log(" Ctrl Enter");
        },
        modifierSpace: function(){
            console.log("Space...");
        },
        modifierKeyCode: function(){
            console.log("Key Code...");
        }
    }
    
})