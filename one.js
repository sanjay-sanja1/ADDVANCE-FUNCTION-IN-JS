function outer(){
    var a = "inner function"
    console.log( a)
 
    function inner(){
        console.log(a,"outter function")
    }
    inner();
 }
outer();