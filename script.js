
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
        var result = JSON.parse(request.response);
        console.log(result);
//a.Get all the countries from the Asia continent /region using the Filter function
        var filter_data = result.filter((ele)=>ele.region == "Asia");
        console.log(filter_data);

//b. Get all the countries with a population of less than 2 Lakhs using Filter method
        var population_con = result.filter((ele)=>ele.population < 200000);
        console.log(population_con);

//c. Print the following details name, capital, flag, using forEach method
        var deails_name = result.forEach((ele) =>{
        console.log(ele.name);
        console.log(ele.capital);
        console.log(ele.flag);
        })

//d. Print the total population of countries using reduce method
        var total_population = result.reduce((acc,cv)=>acc+cv.population,0);
        console.log(total_population);

//e. Print the country that uses US dollars as currency.
var currency = result.filter((ele) => {
        for(let key in ele.currencies){
           if(ele.currencies[key].code === "USD"){
               return ele;
           }
        }
      })
           console.log(currency);
}