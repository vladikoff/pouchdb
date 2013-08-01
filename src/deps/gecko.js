let module = {};
module.exports = {};
module.exports.Pouch = null;
const {classes: Cc, interfaces: Ci, results: Cr, utils: Cu} = Components;


// set module exports for PouchDB export


Pouch = module.exports.Pouch;
// Gecko jsm component export
EXPORTED_SYMBOLS = ['Pouch'];

// use XPCOM dump for console.log debug
let console = {};
console.log = dump;

if (typeof btoa === 'undefined') {
  let { atob, btoa } = Cu.import("resource://gre/modules/Services.jsm", {});
}
Cu.import("chrome://pouchdb/content/idb.jsm");

if (typeof xhr === 'undefined') {
  // imports `xhr`
  Cu.import("chrome://pouchdb/content/xhr.jsm");
}

if (typeof setTimeout === 'undefined') {
  // imports `setTimeout`, `clearTimeout`
  Cu.import("chrome://pouchdb/content/timers.jsm");
}