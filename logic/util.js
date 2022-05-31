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

    function calculateTotalDistance(distancesArray){
        let totalDistance =0;
        let distance =0;

        for(distance of distancesArray){
            if(distance>0){
                totalDistance += distance;
            }
        }
        return totalDistance;
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance}
}
module.exports = Util();

