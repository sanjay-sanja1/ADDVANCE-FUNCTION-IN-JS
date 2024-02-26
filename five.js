function calculateDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "next day";
            break;
        default:
            deliveryTime = "not available";
    }

    return deliveryTime;
}

// Example usage:
console.log("Standard delivery:", calculateDeliveryTime("standard"));
console.log("Express delivery:", calculateDeliveryTime("express"));
console.log("Overnight delivery:", calculateDeliveryTime("overnight"));
