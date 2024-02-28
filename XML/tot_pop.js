var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    let obj=JSON.parse(this.response);
    let result = obj.reduce(function(acc, val){
        return acc + val.population;
    },0);
    console.log(result);
    
}

