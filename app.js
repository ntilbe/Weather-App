window.addEventListener('load', ()=>{  /* This function (and everything inside this function) will run when page loads */
    let long;
    let lat;

    if(navigator.geolocation){ /* Will only work if user allows window to find location, click "allow" when page loads */
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(position); /*This to check latitude/longitude in console*/
        
            const api= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=99db2c78f1a37b58406fe0247c0cc1a6`; 

            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data =>{
                    console.log(data);
                }); 
        });
    }
});