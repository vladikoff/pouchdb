let window = {};
// TODO
window.addEventListener = function () {};
const {classes: Cc, interfaces: Ci, results: Cr, utils: Cu} = Components;

// set module exports for PouchDB export
var Pouch = window.Pouch;
// Gecko jsm component export
EXPORTED_SYMBOLS = ['Pouch'];

// use XPCOM dump for console.log debug
let console = {};
console.log = dump;

if (typeof btoa === 'undefined') {
  let { atob, btoa } = Cu.import("resource://gre/modules/Services.jsm", {});
}

// imports `indexedDB`
Cu.import("chrome://pouchdb/content/idb.jsm");
window.indexedDB = indexedDB;
window.IDBKeyRange = IDBKeyRange;

if (typeof xhr === 'undefined') {
  // imports `xhr`
  Cu.import("chrome://pouchdb/content/xhr.jsm");
  window.XMLHttpRequest = XMLHttpRequest;
}

if (typeof setTimeout === 'undefined') {
  // imports `setTimeout`, `clearTimeout`
  Cu.import("chrome://pouchdb/content/timers.jsm");
}