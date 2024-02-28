const req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all",'true');
req.send();
req.onload = function(){
    var obj =JSON.parse(this.response);
    const asia=obj.filter((element)=>{
        if(element.region === 'Asia'){
            return element.name;
        }
    })
    console.log(asia);
}

