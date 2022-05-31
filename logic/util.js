function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers) {
        let totalDistributedPassengers = 0;
        let value;

        for(value in distributedPassengers) {
            totalDistributedPassengers += distributedPassengers[value];
        }
    }

    function calculateTotalNumberOfPassengers(passengersArray){
        let totalPassengers = 0;
        let passenger =0;
        for(passenger of passengersArray){
            totalPassengers += passenger;
        }
        return totalPassengers;
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}
module.exports = Util();

