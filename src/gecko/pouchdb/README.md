pouchdb_firefox_component
=========================

### Build

* Build this component using `grunt build:firefox` in PouchDB or 
download it from https://github.com/vladikoff/pouchdb/releases (`firefox_component` branch releases)
* Copy the `dist/gecko/pouchdb` directory into `(mozilla-central)/browser/components`
* Edit `moz.build` in  `(mozilla-central)/browser/components`, add `pouchdb` to `PARALLEL_DIRS` in that file.
* Compile Firefox (`./mach build`)


### Usage

* This currently requires a CouchDB remote service to be running. Otherwise the replication step will just hang.
* `var { Pouch } = Cc["@pouchdb.com/component;1"].getService().wrappedJSObject;`
* Example Usage available in https://github.com/vladikoff/syncable-service-poc/blob/pouchdb-fx-xpcom/lib/pouch-db-client.js#L7
