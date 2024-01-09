"use strict";

function calculateAge(birthday) {
  var birthDate = new Date(birthday);
  var currentDate = new Date();
  if (birthDate > currentDate) {
    throw new Error("Invalid birthday: It is in the future.");
  }
  var age = currentDate.getFullYear() - birthDate.getFullYear();
  if (currentDate.getMonth() < birthDate.getMonth() || currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) {
    age--;
  }
  return age;
}
module.exports = calculateAge;