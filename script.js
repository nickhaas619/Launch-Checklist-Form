// Write your JavaScript code here!
window.addEventListener("load", function(){


fetch('https://handlers.education.launchcode.org/static/planets.json').then(
      (response) => {
        response.json().then(function(json) {
           const div = document.getElementById("missionTarget");
           let list = json[0];
           div.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${list.name}</li>
                  <li>Diameter: ${list.diameter}</li>
                  <li>Star: ${list.star}</li>
                  <li>Distance from Earth: ${list.distance}</li>
                  <li>Number of Moons: ${list.moons}</li>
               </ol>
               <img src="${list.image}">
               `
   })
})






   //create variable for form
   let form = document.querySelector("form");
  
   form.addEventListener('submit', (event) =>{
      event.preventDefault()

   let pilotName = document.querySelector("input[name=pilotName]");
   let pilot = pilotName.value;
   let pilotTest = Number(pilot);

   let coPilotName = document.querySelector("input[name=copilotName]")
   let coPilot = coPilotName.value;
   let coPilotTest = Number(coPilot);

   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let fuelValue = fuelLevel.value;
   let fuelTest = Number(fuelValue);

   let cargoMass = document.querySelector("input[name=cargoMass]");
   let cargoValue = cargoMass.value;
   let cargoTest = Number(cargoValue);

   if(pilot === "" || coPilot === "" || fuelValue === "" || cargoValue === ""){
      alert("All fields required!")
   
   
   }else if(isNaN(pilotTest)=== false || isNaN(coPilotTest === false) || isNaN(fuelTest) || isNaN(cargoTest)){
      alert("Inputs not valid, please enter valid inputs")
   }else{
      pilotStatus.innerHTML = `${pilot} is ready for launch!`
      copilotStatus.innerHTML = `${coPilot} is ready for launch!`
   
      if(fuelValue < 10000 && cargoValue > 10000){
         faultyItems.style.visibility = 'visible';
         fuelStatus.innerHTML = `${fuelValue} liters is not sufficient for takeoff. 10,000 liters needed.`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         cargoMass.innerHTML = `${cargoValue} kg weighs too much for takeoff. Make sure cargo weighs less than 10,000 kg.`
         launchStatus.style.color = 'red';
         
   
      else if (fuelValue < 10000){
      faultyItems.style.visibility = 'visible';
      fuelStatus.innerHTML = `${fuelValue} liters is not enough fuel to takeoff! minimum of 10,000 liters needed`;
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = 'red';
      cargoMass.innerHTML = "Cargo mass low enough to launch";
      } 
      else if(cargoValue > 10000){
      faultyItems.style.visibility = "visible";
      cargoMass.innerHTML = `${cargoValue} kg is too much weight for takeoff! maximum cargo weight is 10,000 kg. `;
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = 'red';
      fuelStatus.innerHTML = "Fuel level high enough for launch";
      
   
   }}else{
      faultyItems.style.visibility = 'visible';
      launchStatus.innerHTML = `Shuttle is ready for launch.`;
      launchStatus.style.color = `green`;
      fuelStatus.innerHTML = `Fuel level high enough for launch`;
      cargoValue.innerHTML = `Cargo mass low enough for launch`
   }

   }

   });












})
