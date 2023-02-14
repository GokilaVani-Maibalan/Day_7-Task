var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

    result.forEach(details => console.log( `
       Name: ${details.name.common} 
       Capital: ${details.capital} 
       Flag: ${details.flags.svg}`));
}