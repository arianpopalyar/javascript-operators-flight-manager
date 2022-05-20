function Flights() {
 function calculateNumberOfFlights(numberOfPasenger, flightCapasity){
     
     try {
        numberOfFlights = numberOfPasenger/flightCapasity;
        if(numberOfPasenger<0){
            throw "The number of passengers must be a positive integer value";
        }
        if(flightCapasity<0){
        throw "The capacity of the flight must be a positive integer value"
        }
    } 
    catch(error) {
        console.log(error);
    }
    finally {
        console.log(numberOfPasenger, flightCapasity);
        // codes that gets executed anyway
    }

    function checkAircraftRevision(distanceLimit, distances) {
        let totalDistance = distances.reduce(sumTotalDistance, 0);
        
        function sumTotalDistance(total, num){
            return total + num
        }

        if(totalDistance <= distanceLimit/2){
            return "The revision needs to be done within the next 3 months";
        }
        else if(totalDistance > distanceLimit/2 || totalDistance < distanceLimit * 3/4){
            return "The revision needs to be done within the next 2 months";
        }
        else if(totalDistance > distanceLimit*3/4 && totalDistance<=distanceLimit){
            return "The revision needs to be done within the next month";
        }
        else if(totalDistance >distanceLimit){
            throw (error)
        }
    }
    return {calculateNumberOfFlights, checkAircraftRevision};
 } 
}
module.exports = Flights();
