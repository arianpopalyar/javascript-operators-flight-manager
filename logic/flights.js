function Flights() {
 function calculateNumberOfFlights(passengers, capacity){
     let flights;
     try {
         if(passengers % capacity === 0) {
            flights = passengers/capacity;
         }
        
        if((passengers < 0) || (!Number.isInteger
            (Number(passengers)))){
            throw new Error("The number of passengers must be a positive integer value");
        }
        if(capacity<0 || !Number.isInteger(Number(capacity))){
        throw new Error("The capacity of the flight must be a positive integer value");
        }
    } 
    catch(error) {
        console.log(error);
    }
    finally {
        console.log(passengers, capacity);
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
