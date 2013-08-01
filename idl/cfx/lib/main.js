var {Cc, Ci, Cu} = require("chrome");
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

var { Pouch } = Cc["@pouchdb.com/component;1"].getService().wrappedJSObject;
