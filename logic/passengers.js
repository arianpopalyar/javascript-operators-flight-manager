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
    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights,
        businessSeatsPerFlight, economySeatsPerFlight) {
            let vipPassengersWithBusinessSeats=0, vipPassengerWithEconomySeats=0,
            regularPassengersWithBusinessSeats=0, regularPassengersWithEconomySeats=0;
            let availableBusinessSeats = nrOfFlights * businessSeatsPerFlight;
            let availableEconomySeats = nrOfFlights * economySeatsPerFlight;

            var vipBusinessConfiguration = {passengers:vipPassengers, seats:availableBusinessSeats};
            vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration,
                businessSeatsPerFlight);
            
            var vipEconomyConfiguration = {passengers:vipBusinessConfiguration.passengers,
            seats:availableEconomySeats};
            vipPassengerWithEconomySeats = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);    

            var regularBusinessConfiguration ={passengers:regularPassengers,
            seats:vipBusinessConfiguration.seats};
            regularPassengersWithBusinessSeats = updateConfiguration(regularBusinessConfiguration,
                businessSeatsPerFlight);
        var regularEconomyConfiguration = {passengers:regularBusinessConfiguration.passengers,
            seats:vipEconomyConfiguration.seats};
        regularPassengersWithEconomySeats = updateConfiguration(regularEconomyConfiguration,
            economySeatsPerFlight);
        return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats,
        vipPassengerWithEconomySeats:vipPassengerWithEconomySeats,
    regularPassengersWithBusinessSeats:regularPassengersWithBusinessSeats,
    regularPassengersWithEconomySeats:regularPassengersWithEconomySeats
}
    }   


    function updateConfiguration(configuration, seatsPerFlight){
        let passengersWithSeats = 0;

        while(configuration.passengers > 0) {
            if(configuration.seats > 0) {
                if(configuration.passengers >= configuration.seats){
                    if(configuration.seats > configuration.seatsPerFlight) {
                        configuration.passengers -= seatsPerFlight;
                        configuration.seats -= seatsPerFlight;
                        passengersWithSeats += seatsPerFlight;
                    } else {
                        configuration.passengers -= configuration.seats;
                        passengersWithSeats += configuration.seats;
                        configuration.seats = 0;
                    }
                } else{
                    passengersWithSeats += configuration.passengers;
                    configuration.seats -= configuration.passengers;
                    configuration.seats =0;
                }
            } else {
                break;
            }
        }
        return passengersWithSeats;
    }

    function calculateTotalNumberOfPassengers(){

    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}
module.exports = Passengers();

