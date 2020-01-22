/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value) {
    if (size / storageLimit > 0.75) {
      result.resize(storageLimit * 2);
    }
    if (size / storageLimit < 0.25) {
      result.resize(storageLimit / 2);
    }
    let hashedKey = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[hashedKey]) {
      storage[hashedKey] = [];
    }
    storage[hashedKey].push([key, value]);
    size++;
  };

  result.retrieve = function(key) {
    let hashedKey = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[hashedKey]) return null;
    for (let i = 0; storage[hashedKey].length; i++) {
      let elm = storage[hashedKey][i];
      if (elm[0] === key) return elm[1];
    }
    return null;
  };

  result.remove = function(key) {
    let hashedKey = getIndexBelowMaxForKey(key, storageLimit);
    for (let i = 0; storage[hashedKey].length; i++) {
      let elm = storage[hashedKey][i];
      if (elm[0] === key) {
        size--;
        return storage[hashedKey].splice(i, 1);
      }
    }
  };

  result.resize = function(newLimit) {
    let tempStorage = storage;
    storage = [];
    storageLimit = newLimit;
    tempStorage.forEach(elm => {
      elm.forEach(element => {
        result.insert(element[0], element[1]);
      });
    });
  };

  return result;
};
