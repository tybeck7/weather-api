var fetchButton = document.getElementById('fetch-btn')
var searchBtn = document.querySelector('button')
var apiKey = "04972d2609441c24c4263c7fba8d8c0d"

var currentWeatherContainer = document.getElementById('card-container')




function getCurrentApi(){
    $('#fetch-btn').on('click', function(){
        var cityName =$('#form-input').val()
        console.log(cityName)
        
        var CurrentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        
        fetch(CurrentWeatherUrl).then(function(response){
            return response.json()
        }) 
        .then(function(data){
            console.log(data)
            var coord = data.coord
        var oneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}&units=imperial`
        fetch(oneCall).then(res => res.json())
        .then(dat => {
            console.log(dat)
            for (let i = 1; i <= 5; i++) {
                var el = document.createElement('div')
                var p = document.createElement('p')
                $(el.click(function(e){
                    console.log()
                }))
                el.className="card"
                el.id = "card" + i
                el.append(p)
                
                p.innerHTML = "day:" + dat.daily[i].dt
                currentWeatherContainer.append(el)
            }
            for (let i = 1; i <= 5; i++) {
                var p = document.createElement('p')
                var el = document.getElementById('card' + i)
                el.className="card"
                el.id = "card" + i
                el.append(p)
                
                p.innerHTML = "wind:" + dat.daily[i].wind_speed
                currentWeatherContainer.append(el)
            }
            for (let i = 1; i <= 5; i++) {
                var p = document.createElement('p')
                var el = document.getElementById('card' + i)
                el.className="card"
                el.id = "card" + i
                el.append(p)
                
                p.innerHTML = "humidity:" + dat.daily[i].humidity
                currentWeatherContainer.append(el)
            }
            for (let i = 1; i <= 5; i++) {
                var p = document.createElement('p')
                var el = document.getElementById('card' + i)
                el.className="card"
                el.id = "card" + i
                el.append(p)
                
                p.innerHTML = "temp:" + dat.daily[i].temp.day
                currentWeatherContainer.append(el)
            }
        })        
    })
})
}

getCurrentApi()




