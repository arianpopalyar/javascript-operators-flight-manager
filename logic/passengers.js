function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArray){
        let passenger;
        let totalPassengers = 0;
        
        for(passenger of passengersArray){
            totalPassengers += passenger;
        }
        if(totalPassengers < flightCapacity){
            return totalPassengers;
        }
        if(totalPassengers > flightCapacity){
            throw new Error("Passengers are more then flight capacity")
        }

    }
}
module.exports = Passengers();

