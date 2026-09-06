export const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

export const cars = ["BMW", "Volvo", "Saab", "Ford"];