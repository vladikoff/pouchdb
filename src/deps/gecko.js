// TODO: These are just placeholders to get PouchDB working
// This needs to be updated once we need full PouchDB support
let window = {};
window.addEventListener = function () {};
let localStorage = {};

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

// Modules below come from the addon-sdk 1.14

// imports `indexedDB`
Cu.import("resource:///modules/pouchdb/idb.jsm");
window.indexedDB = indexedDB;
window.IDBKeyRange = IDBKeyRange;

if (typeof xhr === 'undefined') {
  // imports `xhr`
  Cu.import("resource:///modules/pouchdb/xhr.jsm");
  // PouchDB checks for 'window.XMLHttpRequest'
  window.XMLHttpRequest = XMLHttpRequest;
}

if (typeof setTimeout === 'undefined') {
  // imports `setTimeout`, `clearTimeout`
  Cu.import("resource:///modules/pouchdb/timers.jsm");
}