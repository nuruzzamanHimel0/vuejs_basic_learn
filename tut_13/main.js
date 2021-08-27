$(document).ready(function(){
  
  
    var vu = new Vue({
        el: "#app",
        data: {
            a: 0,
            b: 0,
            A:10,
        },
        methods: {
        //  sumofA() {
        //         console.log("A");
        //         return this.a + this.A;
        //     },
        //     sumofB: function () {
        //          console.log("B");
        //         return this.b + this.A;
        //     }
            
        },
        computed: {
            sumofA() {
                console.log("A");
                return this.a + this.A;
            },
            sumofB: function () {
                 console.log("B");
                return this.b + this.A;
            }
        }
       
    });

    
    

    

});
