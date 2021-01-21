/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "6efec98b077d9725a4ad";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
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
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!*****************************************!*\
  !*** (webpack)/hot/log-apply-result.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function(updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function(moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function(moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function(moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function(moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t\"[HMR] Consider using the NamedModulesPlugin for module names.\"\n\t\t\t);\n\t}\n};\n\n\n//# sourceURL=webpack:///(webpack)/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!****************************!*\
  !*** (webpack)/hot/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var logLevel = \"info\";\n\nfunction dummy() {}\n\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\nfunction logGroup(logFn) {\n\treturn function(level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\nmodule.exports = function(level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\nmodule.exports.setLogLevel = function(level) {\n\tlogLevel = level;\n};\n\nmodule.exports.formatError = function(err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n\n\n//# sourceURL=webpack:///(webpack)/hot/log.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?1000":
/*!**********************************!*\
  !*** (webpack)/hot/poll.js?1000 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.substr(1) || 10 * 60 * 1000;\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function(updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function(err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n\n/* WEBPACK VAR INJECTION */}.call(this, \"?1000\"))\n\n//# sourceURL=webpack:///(webpack)/hot/poll.js?");

/***/ }),

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AppController = void 0;\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\r\nlet AppController = class AppController {\r\n    constructor(appService) {\r\n        this.appService = appService;\r\n    }\r\n    getHello() {\r\n        return this.appService.getHello();\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Get(),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", String)\r\n], AppController.prototype, \"getHello\", null);\r\nAppController = __decorate([\r\n    common_1.Controller(),\r\n    __metadata(\"design:paramtypes\", [app_service_1.AppService])\r\n], AppController);\r\nexports.AppController = AppController;\r\n\n\n//# sourceURL=webpack:///./src/app.controller.ts?");

/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AppModule = void 0;\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ \"@nestjs/mongoose\");\r\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\r\nconst get_record_controller_1 = __webpack_require__(/*! ./get-record/get-record.controller */ \"./src/get-record/get-record.controller.ts\");\r\nconst identify_controller_1 = __webpack_require__(/*! ./identify/identify.controller */ \"./src/identify/identify.controller.ts\");\r\nconst list_identifiers_controller_1 = __webpack_require__(/*! ./list-identifiers/list-identifiers.controller */ \"./src/list-identifiers/list-identifiers.controller.ts\");\r\nconst list_metadata_formats_controller_1 = __webpack_require__(/*! ./list-metadata-formats/list-metadata-formats.controller */ \"./src/list-metadata-formats/list-metadata-formats.controller.ts\");\r\nconst list_records_controller_1 = __webpack_require__(/*! ./list-records/list-records.controller */ \"./src/list-records/list-records.controller.ts\");\r\nconst list_sets_controller_1 = __webpack_require__(/*! ./list-sets/list-sets.controller */ \"./src/list-sets/list-sets.controller.ts\");\r\nconst request_controller_1 = __webpack_require__(/*! ./request/request.controller */ \"./src/request/request.controller.ts\");\r\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\r\nconst pmh_service_1 = __webpack_require__(/*! ./providers/services/pmh/pmh.service */ \"./src/providers/services/pmh/pmh.service.ts\");\r\nconst db_1 = __webpack_require__(/*! ./providers/db */ \"./src/providers/db.ts\");\r\nconst xml_1 = __webpack_require__(/*! ./providers/xml */ \"./src/providers/xml.ts\");\r\nconst config_1 = __webpack_require__(/*! ./config */ \"./src/config.ts\");\r\nlet AppModule = class AppModule {\r\n};\r\nAppModule = __decorate([\r\n    common_1.Module({\r\n        imports: [mongoose_1.MongooseModule.forRoot(config_1.SERV_ADR)],\r\n        controllers: [app_controller_1.AppController, get_record_controller_1.GetRecordController, identify_controller_1.IdentifyController, list_identifiers_controller_1.ListIdentifiersController, list_metadata_formats_controller_1.ListMetadataFormatsController, list_records_controller_1.ListRecordsController, list_sets_controller_1.ListSetsController, request_controller_1.RequestController],\r\n        providers: [app_service_1.AppService, xml_1.SetXml, pmh_service_1.PmhService, ...db_1.dbProvide],\r\n        exports: [...db_1.dbProvide]\r\n    })\r\n], AppModule);\r\nexports.AppModule = AppModule;\r\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AppService = void 0;\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nlet AppService = class AppService {\r\n    getHello() {\r\n        return 'Serveur OAI-PMH Nemateria';\r\n    }\r\n};\r\nAppService = __decorate([\r\n    common_1.Injectable()\r\n], AppService);\r\nexports.AppService = AppService;\r\n\n\n//# sourceURL=webpack:///./src/app.service.ts?");

/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.JWT_CONFIG = exports.SERV_ADR = void 0;\r\nexports.SERV_ADR = 'mongodb://admin:exlineo@localhost:27017/nemateria?authSource=admin';\r\nexports.JWT_CONFIG = { secret: \"CollectionsNemateria\", expiration: 36000000 };\r\n\n\n//# sourceURL=webpack:///./src/config.ts?");

/***/ }),

/***/ "./src/get-record/get-record.controller.ts":
/*!*************************************************!*\
  !*** ./src/get-record/get-record.controller.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GetRecordController = void 0;\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nlet GetRecordController = class GetRecordController {\r\n    async findRecord(identifier, metadataPrefix) {\r\n        return new Object();\r\n    }\r\n    async findRecordPrefix(identifier, metadataPrefix) {\r\n        return new Object();\r\n    }\r\n    async erreur() {\r\n        return \"Merci de vérifier les paramètres transmis dans votre URL\";\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Get('/:identifier'),\r\n    __param(0, common_1.Param('identifier')), __param(1, common_1.Param('metadataPrefix')),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], GetRecordController.prototype, \"findRecord\", null);\r\n__decorate([\r\n    common_1.Get('/:identifier/:metadataPrefix'),\r\n    __param(0, common_1.Param('identifier')), __param(1, common_1.Param('metadataPrefix')),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], GetRecordController.prototype, \"findRecordPrefix\", null);\r\n__decorate([\r\n    common_1.Get('*'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", Promise)\r\n], GetRecordController.prototype, \"erreur\", null);\r\nGetRecordController = __decorate([\r\n    common_1.Controller('GetRecord')\r\n], GetRecordController);\r\nexports.GetRecordController = GetRecordController;\r\n\n\n//# sourceURL=webpack:///./src/get-record/get-record.controller.ts?");

/***/ }),

/***/ "./src/identify/identify.controller.ts":
/*!*********************************************!*\
  !*** ./src/identify/identify.controller.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IdentifyController = void 0;\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst id_i_interface_1 = __webpack_require__(/*! ../models/interfaces/id-i.interface */ \"./src/models/interfaces/id-i.interface.ts\");\r\nconst xml_1 = __webpack_require__(/*! ../providers/xml */ \"./src/providers/xml.ts\");\r\nlet IdentifyController = class IdentifyController {\r\n    constructor(xml) {\r\n        this.xml = xml;\r\n    }\r\n    async infosOAI() {\r\n        return this.xml.setIdentifyXml(new id_i_interface_1.ID());\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Get(),\r\n    common_1.Header('Content-Type', 'text/xml'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", Promise)\r\n], IdentifyController.prototype, \"infosOAI\", null);\r\nIdentifyController = __decorate([\r\n    common_1.Controller('Identify'),\r\n    __metadata(\"design:paramtypes\", [xml_1.SetXml])\r\n], IdentifyController);\r\nexports.IdentifyController = IdentifyController;\r\n\n\n//# sourceURL=webpack:///./src/identify/identify.controller.ts?");

/***/ }),

/***/ "./src/list-identifiers/list-identifiers.controller.ts":
/*!*************************************************************!*\
  !*** ./src/list-identifiers/list-identifiers.controller.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ListIdentifiersController = void 0;\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst pmh_service_1 = __webpack_require__(/*! ../providers/services/pmh/pmh.service */ \"./src/providers/services/pmh/pmh.service.ts\");\r\nconst xml_1 = __webpack_require__(/*! ../providers/xml */ \"./src/providers/xml.ts\");\r\nlet ListIdentifiersController = class ListIdentifiersController {\r\n    constructor(pmhServ, xml) {\r\n        this.pmhServ = pmhServ;\r\n        this.xml = xml;\r\n    }\r\n    async listIDs(from, until, metadataPrefix, set, resumptionToken) {\r\n        return await new Object();\r\n    }\r\n    async erreur() {\r\n        return \"Merci de vérifier les paramètres transmis dans votre URL\";\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Get('/:from/:until/:metadataPrefix/:set/:resumptionToken'),\r\n    __param(0, common_1.Param('from')), __param(1, common_1.Param('until')), __param(2, common_1.Param('metadataPrefix')), __param(3, common_1.Param('set')), __param(4, common_1.Param('resumptionToken')),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Object, Object, Object, Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ListIdentifiersController.prototype, \"listIDs\", null);\r\n__decorate([\r\n    common_1.Get('*'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ListIdentifiersController.prototype, \"erreur\", null);\r\nListIdentifiersController = __decorate([\r\n    common_1.Controller('ListIdentifiers'),\r\n    __metadata(\"design:paramtypes\", [pmh_service_1.PmhService, xml_1.SetXml])\r\n], ListIdentifiersController);\r\nexports.ListIdentifiersController = ListIdentifiersController;\r\n\n\n//# sourceURL=webpack:///./src/list-identifiers/list-identifiers.controller.ts?");

/***/ }),

/***/ "./src/list-metadata-formats/list-metadata-formats.controller.ts":
/*!***********************************************************************!*\
  !*** ./src/list-metadata-formats/list-metadata-formats.controller.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ListMetadataFormatsController = void 0;\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nlet ListMetadataFormatsController = class ListMetadataFormatsController {\r\n    async listFormats() {\r\n        return new Object();\r\n    }\r\n    async listFormat(identifier) {\r\n        return new Object();\r\n    }\r\n    async erreur() {\r\n        return \"Merci de vérifier les paramètres transmis dans votre URL\";\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Get(''),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ListMetadataFormatsController.prototype, \"listFormats\", null);\r\n__decorate([\r\n    common_1.Get('/:identifier'),\r\n    __param(0, common_1.Param('identifier')),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ListMetadataFormatsController.prototype, \"listFormat\", null);\r\n__decorate([\r\n    common_1.Get('*'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ListMetadataFormatsController.prototype, \"erreur\", null);\r\nListMetadataFormatsController = __decorate([\r\n    common_1.Controller('ListMetadataFormats')\r\n], ListMetadataFormatsController);\r\nexports.ListMetadataFormatsController = ListMetadataFormatsController;\r\n\n\n//# sourceURL=webpack:///./src/list-metadata-formats/list-metadata-formats.controller.ts?");

/***/ }),

/***/ "./src/list-records/list-records.controller.ts":
/*!*****************************************************!*\
  !*** ./src/list-records/list-records.controller.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ListRecordsController = void 0;\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nlet ListRecordsController = class ListRecordsController {\r\n    async listIDs(from, until, metadataPrefix, set, resumptionToken) {\r\n        return new Object();\r\n    }\r\n    async erreur() {\r\n        return \"Merci de vérifier les paramètres transmis dans votre URL\";\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Get('/:from/:until/:metadataPrefix/:set/:resumptionToken'),\r\n    __param(0, common_1.Param('from')), __param(1, common_1.Param('until')), __param(2, common_1.Param('metadataPrefix')), __param(3, common_1.Param('set')), __param(4, common_1.Param('resumptionToken')),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Object, Object, Object, Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ListRecordsController.prototype, \"listIDs\", null);\r\n__decorate([\r\n    common_1.Get('*'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ListRecordsController.prototype, \"erreur\", null);\r\nListRecordsController = __decorate([\r\n    common_1.Controller('ListRecords')\r\n], ListRecordsController);\r\nexports.ListRecordsController = ListRecordsController;\r\n\n\n//# sourceURL=webpack:///./src/list-records/list-records.controller.ts?");

/***/ }),

/***/ "./src/list-sets/list-sets.controller.ts":
/*!***********************************************!*\
  !*** ./src/list-sets/list-sets.controller.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ListSetsController = void 0;\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nlet ListSetsController = class ListSetsController {\r\n    async listFormat(resumptionToken) {\r\n        return new Object();\r\n    }\r\n    async erreur() {\r\n        return \"Merci de vérifier les paramètres transmis dans votre URL\";\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Get('/:resumptionToken'),\r\n    __param(0, common_1.Param('resumptionToken')),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ListSetsController.prototype, \"listFormat\", null);\r\n__decorate([\r\n    common_1.Get('*'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", Promise)\r\n], ListSetsController.prototype, \"erreur\", null);\r\nListSetsController = __decorate([\r\n    common_1.Controller('ListSets')\r\n], ListSetsController);\r\nexports.ListSetsController = ListSetsController;\r\n\n\n//# sourceURL=webpack:///./src/list-sets/list-sets.controller.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\r\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\r\nasync function bootstrap() {\r\n    const app = await core_1.NestFactory.create(app_module_1.AppModule);\r\n    await app.listen(8888);\r\n}\r\nbootstrap();\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/models/interfaces/id-i.interface.ts":
/*!*************************************************!*\
  !*** ./src/models/interfaces/id-i.interface.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ID = void 0;\r\nclass ID {\r\n    constructor() {\r\n        this.baseurl = 'https://vps550589.ovh.net/nemateriaoai';\r\n        this.adminemail = 'contact@exlineo.com';\r\n        this.earliest = new Date();\r\n        this.deleterecord = 'no';\r\n        this.granularity = 'YYYY-MM-DDThh:mm:ssZ';\r\n        this.scheme = 'oai_dc';\r\n        this.repoid = 'oai.nemateria.net';\r\n        this.delimiter = ':';\r\n        this.sampleid = 'oai:nemateria.net:000';\r\n    }\r\n}\r\nexports.ID = ID;\r\n\n\n//# sourceURL=webpack:///./src/models/interfaces/id-i.interface.ts?");

/***/ }),

/***/ "./src/models/schemas/pmh.schemas.ts":
/*!*******************************************!*\
  !*** ./src/models/schemas/pmh.schemas.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MetaSchema = exports.RecordSchema = exports.SetSchema = exports.GenericSchema = void 0;\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nexports.GenericSchema = new mongoose.Schema({ any: {} });\r\nexports.SetSchema = new mongoose.Schema({ any: {} });\r\nexports.RecordSchema = new mongoose.Schema({ any: {} });\r\nexports.MetaSchema = new mongoose.Schema({ any: {} });\r\n\n\n//# sourceURL=webpack:///./src/models/schemas/pmh.schemas.ts?");

/***/ }),

/***/ "./src/providers/db.ts":
/*!*****************************!*\
  !*** ./src/providers/db.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.genericProvider = exports.dbProvide = void 0;\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst config_1 = __webpack_require__(/*! ../config */ \"./src/config.ts\");\r\nconst pmh_schemas_1 = __webpack_require__(/*! ../models/schemas/pmh.schemas */ \"./src/models/schemas/pmh.schemas.ts\");\r\nexports.dbProvide = [\r\n    {\r\n        provide: 'DATABASE_CONNECTION',\r\n        useFactory: () => mongoose.connect(config_1.SERV_ADR, { useNewUrlParser: true }),\r\n    },\r\n];\r\nexports.genericProvider = [\r\n    {\r\n        provide: 'GENERIC_MODEL',\r\n        useFactory: (connection) => connection.model('Generic', pmh_schemas_1.GenericSchema),\r\n        inject: ['DATABASE_CONNECTION'],\r\n    },\r\n];\r\n\n\n//# sourceURL=webpack:///./src/providers/db.ts?");

/***/ }),

/***/ "./src/providers/services/pmh/pmh.service.ts":
/*!***************************************************!*\
  !*** ./src/providers/services/pmh/pmh.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PmhService = void 0;\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nlet PmhService = class PmhService {\r\n    constructor(genModel) {\r\n        this.genModel = genModel;\r\n    }\r\n    async getIdentify(id) {\r\n        return await this.genModel.findById(id).exec();\r\n    }\r\n    async getListIdentifiers() {\r\n        return await this.genModel.find().exec();\r\n    }\r\n    getistMedataFormats() {\r\n    }\r\n    getListRecords() {\r\n    }\r\n    getListSets() {\r\n    }\r\n};\r\nPmhService = __decorate([\r\n    common_1.Injectable(),\r\n    __param(0, common_1.Inject('GENERIC_MODEL')),\r\n    __metadata(\"design:paramtypes\", [mongoose_1.Model])\r\n], PmhService);\r\nexports.PmhService = PmhService;\r\n\n\n//# sourceURL=webpack:///./src/providers/services/pmh/pmh.service.ts?");

/***/ }),

/***/ "./src/providers/xml.ts":
/*!******************************!*\
  !*** ./src/providers/xml.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SetXml = void 0;\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nlet SetXml = class SetXml {\r\n    setIdentifyXml(ID) {\r\n        let idXml = ID;\r\n        return `<?xml version='1.0' encoding='UTF-8'?><?xml-stylesheet type='text/xsl' href='oai2.xsl' ?>\n                    <OAI-PMH xmlns='http://www.openarchives.org/OAI/2.0/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/ http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd'>\n                    <responseDate>2020-09-30T19:52:58Z</responseDate>\n                    <request verb='Identify'>${idXml.baseurl}</request>\n                    <Identify>\n                        <repositoryName>Dépôt Nemateria</repositoryName>\n                        <baseURL>${idXml.baseurl}</baseURL>\n                        <protocolVersion>2.0</protocolVersion>\n                        <adminEmail>${idXml.adminemail}</adminEmail>\n                        <earliestDatestamp>${idXml.earliest}</earliestDatestamp>\n                        <deletedRecord>${idXml.deleterecord}</deletedRecord>\n                        <granularity>${idXml.granularity}</granularity>\n                        <description>\n                        <oai-identifier xmlns='http://www.openarchives.org/OAI/2.0/oai-identifier' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.openarchives.org/OAI/2.0/oai-identifier http://www.openarchives.org/OAI/2.0/oai-identifier.xsd'>        \n                            <scheme>${idXml.scheme}</scheme>        \n                            <repositoryIdentifier>${idXml.repoid}</repositoryIdentifier>        \n                            <delimiter>${idXml.delimiter}</delimiter>        \n                            <sampleIdentifier>${idXml.sampleid}</sampleIdentifier></oai-identifier></description>\n                    </Identify>\n                    </OAI-PMH>`;\r\n    }\r\n    setRecordXml(rec) {\r\n        let xml = `<?xml version=\"1.0\" encoding=\"utf-8\"?>\n        <?xml-stylesheet type=\"text/xsl\" href=\"/oai/xsl\"?>\n        <OAI-PMH xmlns=\"http://www.openarchives.org/OAI/2.0/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.openarchives.org/OAI/2.0/ http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd\">\n          <responseDate>2020-10-02T08:14:31Z</responseDate>\n          <request verb=\"ListRecords\" metadataPrefix=\"oai_dc\">http://api.archives-ouvertes.fr/oai/hal/</request>\n          <ListRecords>\n            <record>\n                <header>\n                    <identifier>oai:HAL:tel-02955615v1</identifier>\n                    <datestamp>2020-10-02</datestamp>\n                    <setSpec>type:THESE</setSpec>\n                    <setSpec>subject:sdv</setSpec>\n                    <setSpec>collection:STAR</setSpec>\n                </header>\n                <metadata xmlns:oai_dc=\"http://www.openarchives.org/OAI/2.0/oai_dc/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\"><oai_dc:dc xmlns:oai_dc=\"http://www.openarchives.org/OAI/2.0/oai_dc/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:tei=\"http://www.tei-c.org/ns/1.0\" xsi:schemaLocation=\"http://www.openarchives.org/OAI/2.0/oai_dc/  http://www.openarchives.org/OAI/2.0/oai_dc.xsd http://purl.org/dc/elements/1.1/  http://dublincore.org/schemas/xmls/qdc/2008/02/11/dc.xsd\">\n                    <dc:publisher>HAL CCSD</dc:publisher>\n                    <dc:title xml:lang=\"en\">Analysis of isoforms from the Tyrosine Kinase Receptor HER4 : towards a therapeutic targeting using antibodies in cancerology</dc:title>\n                    <dc:title xml:lang=\"fr\">Analyse des isoformes du récepteur tyrosine kinase HER4 : vers un ciblage thérapeutique à l’aide d’anticorps en cancérologie</dc:title>\n                    <dc:creator>Lanotte, Romain</dc:creator>\n                    <dc:contributor>Institut de Recherche en Cancérologie de Montpellier (IRCM - U1194 Inserm - UM) ; CRLCC Val d'Aurelle - Paul Lamarque-Institut National de la Santé et de la Recherche Médicale (INSERM)-Université de Montpellier (UM)</dc:contributor>\n                    <dc:identifier>NNT: 2018MONTT090</dc:identifier>\n                    <dc:contributor>Université Montpellier</dc:contributor>\n                    <dc:contributor>Thierry Chardès</dc:contributor>\n                    <dc:identifier>tel-02955615</dc:identifier>\n                    <dc:identifier>https://tel.archives-ouvertes.fr/tel-02955615</dc:identifier>\n                    <dc:identifier>https://tel.archives-ouvertes.fr/tel-02955615/document</dc:identifier>\n                    <dc:identifier>https://tel.archives-ouvertes.fr/tel-02955615/file/2018_LANOTTE_archivage.pdf</dc:identifier>\n                    <dc:source>https://tel.archives-ouvertes.fr/tel-02955615</dc:source>\n                    <dc:source>Cancer. Université Montpellier, 2018. Français. &amp;#x27E8;NNT : 2018MONTT090&amp;#x27E9;</dc:source>\n                    <dc:language>fr</dc:language>\n                    <dc:subject xml:lang=\"en\">ErbB4/HER4</dc:subject>\n                    <dc:subject xml:lang=\"en\">Antibody</dc:subject>\n                    <dc:subject xml:lang=\"en\">Tumor suppressor</dc:subject>\n                    <dc:subject xml:lang=\"en\">Oncogene</dc:subject>\n                    <dc:subject xml:lang=\"fr\">ErbB4/HER4</dc:subject>\n                    <dc:subject xml:lang=\"fr\">Anticorps</dc:subject>\n                    <dc:subject xml:lang=\"fr\">Suppresseur de tumeur</dc:subject>\n                    <dc:subject xml:lang=\"fr\">Oncogène</dc:subject>\n                    <dc:subject>[SDV.CAN]Life Sciences [q-bio]/Cancer</dc:subject>\n                    <dc:type>info:eu-repo/semantics/doctoralThesis</dc:type>\n                    <dc:type>Theses</dc:type>\n                    <dc:description xml:lang=\"en\">\n                                HER family is composed by four members which play a major role in cancer development. EGFR, HER2 and HER3 are well described and targeted with therapeutic monoclonal antibodies. HER4, the last one, is poorly described with a contentious role in cancerogenesis. Nowadays, there is no therapeutic antibody targeting HER4 in clinic. Four isoforms of the receptor are addressed to the plasma membrane and are called JMa/CYT1; JMa/CYT2; JMb/CYT1 and JMb/CYT2. JMa isoforms are activated by cleavage, but not JMb isoforms. Following their activation, JMa isoform cleavage releases the intracellular part of the receptor called 4ICD. This part can be directed to the nucleus or others subcellular compartments, involving HER4 in oncogenic or tumor suppressor signalling. Because a pro-apoptotic activity of 4ICD and its main ligand NRG1 have been described, we studied JMa isoforms signaling to determine their roles in cancer. We demonstrated that NRG1 induce a tumor suppressor signalling from JMa/CYT1 and an oncogenic signalling from JMa/CYT2. Based on these results, we developed an innovative screening for anti-HER4 antibodies by whole cell panning with phage display. To this end, we used NRG1- stimulated cells expressing JMa/CYT1 isoforms. We characterized four anti-HER4 antibodies and functions of some of them are affected and modulated by NRG1. Two antibodies were characterized as agonistic anti-HER4 antibodies and induce cell death of cancer cells by different mechanisms. Like NRG1, one of them induce mitochondrial localization of 4ICD-CYT1 to induce cell death. These promising results pave the way to a therapeutic targeting of HER4 receptor with agonistic antibodies to treat cancer\n                                </dc:description>\n                    <dc:description xml:lang=\"fr\">\n                                Les récepteurs de la famille HER jouent un rôle majeur dans le développement du cancer. Alors qu’EGFR, HER2 et HER3 sont très bien étudiés et ciblés par des anticorps thérapeutiques, le dernier récepteur de cette famille, HER4, n’est que peu étudié et son implication dans la cancérogénèse est controversée. Il n’existe à ce jour pas d’anticorps thérapeutique anti-HER4 sur le marché ou en phase clinique. Ce récepteur est présent à la surface en quatre isoformes (JMa/CYT1 ; JMa/CYT2 ; JMb/CYT1 ; JMb/CYT2). Les isoformes JMa sont activées par clivage du récepteur, contrairement aux deux isoformes JMb. Le clivage de ces isoformes conduit à la libération de la partie intracellulaire du récepteur, appelée 4ICD. Ce fragment peut être dirigée au noyau ou dans d’autres compartiments cellulaires, impliquant HER4 dans des signalisations oncogéniques ou suppresseurs de tumeur. La littérature décrivant une activité pro-apoptotique de 4ICD et de la NRG1, le principal ligand de HER4, nous avons étudié la signalisation de ces isoformes afin de déterminer leurs rôles au niveau tumoral. Nos résultats indiquent que la NRG1 induit une signalisation suppresseur de tumeur via JMa/CYT1 et une signalisation oncogénique via JMa/CYT2. Sur la base de ces résultats, nous avons développé un criblage original d’anticorps anti-HER4 par phage display, sur des cellules exprimant l’isoforme JMa/CYT1 et stimulées par la NRG1. Nous avons caractérisés quatre anticorps anti-HER4, dont l’activité et les signalisations de certains sont modulées par la NRG1. Deux de ces anticorps, caractérisés comme étant des agonistes du récepteur HER4, induisent la mort des cellules tumorales par des mécanismes que nous sommes en train d’élucider. De manière similaire a la NRG1, un des anticorps induit la relocalisation de 4ICD-CYT1 a la mitochondrie pour induire la mort cellulaire. Ces résultats prometteurs ouvrent la voie à un ciblage thérapeutique du récepteur HER4 a l’aide d’anticorps agonistes pour le traitement des cancers\n                                </dc:description>\n                    <dc:date>2018-11-29</dc:date>\n                    <dc:rights>info:eu-repo/semantics/OpenAccess</dc:rights>\n                    </oai_dc:dc>\n                </metadata>\n            </record>\n            <resumptionToken expirationDate=\"2020-10-02T10:14:31Z\" completeListSize=\"2454558\" cursor=\"0\">AoFdi6ML</resumptionToken>\n          </ListRecords>\n        </OAI-PMH>`;\r\n    }\r\n    setRecordsXml(rec) {\r\n    }\r\n    setUpRecord() {\r\n        let xml;\r\n        return xml;\r\n    }\r\n};\r\nSetXml = __decorate([\r\n    common_1.Injectable()\r\n], SetXml);\r\nexports.SetXml = SetXml;\r\n\n\n//# sourceURL=webpack:///./src/providers/xml.ts?");

/***/ }),

/***/ "./src/request/request.controller.ts":
/*!*******************************************!*\
  !*** ./src/request/request.controller.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RequestController = void 0;\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst pmh_service_1 = __webpack_require__(/*! ../providers/services/pmh/pmh.service */ \"./src/providers/services/pmh/pmh.service.ts\");\r\nlet RequestController = class RequestController {\r\n    constructor(pms) {\r\n        this.pms = pms;\r\n    }\r\n    async checkVerb(verb) {\r\n        switch (verb) {\r\n            case 'Identify':\r\n                break;\r\n            case 'GetRecord':\r\n                break;\r\n            case 'ListIdentifiers':\r\n                break;\r\n            case 'ListMetadataFormats':\r\n                break;\r\n            case 'Identify':\r\n                break;\r\n            case 'ListRecords':\r\n                break;\r\n            case 'ListSets':\r\n                break;\r\n            default:\r\n                return 'nothing';\r\n        }\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Get(),\r\n    __param(0, common_1.Query('verb')),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], RequestController.prototype, \"checkVerb\", null);\r\nRequestController = __decorate([\r\n    common_1.Controller('request'),\r\n    __metadata(\"design:paramtypes\", [pmh_service_1.PmhService])\r\n], RequestController);\r\nexports.RequestController = RequestController;\r\n\n\n//# sourceURL=webpack:///./src/request/request.controller.ts?");

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi webpack/hot/poll?1000 ./src/main.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! webpack/hot/poll?1000 */\"./node_modules/webpack/hot/poll.js?1000\");\nmodule.exports = __webpack_require__(/*! ./src/main.ts */\"./src/main.ts\");\n\n\n//# sourceURL=webpack:///multi_webpack/hot/poll?");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nestjs/common\");\n\n//# sourceURL=webpack:///external_%22@nestjs/common%22?");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nestjs/core\");\n\n//# sourceURL=webpack:///external_%22@nestjs/core%22?");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nestjs/mongoose\");\n\n//# sourceURL=webpack:///external_%22@nestjs/mongoose%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });