 
 const watchSites = ["Hulu", "Amazon", "Netflix"];

watchSites.push("Applewatch");
function getWatchSites(){
  return watchSites; 
}




function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
const anything = testElseIf(7);
console.log(anything);

const sites = getWatchSites();
console.log(sites);



