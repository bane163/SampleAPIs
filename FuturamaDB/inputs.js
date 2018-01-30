console.clear();
const inputs = document.querySelectorAll('[type="text"], [name="sayings"]'),
  submitBtn = document.querySelector('#submit'),
  displayBtn = document.querySelector('#display');
let finalObj = {},
  fakeData = {
    name: {
      first: 'jermbo',
      middle: 't',
      last: 'last'
    },
    just: {
      for: {
        random: 'test',
        fun: {
          final : {
            thing : 'WHAT UP'
          }
        }
      }
    },
    info: {
      age: 22,
      gender: 'm',
      species: 'human'
    },
    occupation: 'developer',
    sayings: [
      'this is a story all about how',
      'my life got flipped, turned upside down',
      'and id like to take a minute just sitting right there',
      'ill tell you how i became the prince of bel air'
    ]
  };

submitBtn.addEventListener('click', getValues);
displayBtn.addEventListener('click', displayValues);

function getValues() {
  inputs.forEach(input => {
    if (input.name == 'sayings') {
      finalObj[input.name] = input.value.split('; ');
    } else {
      // https://stackoverflow.com/questions/5484673/javascript-how-to-dynamically-create-nested-objects-using-object-names-given-by
      const keys = input.name.split('.');
      const lastKey = keys.pop();
      const lastObj = keys.reduce((obj, key) => obj[key] = obj[key] || {}, finalObj);
      lastObj[lastKey] = input.value;
    }
  });
  console.log(finalObj);
}

// displayValues();
// getValues();

function displayValues() {
  inputs.forEach(input => {
    if (input.name == 'sayings') {
      input.value = fakeData[input.name].map((val, i) => (i < fakeData[input.name].length - 1) ? `${val}; ` : val ).join('');
    } else {
      const keys = input.name.split('.');
      input.value = keys.reduce((prev, curr) => prev ? prev[curr] : null, fakeData);
    }
  });
}