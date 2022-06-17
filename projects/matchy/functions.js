/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(arr, string) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === string) {
            return arr[i];
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(arr, name, replacement) {
    // get all values from array, 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            arr[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(arr, name) {
    for (var i = 0; i < arr.length; i++) {
        // checking if the arrays name matches the name
        if (arr[i].name === name) {
            arr[i] = {};
        }
    }

}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(arr, newA) {
    var matchE = false;

    //iterate through arr
    for (var i = 0; i < arr.length; i++) {
        if (newA.name === arr[i].name) {
            matchE = true;
        }

    }
    if (matchE === false && newA.name.length > 0 && newA.species.length > 0) {

        arr.push(newA);
    }
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
