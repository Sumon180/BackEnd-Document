exports.getName = () => {
  return "Sumon Hossain";
};

const age = () => {
  return "25";
};

const cgpa = 3.94;

// exports.getName = getName;
// exports.agee = age;
// exports.Cgpa = cgpa;

// Or

module.exports = {
  age,
  cgpa,
};
