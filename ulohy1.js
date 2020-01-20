const person = {
  'firstName': 'John',
  'lastName': 'Doe',
  'height': '185 cm',
  'kids': '2 sons',
  'from': 'Philadelphia'
};

const upperCaseIfNotStartsWithNumber = (object) => {
  return Object.fromEntries(Object.keys(object).map(k => !parseInt(object[k][0]) ? [k, object[k].toUpperCase()] : [k, object[k]]));
};

const r = upperCaseIfNotStartsWithNumber(person);
console.log(r);