function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers) {
        let totalDistributedPassengers = 0;
        let value;

        for(value in distributedPassengers) {
            totalDistributedPassengers += distributedPassengers[value];
        }

        return totalDistributedPassengers;
    }

    function calculateTotalNumberOfPassengers(passengersArray){
        let totalPassengers = 0;
        let passenger =0;
        for(passenger of passengersArray){
            totalPassengers += passenger;
        }
        return totalPassengers;
    }

    function checkInput(input){
        if(!input || isNaN(input)){
            throw new Error('it is false');
        }
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput}
}
module.exports = Util();

