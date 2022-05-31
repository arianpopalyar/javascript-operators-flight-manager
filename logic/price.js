function Prices() {
    function calculateFinalPrice(basePrice, percentPassengerType, percentFlightType) {
        let finalPrice = basePrice;

        finalPrice *= 1+percentPassengerType/100;
        finalPrice*= 1+percentFlightType/100;
        
        return finalPrice.toFixed(2);
    }

    function calculateTotalFinalPrice(numberOfSeats, passengerType, flightType, basePrice){
        let seats;
        return seats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        let finalPrice = basePrice;

        switch(passengerType.toUpperCase()){
            case 'REGULAR':finalPrice *=0.95;
            break;
            case 'VIP': finalPrice *=1.05;
            break;
        }

        switch(flightType.toLowerCase()){
            case 'economy':finalPrice *=0.97;
            break;
            case 'business':finalPrice*=1.1;
            break;
        }
        return finalPrice.toFixed(2);
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();