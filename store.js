// let url="localhost:5347/store";
function updateMap(){
    fetch("/stores.json")
    .then(Response=>Response.json())
    .then(data=>{
        console.log(data)
        data.forEach(element => {
            latitude=element.lat;
            longitude=element.lon;
            new mapboxgl.Marker({
                draggable: false,
                color:"#1a9e1a"
            })
            .setLngLat([longitude,latitude])
            .addTo(map)
        });
    })
}
updateMap();