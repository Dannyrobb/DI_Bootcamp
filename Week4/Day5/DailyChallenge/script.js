let planets = [
    {name:"Mercure"},
    {name:"Venus"},
    {name:"Earth"},
    {name:'Mars'},
    {name:'Jupiter'},
    {name:'Sarturna'}, 
    {name:'Uranus'},
    {name:'Neptune'}
];

planets.forEach(planet => {
    let divPlanet = document.createElement("div")
    divPlanet.classList.add("planet")
    divPlanet.classList.add(planet.name)
    let planetTextNode = document.createTextNode(planet.name)
    divPlanet.appendChild(planetTextNode)
    document.querySelector(`.listPlanets`).append(divPlanet)
});




