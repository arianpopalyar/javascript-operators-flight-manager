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

    function checkAircraftRevision(distenceLimit, distences[]) {
        

    }

 }return {calculateNumberOfFlights, checkAircraftRevision}; 
}
module.exports = Flights();
