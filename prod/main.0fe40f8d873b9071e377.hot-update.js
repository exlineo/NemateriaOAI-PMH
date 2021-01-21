exports.id = "main";
exports.modules = {

/***/ "./src/identify/identify.controller.ts":
/*!*********************************************!*\
  !*** ./src/identify/identify.controller.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IdentifyController = void 0;\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst id_i_interface_1 = __webpack_require__(/*! ../models/interfaces/id-i.interface */ \"./src/models/interfaces/id-i.interface.ts\");\r\nconst xml_1 = __webpack_require__(/*! ../providers/xml */ \"./src/providers/xml.ts\");\r\nlet IdentifyController = class IdentifyController {\r\n    constructor(xml) {\r\n        this.xml = xml;\r\n    }\r\n    async infosOAI() {\r\n        return this.xml.setIdentifyXml(new id_i_interface_1.ID());\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Get(),\r\n    common_1.Header('Content-Type', 'text/xml'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", Promise)\r\n], IdentifyController.prototype, \"infosOAI\", null);\r\nIdentifyController = __decorate([\r\n    common_1.Controller('Identify'),\r\n    __metadata(\"design:paramtypes\", [xml_1.SetXml])\r\n], IdentifyController);\r\nexports.IdentifyController = IdentifyController;\r\n\n\n//# sourceURL=webpack:///./src/identify/identify.controller.ts?");

/***/ }),

/***/ "./src/models/interfaces/id-i.interface.ts":
/*!*************************************************!*\
  !*** ./src/models/interfaces/id-i.interface.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ID = void 0;\r\nclass ID {\r\n    constructor() {\r\n        this.baseurl = 'https://vps550589.ovh.net/nemateriaoai';\r\n        this.adminemail = 'contact@exlineo.com';\r\n        this.earliest = new Date();\r\n        this.deleterecord = 'no';\r\n        this.granularity = 'YYYY-MM-DDThh:mm:ssZ';\r\n        this.scheme = 'oai_dc';\r\n        this.repoid = 'oai.nemateria.net';\r\n        this.delimiter = ':';\r\n        this.sampleid = 'oai:nemateria.net:000';\r\n    }\r\n}\r\nexports.ID = ID;\r\n\n\n//# sourceURL=webpack:///./src/models/interfaces/id-i.interface.ts?");

/***/ })

};