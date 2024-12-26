/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from "./e17.js";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  
  // get count of years and put them into a dictionary
  // I'm using a reducer but for loop could work aswell
  let discoverDict = data.asteroids.reduce(
    (counts, currentAsteroid) => {
      //check if the value exists in the dictionary, if not use a default value of 0 and increment
      counts[currentAsteroid.discoveryYear] = (counts[currentAsteroid.discoveryYear] ?? 0) + 1
      return counts;
    }, {} // default empty dictionary
  )

  // Convert dictionary to list and iterate over the values
  const maxYear = maxBy(
    Object.entries(discoverDict),
    ([year, count]) => count
  )

  return Number(maxYear[0])

  //I'm not sure if this i the approach that you guys wanted
  
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
