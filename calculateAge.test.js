const calculateAge = require("@pinoyfreecoder/display-age");

describe("calculateAge", () => {
  it("should calculate the age correctly when the birthday is in the past", () => {
    const age = calculateAge("1990-01-01");
    expect(age).toBe(new Date().getFullYear() - 1990);
  });

  it("should calculate the age correctly when the birthday is today", () => {
    const birthday = new Date().toISOString().split("T")[0];
    const age = calculateAge(birthday);
    expect(age).toBe(0);
  });

  it("should throw an error for a future birthday", () => {
    expect(() => calculateAge("2030-01-01")).toThrowError(
      "Invalid birthday: It is in the future."
    );
  });
});
