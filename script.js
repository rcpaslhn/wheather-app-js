const url="https://api.openweathermap.org/data/2.5/"
const key="fc308f44317dddf7c11c513a8db77fab"
const btn=document.getElementById("btn")
const input=document.getElementById("sehir")
const city=document.querySelector(".city")
const temp=document.querySelector(".temp")
const desc=document.querySelector(".desc")
const minmax=document.querySelector(".minmax")

const setDeger= ()=>{
    getResult(input.value)
}

const getResult=(cityName)=>{
    let query =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)

}

const displayResult= (result) =>{
    console.log(result)
    city.innerHTML=`${result.name}, ${result.sys.country}`
    temp.textContent=`${result.main.temp} °C`
    desc.textContent=`${result.weather[0].description}`
    minmax.textContent=`${result.main.temp_min} °C /${result.main.temp_max} °C`
}




btn.addEventListener("click",setDeger)