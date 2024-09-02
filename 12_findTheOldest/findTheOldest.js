const findTheOldest = function(people) {
  let oldestPerson = null;
  let oldestAge = 0;

  for (let person of people) {
    let yearToSubtract;
    if (person.yearOfDeath == null) {
      yearToSubtract = 2024;
    } else {
      yearToSubtract = person.yearOfDeath;
    }
    let age = yearToSubtract - person.yearOfBirth;
    if (age > oldestAge) {
      oldestPerson = person;
      oldestAge = age;
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
