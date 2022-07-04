// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./keith-jarrow.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function (array) {
    var males = _.filter(array, function (customer) {
        if (customer.gender === 'male') {
            return true;
        } else {
            return false;
        }

    });

    return males.length;
};

var femaleCount = function (array) {
    var females = _.reduce(array, function(customer){
if (customer.gender === 'female'){
    num
    return true;
}else {
    return false;
}
    });
    return females.length;
};
var oldestCustomer = function (arr) {
    let oldest = 0;
    // start with new oldest variable 

    //  - **Objective**: Find the oldest customer's name
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > oldest) {
            oldest = arr[i].age;
        }
        return oldest;
    }
    
};

var youngestCustomer = function(array) {

};

var averageBalance = function(array){

};

var firstLetterCount = function(array){

};

var friendFirstLetterCount = function(array){

};

var friendsCount = function(array){

};

var topThreeTags = function(array){
    let tagCount = [];
    for(var i = 0; i < array.length; i++){
        tagCount.push(array[i].tags)
    }
let allTag = {};
for (let i = 0; i < tagCount.length; i++){
    if(allTag[tagCount[i]]){
        allTag[tagCount[i]] += 1;
    }
    else{
        allTag[tagCount[i]] = 1;
    }
}
var entries = Object.entries(allTag);
entries.sort(funtion(a, b){
return: b[1] - a[1],
});

var top3 = [entries[0][0], entries[1][0], entries[2][0]];
return top3;
};

var genderCount = function(array){
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
