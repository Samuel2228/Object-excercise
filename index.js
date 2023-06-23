

// No 1
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
console.log (student);


// NO 2
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  // Delete the rollno property
  delete student.rollno;
  // Print the object after deleting the property
  console.log("After deletion:");
  console.log(student);


// N0 3
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

console.log(Object.keys(student).length);    
  

// N0 4
var library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
    },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false
    }
  ];
  for (var i = 0; i < library.length; i++) {
    var book = library[i];
    var bookInfo = book.title + ' by ' + book.author;
    if (book.readingStatus) {
      console.log('You have finished reading ' + bookInfo);
    } else {
      console.log('You have not finished reading ' + bookInfo);
    }
  }
  

  // N0 5
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
    return volume.toFixed(4);
  }
}
// Example usage:
const radius = 3.5;
const height = 8.2;
const cylinder = new Cylinder(radius, height);
const volume = cylinder.getVolume();
console.log("Volume of the cylinder: " + volume);


// No 7
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
      for (var j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap the elements
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  // Example usage:
  var data = [6, 4, 0, 3, -2, 1];
  var sortedData = bubbleSort(data);
  console.log("Sorted data: " + sortedData);


// N0 8
function getSubsets(str) {
    var subsets = [];
    for (var i = 0; i < str.length; i++) {
      for (var j = i + 1; j <= str.length; j++) {
        var subset = str.substring(i, j);
        subsets.push(subset);
      }
    }
    return subsets;
  }
  // Example usage:
  var input = "dog";
  var result = getSubsets(input);
  console.log(result);


  // N0 9
  function formatTimeUnit(unit) {
    return unit < 10 ? "0" + unit : unit;
  }
  
  function displayTime() {
    var currentTime = new Date();
    var hours = formatTimeUnit(currentTime.getHours());
    var minutes = formatTimeUnit(currentTime.getMinutes());
    var seconds = formatTimeUnit(currentTime.getSeconds());
    var timeString = hours + ":" + minutes + ":" + seconds;
    console.log(timeString);
  }
  // Update the clock every second
  setInterval(displayTime, 1000);



// N0 10
  // Function to calculate the area of a circle
function calculateArea(radius) {
    return Math.PI * radius * radius;
  }
  // Function to calculate the perimeter of a circle
  function calculatePerimeter(radius) {
    return 2 * Math.PI * radius;
  }
  // Prompt the user for the radius
  var adius = parseFloat(console.log("Enter the radius of the circle:"));
  // Calculate the area and perimeter
  var area = calculateArea(radius);
  var perimeter = calculatePerimeter(adius);
  // Display the results
  console.log("Area: " + area.toFixed(2));
  console.log("Perimeter: " + perimeter.toFixed(2));
  
  
  // No 11
var library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254
    },
    {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      libraryID: 4264
    },
    {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245
    }
  ];
  library.sort(function(a, b) {
    return a.libraryID - b.libraryID;
  });
  console.log(library);


// No 12
function allProperties(obj) {
    var properties = Object.getOwnPropertyNames(obj);
    var methods = properties.filter(function (property) {
      return typeof obj[property] === 'function';
    });
    return methods;
  }
  console.log(allProperties(Array));


//   No 13
function praseUrl() {
    let url = 'https://www.example.com';
    console.log(url)
}
praseUrl();


// No 14
function getAllPropertyNames(obj) {
    var propertyNames = [];
    function getProperties(obj) {
      if (obj === null || obj === undefined) {
        return;
      }
      // Get the property names of the current object
      var currentPropertyNames = Object.getOwnPropertyNames(obj);
      propertyNames = propertyNames.concat(currentPropertyNames);
      // Recursively get the properties of the prototype
      var prototype = Object.getPrototypeOf(obj);
      getProperties(prototype);
    }
    getProperties(obj);
    return propertyNames;
  }
  var obj = {};
  obj.name = 'John';
  obj.age = 30;
  function Person() {}
  Person.prototype = obj;
var person = new Person();
var allPropertyNames = getAllPropertyNames(person);
console.log(allPropertyNames);
  
  
// No 15
function objectToList(obj) {
  return Object.entries(obj);
}
// Example usage
var sampleObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};
var keyValuePairs = objectToList(sampleObject);
// Output the key-value pairs
console.log(keyValuePairs);


// No 16
function reverseObject(obj) {
  var reversedObj = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      reversedObj[obj[key]] = key;
    }
  }
  return reversedObj;
}
// Example usage
var sampleObject = {
  name: 'Samuel',
  age: 20,
  city: 'Enugu'
};
var reversedObject = reverseObject(sampleObject);
// Output the reversed object
console.log(reversedObject);


// No 17
function hasProperty(obj, propertyName) {
  return propertyName in obj;
}
// Example usage
var sampleObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};
// Check if the object has the 'age' property
var hasAgeProperty = hasProperty(sampleObject, 'age');
console.log('Object has "age" property:', hasAgeProperty);
// Check if the object has the 'gender' property
var hasGenderProperty = hasProperty(sampleObject, 'gender');
console.log('Object has "gender" property:', hasGenderProperty);


// No 18
function isDOMElement(value) {
  return value instanceof Element || value instanceof HTMLDocument;
}
// Example usage
var element = document.getElementById('myElement');
var isElement = isDOMElement(element);
console.log('Is element:', isElement);
var notAnElement = 'This is a string';
var isNotElement = isDOMElement(notAnElement);
console.log('Is not element:', isNotElement);