import { APIKEY } from "./environment.js";

// this is a built in api that will allow the user to get their current location upon accepting the promt

// navigator returns the geoloaction of teh object
//getCurrentPosition() returns the current position of the user

navigator.geolocation.getCurrentPosition( success, errorFunc );
// think of this as an if/else statement. if teh user accepts it is successful, if not it is an error

//example of a geolocation object
{
    coords: {
        latutide: 37.7749;
        longitude: -122.4194;
    }
}

function success(position){
    console.log(position);
    console.log("Our latitude is: " + position.coords.latitude);
    console.log("Our longitude is: " + position.coords.longitude);
    console.log("Now we know where you are!")
}

function errorFunc(error){
    console.log(error.message)
}



function apiCall () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}

apiCall();