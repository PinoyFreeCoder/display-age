function calculateAge(birthday) {
  const birthDate = new Date(birthday);
  const currentDate = new Date();

  if (birthDate > currentDate) {
    throw new Error("Invalid birthday: It is in the future.");
  }

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

module.exports = calculateAge;
