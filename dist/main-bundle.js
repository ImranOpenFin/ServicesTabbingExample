/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var openfin_layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openfin-layouts */ \"./node_modules/openfin-layouts/dist/client/main.js\");\n/* harmony import */ var openfin_layouts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openfin_layouts__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', async () => {\r\n    await Promise.all([\r\n        fin.Application.createFromManifest('http://localhost:8085/app/app2.json').then(app => app.run()),\r\n        fin.Application.createFromManifest('http://localhost:8085/app/app3.json').then(app => app.run())\r\n    ]);\r\n\r\n    await openfin_layouts__WEBPACK_IMPORTED_MODULE_0__[\"createTabGroup\"]([\r\n        {uuid: 'OpenfinPOC-3fadfsdd', name: 'OpenfinPOC-3fadfsdd'},\r\n        {uuid: 'OpenfinPOC-123fdsfds', name: 'OpenfinPOC-123fdsfds'},\r\n        {uuid: 'OpenfinPOC-3jffdsfdsfsdw0d', name: 'OpenfinPOC-3jffdsfdsfsdw0d'}\r\n    ]);\r\n});\r\n\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ }),

/***/ "./node_modules/openfin-layouts/dist/client/APITypes.js":
/*!**************************************************************!*\
  !*** ./node_modules/openfin-layouts/dist/client/APITypes.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TabApiEvents;\n(function (TabApiEvents) {\n    TabApiEvents[\"TABADDED\"] = \"TABADDED\";\n    TabApiEvents[\"TABREMOVED\"] = \"TABREMOVED\";\n    TabApiEvents[\"PROPERTIESUPDATED\"] = \"PROPERTIESUPDATED\";\n    TabApiEvents[\"TABACTIVATED\"] = \"TABACTIVATED\";\n})(TabApiEvents = exports.TabApiEvents || (exports.TabApiEvents = {}));\nvar AppApiEvents;\n(function (AppApiEvents) {\n    AppApiEvents[\"CLIENTINIT\"] = \"CLIENTINIT\";\n    AppApiEvents[\"TABBED\"] = \"TABBED\";\n    AppApiEvents[\"UNTABBED\"] = \"UNTABBED\";\n    AppApiEvents[\"DEREGISTER\"] = \"DEREGISTER\";\n})(AppApiEvents = exports.AppApiEvents || (exports.AppApiEvents = {}));\n/**\n * @description The action the tab client api will send to the service,\n * this will determine which action to execute on service side\n */\nvar TabAPIActions;\n(function (TabAPIActions) {\n    TabAPIActions[\"STARTDRAG\"] = \"STARTDRAG\";\n    TabAPIActions[\"ENDDRAG\"] = \"ENDDRAG\";\n    TabAPIActions[\"ADD\"] = \"ADD\";\n    TabAPIActions[\"EJECT\"] = \"EJECT\";\n    TabAPIActions[\"CLOSE\"] = \"CLOSE\";\n    TabAPIActions[\"ACTIVATE\"] = \"ACTIVATE\";\n    TabAPIActions[\"UPDATEPROPERTIES\"] = \"UPDATEPROPERTIES\";\n    TabAPIActions[\"INIT\"] = \"TABINIT\";\n    TabAPIActions[\"TABSREORDERED\"] = \"TABSREORDERED\";\n    TabAPIActions[\"GETTABS\"] = \"GETTABS\";\n})(TabAPIActions = exports.TabAPIActions || (exports.TabAPIActions = {}));\nvar TabAPI;\n(function (TabAPI) {\n    TabAPI[\"CREATETABGROUP\"] = \"CREATETABGROUP\";\n    TabAPI[\"SETTABCLIENT\"] = \"SETTABCLIENT\";\n    TabAPI[\"GETTABS\"] = \"GETTABS\";\n    TabAPI[\"ADDTAB\"] = \"ADDTAB\";\n    TabAPI[\"REMOVETAB\"] = \"REMOVETAB\";\n    TabAPI[\"SETACTIVETAB\"] = \"SETACTIVETAB\";\n    TabAPI[\"MINIMIZETABGROUP\"] = \"MINIMIZETABGROUP\";\n    TabAPI[\"MAXIMIZETABGROUP\"] = \"MAXIMIZETABGROUP\";\n    TabAPI[\"CLOSETABGROUP\"] = \"CLOSETABGROUP\";\n    TabAPI[\"RESTORETABGROUP\"] = \"RESTORETABGROUP\";\n    TabAPI[\"REORDERTABS\"] = \"REORDERTABS\";\n    TabAPI[\"STARTDRAG\"] = \"STARTDRAG\";\n    TabAPI[\"ENDDRAG\"] = \"ENDDRAG\";\n    TabAPI[\"UPDATETABPROPERTIES\"] = \"UPDATETABPROPERTIES\";\n    TabAPI[\"CLOSETAB\"] = \"CLOSETAB\";\n})(TabAPI = exports.TabAPI || (exports.TabAPI = {}));\nvar TabAPIWindowActions;\n(function (TabAPIWindowActions) {\n    TabAPIWindowActions[\"MAXIMIZE\"] = \"MAXIMIZEWINDOW\";\n    TabAPIWindowActions[\"MINIMIZE\"] = \"MINIMIZEWINDOW\";\n    TabAPIWindowActions[\"RESTORE\"] = \"RESTOREWINDOW\";\n    TabAPIWindowActions[\"CLOSE\"] = \"CLOSEWINDOW\";\n    TabAPIWindowActions[\"TOGGLEMAXIMIZE\"] = \"TOGGLEMAXIMIZE\";\n})(TabAPIWindowActions = exports.TabAPIWindowActions || (exports.TabAPIWindowActions = {}));\nvar SaveAndRestoreActions;\n(function (SaveAndRestoreActions) {\n    SaveAndRestoreActions[\"GETBLOB\"] = \"SARGETBLOB\";\n    SaveAndRestoreActions[\"SENDBLOB\"] = \"SARSENDBLOB\";\n})(SaveAndRestoreActions = exports.SaveAndRestoreActions || (exports.SaveAndRestoreActions = {}));\nvar SaveAndRestoreEvents;\n(function (SaveAndRestoreEvents) {\n    SaveAndRestoreEvents[\"GETBLOBRETURN\"] = \"SARRETURNBLOB\";\n})(SaveAndRestoreEvents = exports.SaveAndRestoreEvents || (exports.SaveAndRestoreEvents = {}));\n//# sourceMappingURL=APITypes.js.map\n\n//# sourceURL=webpack:///./node_modules/openfin-layouts/dist/client/APITypes.js?");

/***/ }),

/***/ "./node_modules/openfin-layouts/dist/client/main.js":
/*!**********************************************************!*\
  !*** ./node_modules/openfin-layouts/dist/client/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst APITypes_1 = __webpack_require__(/*! ./APITypes */ \"./node_modules/openfin-layouts/dist/client/APITypes.js\");\nconst types_1 = __webpack_require__(/*! ./types */ \"./node_modules/openfin-layouts/dist/client/types.js\");\nconst version_1 = __webpack_require__(/*! ./version */ \"./node_modules/openfin-layouts/dist/client/version.js\");\nif (typeof fin === 'undefined') {\n    throw new Error('fin is not defined, This module is only intended for use in an OpenFin application.');\n}\nconst getId = (() => {\n    let id;\n    return () => {\n        if (id) {\n            return id;\n        }\n        const { uuid, name } = fin.Window.me;\n        id = { uuid, name };\n        return id;\n    };\n})();\nconst channelPromise = fin.InterApplicationBus.Channel.connect(types_1.CHANNEL_NAME, { payload: { version: version_1.version } }).then((channel) => {\n    // Register service listeners\n    channel.register('WARN', (payload) => console.warn(payload)); // tslint:disable-line:no-any\n    channel.register('join-snap-group', () => {\n        window.dispatchEvent(new Event('join-snap-group'));\n    });\n    channel.register('leave-snap-group', () => {\n        window.dispatchEvent(new Event('leave-snap-group'));\n    });\n    channel.register('join-tab-group', (payload) => {\n        window.dispatchEvent(new CustomEvent('join-tab-group', { detail: payload }));\n    });\n    channel.register('leave-tab-group', (payload) => {\n        window.dispatchEvent(new CustomEvent('leave-tab-group', { detail: payload }));\n    });\n    channel.register('tab-activated', (payload) => {\n        window.dispatchEvent(new CustomEvent('tab-activated', { detail: payload }));\n    });\n    // Any unregistered action will simply return false\n    channel.setDefaultAction(() => false);\n    return channel;\n});\n/**\n * Undocks a window from any group it currently belongs to.\n *\n * Has no effect if the window is not currently docked.\n *\n * @param identity The window to undock, defaults to the current window\n */\nasync function undockWindow(identity = getId()) {\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, 'undockWindow', identity);\n}\nexports.undockWindow = undockWindow;\n/**\n * Will undock every window that is currently connected to a current window.\n *\n * This will completely disband the entire group, not just the windows directly touching 'identity'.\n *\n * Has no effect if 'identity' isn't currently snapped to any other window.\n *\n * @param identity A window belonging to the group that should be disbanded, defaults to the current window/group\n */\nasync function undockGroup(identity = getId()) {\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, 'undockGroup', identity);\n}\nexports.undockGroup = undockGroup;\n/**\n * Allows a window to opt-out of this service. This will disable all layouts-related functionality for the given window.\n *\n * @param identity The window to deregister, defaults to the current window\n */\nasync function deregister(identity = getId()) {\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, 'deregister', identity);\n}\nexports.deregister = deregister;\n/**\n * Registers an event listener for grouping events\n * @param {string} eventType Event to be subscribed to. Valid options are 'join-snap-group' and 'leave-snap-group'\n * @param {() => void} callback Function to be executed on event firing. Takes no arguments and returns void.\n */\n// export async function addEventListener(eventType: 'join-tab-group' | 'leave-tab-group', callback: (customEvent: TabEvent) => void): Promise<void>;\nasync function addEventListener(eventType, callback) {\n    // Use native js event system to pass internal events around.\n    // Without this we would need to handle multiple registration ourselves.\n    window.addEventListener(eventType, callback);\n}\nexports.addEventListener = addEventListener;\n/**\n * Decide which parts of this you will implement, alter LayoutApp object to reflect this then send it back\n */\nasync function onApplicationSave(customDataDecorator) {\n    const channel = await channelPromise;\n    return channel.register('savingLayout', customDataDecorator);\n}\nexports.onApplicationSave = onApplicationSave;\n/**\n * Get the layoutApp object, implement, then return implemented LayoutApp object (minus anything not implemented)\n */\nasync function onAppRestore(layoutDecorator) {\n    const channel = await channelPromise;\n    return channel.register('restoreApp', layoutDecorator);\n}\nexports.onAppRestore = onAppRestore;\n/**\n * Any time the service saves a layout locally, it also sends to this route (could use own service here)\n */\nasync function onLayoutSave(listener) {\n    const channel = await channelPromise;\n    return channel.register('layoutSaved', listener);\n}\nexports.onLayoutSave = onLayoutSave;\n/**\n * Service will send out the restored layout with any changes from client connections\n */\nasync function onLayoutRestore(listener) {\n    const channel = await channelPromise;\n    return channel.register('layoutRestored', listener);\n}\nexports.onLayoutRestore = onLayoutRestore;\n/**\n * Generate the Layout object for the current Layout\n */\nasync function generateLayout() {\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, 'generateLayout');\n}\nexports.generateLayout = generateLayout;\n/**\n * Restore a layout from a Layout object\n */\nasync function restoreLayout(payload) {\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, 'restoreLayout', payload);\n}\nexports.restoreLayout = restoreLayout;\n/**\n * Send this to the service when you have registered all routes after registration\n */\nasync function ready() {\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, 'appReady');\n}\nexports.ready = ready;\n/**\n * Returns array of window references for tabs belonging to the tab group of the provided window context.\n *\n * If no Identity is provided as an argument, the current window context will be used.\n *\n * If there is no tab group associated with the window context, will resolve to null.\n */\nasync function getTabs(window = getId()) {\n    if (!window || !window.name || !window.uuid) {\n        return Promise.reject('Invalid window provided');\n    }\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, APITypes_1.TabAPI.GETTABS, window);\n}\nexports.getTabs = getTabs;\n/**\n * If a custom tab-strip UI is being used - this sets the URL for the tab-strip.\n * This binding happens on the application level.  An application cannot have different windows using different tabbing UI.\n */\nasync function setTabClient(url, config) {\n    const resolvedConfig = Object.assign({ url }, config);\n    if (!config || isNaN(config.height)) {\n        return Promise.reject('Invalid config height provided');\n    }\n    try {\n        // tslint:disable-next-line:no-unused-expression\n        new URL(url);\n    }\n    catch (e) {\n        return Promise.reject(e);\n    }\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, APITypes_1.TabAPI.SETTABCLIENT, { id: getId(), config: resolvedConfig });\n}\nexports.setTabClient = setTabClient;\n/**\n * Given a set of windows, will create a tab group construct and UI around them.  The bounds and positioning of the first (applicable) window in the set will be\n * used as the seed for the tab UI properties.\n */\nasync function createTabGroup(windows) {\n    if (!windows || windows.length === 0) {\n        return Promise.reject('Invalid window identity array');\n    }\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, APITypes_1.TabAPI.CREATETABGROUP, windows);\n}\nexports.createTabGroup = createTabGroup;\n/**\n * Adds current window context (or window specified in second arg)  to the tab group of the target window (first arg).\n *\n * Will reject with an error if the TabClient of the target and context tab group do not match.\n *\n * The added tab will be brought into focus.\n */\nasync function addTab(targetWindow, windowToAdd = getId()) {\n    if (!targetWindow || !targetWindow.uuid || !targetWindow.name) {\n        return Promise.reject('Invalid targetWindow provided');\n    }\n    if (!windowToAdd || !windowToAdd.name || !windowToAdd.uuid) {\n        return Promise.reject('Invalid window provided');\n    }\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, APITypes_1.TabAPI.ADDTAB, { targetWindow, windowToAdd });\n}\nexports.addTab = addTab;\n/**\n * Removes the specified tab from its tab group.\n * Uses current window context by default\n */\nasync function removeTab(window = getId()) {\n    if (!window || !window.name || !window.uuid) {\n        return Promise.reject('Invalid window provided');\n    }\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, APITypes_1.TabAPI.REMOVETAB, window);\n}\nexports.removeTab = removeTab;\n/**\n * Brings the specified tab to the front of the set.\n */\nasync function setActiveTab(window = getId()) {\n    if (!window || !window.name || !window.uuid) {\n        return Promise.reject('Invalid window provided');\n    }\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, APITypes_1.TabAPI.SETACTIVETAB, window);\n}\nexports.setActiveTab = setActiveTab;\n/**\n * Closes the tab for the window context and removes it from the associated tab group.\n */\nasync function closeTab(window = getId()) {\n    if (!window || !window.name || !window.uuid) {\n        return Promise.reject('Invalid window provided');\n    }\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, APITypes_1.TabAPI.CLOSETAB, window);\n}\nexports.closeTab = closeTab;\n/**\n * Minimizes the tab group for the window context.\n */\nasync function minimizeTabGroup(window = getId()) {\n    if (!window || !window.name || !window.uuid) {\n        return Promise.reject('Invalid window provided');\n    }\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, APITypes_1.TabAPI.MINIMIZETABGROUP, window);\n}\nexports.minimizeTabGroup = minimizeTabGroup;\n/**\n * Maximizes the tab group for the window context.\n */\nasync function maximizeTabGroup(window = getId()) {\n    if (!window || !window.name || !window.uuid) {\n        return Promise.reject('Invalid window provided');\n    }\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, APITypes_1.TabAPI.MAXIMIZETABGROUP, window);\n}\nexports.maximizeTabGroup = maximizeTabGroup;\n/**\n * Closes the tab group for the window context.\n */\nasync function closeTabGroup(window = getId()) {\n    if (!window || !window.name || !window.uuid) {\n        return Promise.reject('Invalid window provided');\n    }\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, APITypes_1.TabAPI.CLOSETABGROUP, window);\n}\nexports.closeTabGroup = closeTabGroup;\n/**\n * Restores the tab group for the window context to its normal state.\n */\nasync function restoreTabGroup(window = getId()) {\n    if (!window || !window.name || !window.uuid) {\n        return Promise.reject('Invalid window provided');\n    }\n    const channel = await channelPromise;\n    return tryServiceDispatch(channel, APITypes_1.TabAPI.RESTORETABGROUP, window);\n}\nexports.restoreTabGroup = restoreTabGroup;\nexports.tabStrip = {\n    /**\n     * Updates a Tabs Properties on the Tab strip.\n     */\n    async updateTabProperties(window, properties) {\n        if (!window || !window.name || !window.uuid) {\n            return Promise.reject('Invalid window provided');\n        }\n        const channel = await channelPromise;\n        return tryServiceDispatch(channel, APITypes_1.TabAPI.UPDATETABPROPERTIES, { window, properties });\n    },\n    /**\n     * Starts the HTML5 Dragging Sequence\n     */\n    async startDrag() {\n        const channel = await channelPromise;\n        return tryServiceDispatch(channel, APITypes_1.TabAPI.STARTDRAG);\n    },\n    /**\n     * Ends the HTML5 Dragging Sequence.\n     */\n    async endDrag(event, window) {\n        if (!window || !window.name || !window.uuid) {\n            return Promise.reject('Invalid window provided');\n        }\n        const channel = await channelPromise;\n        const dropPoint = { screenX: event.screenX, screenY: event.screenY };\n        return tryServiceDispatch(channel, APITypes_1.TabAPI.ENDDRAG, { event: dropPoint, window });\n    },\n    /**\n     * Resets the tabs to the order provided.  The length of tabs Identity array must match the current number of tabs, and each current tab must appear in the\n     * array exactly once to be valid.  If the input isn’t valid, the call will reject and no change will be made.\n     */\n    async reorderTabs(newOrdering) {\n        if (!newOrdering || newOrdering.length === 0) {\n            return Promise.reject('Invalid new Order array');\n        }\n        const channel = await channelPromise;\n        return tryServiceDispatch(channel, APITypes_1.TabAPI.REORDERTABS, newOrdering);\n    }\n};\n/**\n * Wrapper around service.dispatch to help with type checking\n */\nconst tryServiceDispatch = async (channel, action, payload) => {\n    return channel.dispatch(action, payload);\n};\n//# sourceMappingURL=main.js.map\n\n//# sourceURL=webpack:///./node_modules/openfin-layouts/dist/client/main.js?");

/***/ }),

/***/ "./node_modules/openfin-layouts/dist/client/types.js":
/*!***********************************************************!*\
  !*** ./node_modules/openfin-layouts/dist/client/types.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TabServiceID;\n(function (TabServiceID) {\n    TabServiceID[\"NAME\"] = \"layouts-service\";\n    TabServiceID[\"UUID\"] = \"layouts-service\";\n})(TabServiceID = exports.TabServiceID || (exports.TabServiceID = {}));\nvar ServiceIABTopics;\n(function (ServiceIABTopics) {\n    ServiceIABTopics[\"CLIENTINIT\"] = \"CLIENTINIT\";\n    ServiceIABTopics[\"TABEJECTED\"] = \"TABEJECTED\";\n    ServiceIABTopics[\"UPDATETABPROPERTIES\"] = \"UPDATETABPROPERTIES\";\n})(ServiceIABTopics = exports.ServiceIABTopics || (exports.ServiceIABTopics = {}));\nexports.CHANNEL_NAME = 'of-layouts-service-v1';\n//# sourceMappingURL=types.js.map\n\n//# sourceURL=webpack:///./node_modules/openfin-layouts/dist/client/types.js?");

/***/ }),

/***/ "./node_modules/openfin-layouts/dist/client/version.js":
/*!*************************************************************!*\
  !*** ./node_modules/openfin-layouts/dist/client/version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// generated by genversion\nexports.version = '0.9.3';\n//# sourceMappingURL=version.js.map\n\n//# sourceURL=webpack:///./node_modules/openfin-layouts/dist/client/version.js?");

/***/ })

/******/ });