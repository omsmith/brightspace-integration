'use strict';

import './polyfill/Array.prototype.includes.js';
import Lie from 'lie';
if (typeof Promise === 'undefined') {
	window.Promise = Lie;
}

window.D2L = window.D2L || {};

import FastDom from './d2l-fastdom.js';
window.D2L.FastDom = FastDom;

import './page-loading/timing-debug.js';


import '../bower_components/d2l-telemetry/d2l-telemetry.js';
import '../bower_components/jquery-vui-accordion/accordion.js';
import '../bower_components/jquery-vui-change-tracking/changeTracker.js';
import '../bower_components/jquery-vui-change-tracking/changeTracking.js';
import '../bower_components/jquery-vui-collapsible-section/collapsibleSection.js';
import '../bower_components/jquery-vui-scrollspy/scroll-spy.js';
