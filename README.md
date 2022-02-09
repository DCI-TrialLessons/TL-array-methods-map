### Array Method .map

#### 1. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

* That is: removes all dashes, each word after dash becomes uppercased.

Examples:
```js
console.log(camelize("background-color")) == 'backgroundColor';
console.log(camelize("list-style-image")) == 'listStyleImage';
console.log(camelize("-webkit-transition")) == 'WebkitTransition';
``` 

#### 2. You have an array of user objects, each one has name, surname and id.

* Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

For instance:
```js
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */


/* usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith
``` 
* So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
[//]: # (autograding info start)
## Results
  [![Results badge](../../blob/badges/.github/badges/autograding-solution/badge.svg)](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-map/actions)
  
  [Results Details](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-map/actions)
  
  ### Debugging your code
  > [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  There are two ways to see why tasks might not be completed:
  #### 1. Running tests locally
  - Run `npm install`
  - Run `npm test` in the terminal. You will see where your solution differs from the expected result.
  
  #### 2. Inspecting the test output on GitHub
  - Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-map/actions)
  - You will see a list of the test runs. Click on the topmost one.
  - Click on 'Autograding'
  - Expand the item 'Run DCI-EdTech/autograding-action@main'
  - Here you see all outputs from the test run
[//]: # (autograding info end)