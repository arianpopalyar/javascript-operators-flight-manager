function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArray) {
        let passenger;
        let passengersNumber = 0;
        
        for(passenger of passengersArray){
            passengersNumber += passenger;
        }
        if(passengersNumber < flightCapacity){
            return passengersNumber;
        }
        if(passengersNumber > flightCapacity){
            throw new Error("Passengers are more then flight capacity")
        }
        
    }
    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, flights,
        businessSeatsPerFlight, economySeatsPerFlight){

    }

    function calculateTotalNumberOfPassengers(){

    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}
module.exports = Passengers();

