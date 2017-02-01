// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// TODO(gdi2290): switch to DLLs

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// AngularClass
import '@angularclass/hmr';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


// Smartadmin Dependencies
window['jQuery'] = require('jquery');
window['$'] = window['jQuery'];
// import 'jquery-ui-npm/jquery-ui.min.js'

require('bootstrap/js/tooltip.js'); // required for X-editable
require('bootstrap/js/popover.js'); // required for X-editable
require('bootstrap/js/dropdown.js'); // required for bootstrap-colorpicker
require('bootstrap/js/tab.js'); //
require('bootstrap/js/modal.js'); //

window['moment'] = require('moment');

import 'imports-loader?jQuery=jquery!jquery-color/jquery.color.js'

require('smartadmin-plugins/notification/SmartNotification.min.js');


if ('production' === ENV) {
  // Production


} else {
  // Development

}
