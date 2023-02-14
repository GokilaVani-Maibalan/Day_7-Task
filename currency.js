var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for(i of result){
        if (i.currencies!=undefined && i.currencies.hasOwnProperty('USD')){
         console.log(i.name.common)
        }
    }
}