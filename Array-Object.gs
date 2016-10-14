//Array manipulators (for Array.map or Array.filter)
function sortByProperty(prop){ return function(a,b){ a[prop]=a[prop]===null?0:a[prop];b[prop]=b[prop]===null?0:b[prop]; return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0); } }
function extractor(propName){ return function(e,i,a){ return e[propName]; }; }
function parser(e,i,a){ return JSON.parse(e); }
function filteror(value){ return function(e,i,a){ return e !== value; }; }

//Summation of a property across array
var propSummation = function (prop) { return function (prev, cur, index, array) { return prev + cur[prop]; }; }

//Binary search
function findItemInArray(array, key) {
  var imin = 0, imax = array.length;
  while (imin < imax) {// continually narrow search until just one element remains
    var imid = Math.floor((imin+imax)/2);// note: 0 <= imin < imax implies imid will always be less than imax
    // reduce the search
    if (array[imid] < key) imin = imid + 1;
    else imax = imid;
  }
  //if array is empty, then imax < imin,  otherwise imax == imin
  return ((imax === imin) && (array[imin] == key)) ? array[imin] : null;
}

/**
Returns an object combining the properties of all arguments
*/
function merge() {
  var combo = {}, p, i,
      len = arguments.length;
  for (i = 0; i < len; i += 1) {//Loop through passed objects
    for (p in arguments[i]) {//Loop through properties of each passed object
      if (arguments[i].hasOwnProperty(p)) { combo[p] = arguments[i][p]; }//Add property to combo
    }
  }
  return combo;
}

/**
Extracts all the unique values from an array. If given a property, it will only return unique values of that property
@param {Object[]} array An array of objects to look through
@param {string} prop Which property of the objects to look at to determine uniqueness
@returns {Object[]} A sorted array containing the unique objects in the original array (based on property given or entire object if not)
*/
function unique(array, prop) {
  var processArray = prop ? extract(array, prop) : array,
      newArr = [], x, val;
  for(x = 0; x < processArray.length; x += 1) {
    val = processArray[x];
    if(val === undefined || val === null) continue;
    if(newArr.indexOf(val) < 0) newArr.push(val);
  }
  return newArr.sort();
}
