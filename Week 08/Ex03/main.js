function ageInTime(theAge) {
  // Your Code Here
  const ageMonths = theAge * 12;
  const ageWeeks = ageMonths * 4;
  const ageDays = theAge * 365.2425;
  const ageHours = ageDays * 24;
  const ageMinutes = ageHours * 60;
  if (theAge > 10 && theAge < 100) {
    console.log(`Months Example => ${ageMonths} Months`);
    console.log(`Weeks Example => ${ageWeeks} Weeks`);
    console.log(`Days Example => ${Math.round(ageDays)} Days`);
    console.log(`Hours Example => ${Math.round(ageHours)} Hours`);
    console.log(`Minutes Example => ${Math.round(ageMinutes)} Minutes`);
    console.log(`Seconds Example => ${Math.round(ageMinutes * 60)} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
ageInTime(38); // Weeks Example => 1824 Weeks
ageInTime(38); // Days Example => 13879 Days
ageInTime(38); // Hours Example => 333101 Hours
ageInTime(38); // Minutes Example => 19986070 Minutes
ageInTime(38); // Seconds Example => 1199164176 Seconds
