var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all')
request.send()
request.onload = function(){
   var result = JSON.parse(request.response)
   console.log(result)

   let output = result.filter((result)=>{
    if(result.population >= 200000){
        console.log(result.name.common)
    }
   })
}