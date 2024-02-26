function extractMatchedParts(regexPattern, inputString) {
    const regex = new RegExp(regexPattern);
    const match = regex.exec(inputString);
  
    if (match) {
      const matchedParts = match.slice(1); // Exclude the entire match
      return matchedParts;
    } else {
      return null;
    }
  }
  

  const datePattern = /^(\d{2})-(\d{2})-(\d{4})$/; 
  const dateString = "26-02-2024";
  
  const matchedParts = extractMatchedParts(datePattern, dateString);
  if (matchedParts) {
    const [day, month, year] = matchedParts;
    console.log("Day:", day);
    console.log("Month:", month);
    console.log("Year:", year);
  } else {
    console.log("No match found.");
  }
  