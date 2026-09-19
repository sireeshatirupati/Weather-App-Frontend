const API_KEY = "d98b7de726205365ff788c64881e3425";
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keypress", (e) => { if(e.key === 'Enter') getWeather(); });
async function getWeather() {
    const city = cityInput.value.trim();
    if (!city) { alert("City name enter chey bro!"); return; }
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) throw new Error("City dorakaledu");
        const data = await response.json();
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°C`;
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `Wind: ${data.wind.speed} km/h`;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("weatherResult").classList.remove("hidden");
    } catch (error) {
        alert(error.message);
    }
}