const req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var obj =JSON.parse(this.response);
    const popul=obj.filter((element)=>{
        return element.population < 200000;
    })
    console.log(popul);
}
