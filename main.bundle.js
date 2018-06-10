webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div >  \r\n<!--app-g-add></app-g-add-->\r\n<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__g_list_g_list_component__ = __webpack_require__("./src/app/g-list/g-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__g_list_service__ = __webpack_require__("./src/app/g-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__g_add_g_add_component__ = __webpack_require__("./src/app/g-add/g-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__g_update_g_update_component__ = __webpack_require__("./src/app/g-update/g-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_service__ = __webpack_require__("./src/app/helpers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__frormat_service__ = __webpack_require__("./src/app/frormat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__item_card_item_card_component__ = __webpack_require__("./src/app/item-card/item-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__card_buttons_card_buttons_component__ = __webpack_require__("./src/app/card-buttons/card-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__recomended_items_recomended_items_component__ = __webpack_require__("./src/app/recomended-items/recomended-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__test_test_component__ = __webpack_require__("./src/app/test/test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { GEditComponent } from './g-edit/g-edit.component';
//materials








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__g_list_g_list_component__["a" /* GListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__g_add_g_add_component__["a" /* GAddComponent */],
                __WEBPACK_IMPORTED_MODULE_8__g_update_g_update_component__["a" /* GUpdateComponent */],
                // GEditComponent,
                __WEBPACK_IMPORTED_MODULE_15__item_card_item_card_component__["a" /* ItemCardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__card_buttons_card_buttons_component__["a" /* CardButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__recomended_items_recomended_items_component__["a" /* RecomendedItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__test_test_component__["a" /* TestComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* appRoutes */]),
                //matrials
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["k" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["i" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["n" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["j" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["m" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["f" /* MatDividerModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__g_list_service__["a" /* GListService */], __WEBPACK_IMPORTED_MODULE_13__helpers_service__["a" /* HelpersService */], __WEBPACK_IMPORTED_MODULE_14__frormat_service__["a" /* FormatService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__g_list_g_list_component__ = __webpack_require__("./src/app/g-list/g-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__g_add_g_add_component__ = __webpack_require__("./src/app/g-add/g-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_test_component__ = __webpack_require__("./src/app/test/test.component.ts");



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__g_list_g_list_component__["a" /* GListComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_1__g_add_g_add_component__["a" /* GAddComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__test_test_component__["a" /* TestComponent */] },
];
//export const MyRoute = RouterModule.forRoot(appRoutes) 


/***/ }),

/***/ "./src/app/card-buttons/card-buttons.component.css":
/***/ (function(module, exports) {

module.exports = ".bought{\r\n    background-color: #28ab6f;\r\n    color: white;\r\n}\r\n.needed{\r\n    background-color: #de0d0dba;\r\n}\r\n.remove{\r\n    margin-right: 15px;\r\n    color:rgb(170, 138, 138);\r\n}\r\n.MoreSection{\r\n    display: inline-block\r\n}"

/***/ }),

/***/ "./src/app/card-buttons/card-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n\r\n\r\n<button mat-button (click)='MoreButton=!MoreButton' >More</button>\r\n\r\n<div *ngIf=\"MoreButton\" class=\"MoreSection\">\r\n<!--====================Edit-->\r\n<button (click)='buttonClick=!buttonClick' mat-button>\r\n  Edit</button>\r\n\r\n<!--Edit=====================-->\r\n\r\n\r\n<!--Delete===================-->\r\n<button mat-button color=\"warn\" class=\"remove\" data-toggle=\"modal\" [attr.data-target]=\"removeIdConfirm\">\r\n  Delete</button>\r\n<!--===================Delete-->\r\n</div>\r\n\r\n\r\n<!--Updat===================-->\r\n<app-g-update [Item]='Item' [bought]=\"this.Item.moreInformations[this.Item.moreInformations.length-1].bought\"></app-g-update>\r\n<!--===================Update-->\r\n</div>\r\n\r\n<!--EditSection===-->\r\n<div *ngIf=\"buttonClick&&MoreButton\" class=\"EditSection\">\r\n    <mat-form-field class=\"spacing\">\r\n      <input [(ngModel)]='Item.name' placeholder=\"Name\" name=\"Name\" matInput>\r\n    </mat-form-field>\r\n  \r\n    <mat-checkbox class=\"spacing\" [(ngModel)]='Item.basic' placeholder=\"Timeout\" name=\"basic\">Basic</mat-checkbox>\r\n    \r\n    <!--Timeout -->\r\n    <mat-form-field class=\"spacing\" *ngIf='Item.basic&&this.Item.moreInformations[this.Item.moreInformations.length-1].bought'>\r\n        <input [(ngModel)]='timeoutDay' type=\"number\" placeholder=\"Days\" name=\"Hours\" matInput>\r\n      </mat-form-field>\r\n  \r\n    <button (click)=\"edit(Item)\" color=\"primary\" mat-raised-button>Edit Item</button>\r\n      \r\n\r\n  </div>\r\n<!--===EditSection-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" [id]=\"removeConfirmForId\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Only delete an item if it was added by mistake</h5>\r\n      </div>\r\n      <div class=\"model-body p-3\">\r\n        <p>If item was bought then click the bought button and don't delete it</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button (click)='remove(Item)' type=\"button\" class=\"btn btn-danger\">Remove</button>\r\n        <button (click)='DELETE(Item)' type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/card-buttons/card-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__g_list_service__ = __webpack_require__("./src/app/g-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_service__ = __webpack_require__("./src/app/helpers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__frormat_service__ = __webpack_require__("./src/app/frormat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardButtonsComponent = /** @class */ (function () {
    //R
    function CardButtonsComponent(GListService, formatService, helper) {
        this.GListService = GListService;
        this.formatService = formatService;
        this.helper = helper;
        //R
        this.lastmoreInformations = { bought: false, no: 1, typeOfNo: "" };
        //@Input() timeoutDay=0;
        this.NeededClicked = false;
        this.TheRandomString = this.helper.randomString();
        this.removeIdConfirm = "#" + this.TheRandomString;
        this.removeConfirmForId = this.TheRandomString;
        //R
        this.MoreButton = false;
    }
    CardButtonsComponent.prototype.ngOnInit = function () {
    };
    CardButtonsComponent.prototype.edit = function (g) {
        if (g.name == '')
            return; //if the data is empty
        this.Edit(g);
    };
    CardButtonsComponent.prototype.Edit = function (g) {
        g.timeout = this.timeoutDay * 3600 * 24 + (Date.now() / 1000);
        var lastmoreInformation = g.moreInformations[g.moreInformations.length - 1];
        var grocery = this.formatService.ToSimpleedit(g);
        // console.log(grocery);
        this.GListService.UpdateStatus(grocery, "edit");
        //this.GListService.editG(g)
        this.buttonClick = false;
    };
    //R
    CardButtonsComponent.prototype.remove = function (Item) {
        var grocery = this.formatService.Toremove(Item);
        //this.GListService.UpdateStatus(grocery,"remove");
        this.GListService.editG(grocery);
        //Close Dialog
        $(this.removeIdConfirm).modal('hide');
    };
    CardButtonsComponent.prototype.DELETE = function (Item) {
        //sendDelete
        var grocery = Item;
        this.GListService.UpdateStatus(grocery, "delete");
        //Close Dialog
        $(this.removeIdConfirm).modal('hide');
    };
    CardButtonsComponent.prototype.Bought = function (Item) {
        //Send Bought
        var grocery = this.formatService.Tobought(Item);
        console.log(grocery);
        this.GListService.UpdateStatus(grocery, "bought");
    };
    //Needed Logic
    CardButtonsComponent.prototype.Needed = function (g) {
        this.NeededClicked = !this.NeededClicked;
        this.SendNeeded(g);
    };
    CardButtonsComponent.prototype.SendNeeded = function (g) {
        g.timeout = this.timeoutDay * 3600 * 24;
        var grocery = this.formatService.Toneed(g, g.basic, g.timeout, this.lastmoreInformations);
        this.GListService.UpdateStatus(grocery, "needed");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CardButtonsComponent.prototype, "timeoutDay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CardButtonsComponent.prototype, "lastmoreInformations", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CardButtonsComponent.prototype, "Item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CardButtonsComponent.prototype, "bought", void 0);
    CardButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card-buttons',
            template: __webpack_require__("./src/app/card-buttons/card-buttons.component.html"),
            styles: [__webpack_require__("./src/app/card-buttons/card-buttons.component.css")]
        })
        //[editItem]='Item' [Item]='Item' 
        //[bought]='(Item.moreInformations[ Item.moreInformations.length-1])?.bought '
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__g_list_service__["a" /* GListService */],
            __WEBPACK_IMPORTED_MODULE_3__frormat_service__["a" /* FormatService */],
            __WEBPACK_IMPORTED_MODULE_2__helpers_service__["a" /* HelpersService */]])
    ], CardButtonsComponent);
    return CardButtonsComponent;
}()); //class



/***/ }),

/***/ "./src/app/frormat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__g_list_service__ = __webpack_require__("./src/app/g-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormatService = /** @class */ (function () {
    function FormatService(GListService) {
        this.GListService = GListService;
    }
    //     -bought =>grocery as it is just add moreinformation at the end of the array containing
    //       -[No=last ,typeOfNo=last , bought =true ] To URL/bought
    FormatService.prototype.Tobought = function (g) {
        if (g.basic) {
        }
        else {
            g.timeout = 0; //to force gussing timeout
        }
        var lastno = g.moreInformations[g.moreInformations.length - 1].no;
        var lasttype = g.moreInformations[g.moreInformations.length - 1].typeOfNo;
        var Holdmore = {
            no: lastno,
            bought: true,
            typeOfNo: lasttype,
            lifeTime: 0,
        };
        g.moreInformations.push(Holdmore);
        //to bought
        g.groceryOrBought = true;
        return g;
    };
    //-needed =>grocery as [Name=same,basic=input,timout=input(ifbasic)  ] 
    // and add moreinformation at the end of the array containing
    //-[No=nput ,typeOfNo=nput , bought =false ] To URL/needed
    FormatService.prototype.Toneed = function (g, basic, timeout, moreInformations) {
        if (timeout === void 0) { timeout = 0; }
        var lastno = moreInformations.no;
        var lasttype = moreInformations.typeOfNo;
        g.timeout = 0; //to make sure no one add a timeout to a needed item
        var HoldAddmore = {
            no: lastno,
            bought: false,
            typeOfNo: lasttype,
            lifeTime: 0,
        };
        g.moreInformations.push(HoldAddmore);
        //to needed
        g.groceryOrBought = false;
        return g;
    };
    //edit =>grocery as [Name=Input,basic=input,timout=input(ifbasic&needed show input else last or 0 if basic=false) ] and  
    //Change moreinformation at the end of the array to [No=input ,typeOfNo=input , bought=holdlast ] 
    //To URL/needed
    FormatService.prototype.ToSimpleedit = function (g) {
        /*
          var HoldLastinformation=g.moreInformations[g.moreInformations.length-1];
          g.timeout//=timeout
          
          g.moreInformations[g.moreInformations.length-1]={
            no:moreInformation.no,
            bought:HoldLastinformation.bought,
            typeOfNo:moreInformation.typeOfNo
          }
          //g.moreInformations.pop()
        /*
          var newInformation:MoreInformation={
            no:moreInformation.no,
            bought:HoldLastinformation.bought,
            typeOfNo:moreInformation.typeOfNo
          }*/
        //g.moreInformations.push(newInformation);
        console.log("---edit-----");
        console.log(g);
        console.log("---edit-----");
        return g;
    };
    //-remove => grocery as if moreinformation.count > 1 then remove last moreinformation and send edit
    // else send DELETE request
    FormatService.prototype.Toremove = function (g) {
        if (g.moreInformations.length <= 1) {
            return g;
        }
        else {
            g.moreInformations.pop();
            console.log(g);
            return g;
        }
    };
    //-add => grocery as [Name=Input,basic=inputOrfalse ,timout=input(if basic show input else 0 if basic=false) ] and  
    //Change moreinformation at the end of the array to [No=inputOr1 ,typeOfNo=inputOr"" , bought=inputOrfalse ] 
    //To URL/add
    FormatService.prototype.Toadd = function (g, name, basic, timeout, moreInformation) {
        if (basic === void 0) { basic = false; }
        if (timeout === void 0) { timeout = 0; }
        g.name = name;
        g.basic = basic;
        g.timeout = 0;
        g.moreInformations[g.moreInformations.length - 1] = {
            bought: false,
            no: moreInformation.no,
            typeOfNo: moreInformation.typeOfNo,
        };
        return g;
    };
    FormatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__g_list_service__["a" /* GListService */]])
    ], FormatService);
    return FormatService;
}()); //class



/***/ }),

/***/ "./src/app/g-add/g-add.component.css":
/***/ (function(module, exports) {

module.exports = ".spacing{\r\n  /*  margin: 0 1.5em 0;*/\r\n}\r\n.add{\r\n color: #208888;\r\n}\r\n.add-to-list{\r\n  color: #208888;\r\n}\r\n.needed{\r\n  background-color: #de0d0dba;\r\n}"

/***/ }),

/***/ "./src/app/g-add/g-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spacing\">\r\n\r\n\r\n\r\n  <button (click)='buttonClick=!buttonClick;GetNeededOnly();clean();'  mat-raised-button class=\"add\">\r\n    Add</button>\r\n<br>\r\n\r\n  <div *ngIf=\"buttonClick\" (click)=\"test(lastmoreInformations)\">\r\n    <form>\r\n\r\n      <mat-form-field class=\"spacing\">\r\n\r\n        <input [(ngModel)]='Item.name' placeholder=\"Name\" name=\"Name\" matInput >\r\n\r\n        <!-- input [(ngModel)]='Item.name' placeholder=\"Name\" name=\"Name\" matInput [matAutocomplete]=\"auto\"-->\r\n\r\n        <!--mat-autocomplete #auto=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n            {{ option }}\r\n          </mat-option>\r\n        </mat-autocomplete-->\r\n\r\n\r\n\r\n\r\n\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field class=\"spacing\">\r\n        <input [(ngModel)]='lastmoreInformations.no' placeholder=\"No.\" name=\"No\" matInput type=\"number\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"spacing\">\r\n        <!--\r\n        <mat-select placeholder=\"Select me\">\r\n          <mat-option value=\"Kg\">Kg</mat-option>\r\n        </mat-select>\r\n      <mat-hint align=\"end\">Select If there is ^</mat-hint>\r\n      -->\r\n        <input [(ngModel)]='lastmoreInformations.typeOfNo' placeholder=\"Type\" name=\"Type\" matInput type=\"text\">\r\n        \r\n      </mat-form-field>\r\n\r\n\r\n\r\n      <mat-checkbox class=\"spacing\" [(ngModel)]='Item.basic' type=\"number\" placeholder=\"Timeout\" name=\"basic\">Basic</mat-checkbox>\r\n\r\n\r\n      <!--div *ngIf='Item.basic' class=\"spacing\">\r\n        <mat-form-field>\r\n          <input [(ngModel)]='timeoutDay' placeholder=\"Days\" name=\"Days\" matInput type=\"number\">\r\n        </mat-form-field>\r\n\r\n      </div-->\r\n\r\n\r\n\r\n      <button type=\"button\" (click)=\"add(Item)\" class=\"add-to-list\" mat-raised-button *ngIf=\"!MakeitNeeded\">Add to List</button>\r\n\r\n      <button type=\"button\" (click)=\"Needed(Item)\" class=\"needed\" mat-raised-button *ngIf=\"MakeitNeeded\">\r\n        Needed</button>\r\n\r\n\r\n    </form>\r\n\r\n\r\n    <!---     Suggestions       -->\r\n    <div *ngFor=\"let item of NeededOnly\" class=\"d-inline\">\r\n      <button *ngIf=\"item.basic\" (click)=\"SelectedSuggestion(item)\" color=\"acent\" mat-button >{{item.name}}</button>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <!--ADD -->\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/g-add/g-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frormat_service__ = __webpack_require__("./src/app/frormat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__g_list_service__ = __webpack_require__("./src/app/g-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GAddComponent = /** @class */ (function () {
    function GAddComponent(GListService, formatService) {
        this.GListService = GListService;
        this.formatService = formatService;
        this.MakeitNeeded = false;
        this.Item = { name: '', moreInformations: [{ bought: false, no: 1, typeOfNo: "" }], timeout: 0 };
        this.NeededOnly = [{ name: '', moreInformations: [{ bought: false }] }];
        this.lastmoreInformations = { bought: false, no: 1, typeOfNo: "" };
    }
    GAddComponent.prototype.ngOnInit = function () {
    };
    //add method
    GAddComponent.prototype.add = function (g) {
        var _this = this;
        if (g.name == '') {
            this.GListService.snackBar.open("" + "Empty Name", "X", {
                duration: 2000,
            });
            ;
            return;
        } //if the data is empty
        this.GListService.isGroceryNameExsits(g.name).subscribe(function (res) {
            console.log(res);
            if (res) {
                _this.GListService.snackBar.open("" + "Item Name already exsits", "X", {
                    duration: 2000,
                });
                ;
                //Name exsists already
                return;
            }
            if (!res) {
                _this.postAdd(g);
            }
        });
    };
    GAddComponent.prototype.postAdd = function (g) {
        g.timeout = this.timeoutDay * 3600 * 24;
        var grocery = this.formatService.Toadd(g, g.name, g.basic, g.timeout, this.lastmoreInformations);
        this.GListService.UpdateStatus(grocery, "add");
        this.GList.push(grocery);
    };
    //Needed Logic
    GAddComponent.prototype.Needed = function (g) {
        g.timeout = this.timeoutDay * 3600 * 24;
        var grocery = this.formatService.Toneed(g, g.basic, g.timeout, this.lastmoreInformations);
        this.GListService.UpdateStatus(grocery, "needed");
        this.clean();
    };
    GAddComponent.prototype.GetNeededOnly = function () {
        this.NeededOnly = this.GListService.GetNeededOnly();
    };
    GAddComponent.prototype.SelectedSuggestion = function (g) {
        this.lastmoreInformations = g.moreInformations[g.moreInformations.length - 2]; //last needed status
        this.Item = g;
        this.MakeitNeeded = true;
    };
    GAddComponent.prototype.clean = function () {
        this.MakeitNeeded = false;
        this.Item = { name: '', moreInformations: [{ bought: false, no: 1, typeOfNo: "" }] };
    };
    //-------Helper Methods
    //----TESTING
    GAddComponent.prototype.test = function (g) {
        //console.log(g);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GAddComponent.prototype, "timeoutDay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GAddComponent.prototype, "Item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], GAddComponent.prototype, "GList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GAddComponent.prototype, "lastmoreInformations", void 0);
    GAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-g-add',
            template: __webpack_require__("./src/app/g-add/g-add.component.html"),
            styles: [__webpack_require__("./src/app/g-add/g-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__g_list_service__["a" /* GListService */], __WEBPACK_IMPORTED_MODULE_0__frormat_service__["a" /* FormatService */]])
    ], GAddComponent);
    return GAddComponent;
}()); //class

//old Code
/*
    //  autocompelete
    myControl: FormControl = new FormControl();
    
    firstElemet(inputArray)
    {
      for (let i of inputArray) {
        this.options.push(i.name)
          ;
      }
    }
    options =[];
    filteredOptions: Observable<string[]>;
    filter(val: string): string[] {
      if(!this.Item.name){
      this.firstElemet(this.optionsList);}
      return this.options.filter(option =>
        option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }
    //  autocompelete
*/
/*  ngOnInit()
//*autocompelete
 this.filteredOptions =  this.myControl.valueChanges
.pipe(
  startWith(''),
  map(val => this.filter(val))
);

*/
//autocompelete*/


/***/ }),

/***/ "./src/app/g-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BASRURL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASRURL = "http://localhost:6291/api/GroceriesApi";
var GListService = /** @class */ (function () {
    function GListService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    //View All
    GListService.prototype.getGroceries = function () {
        return this.http.get(BASRURL).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) { return response; }));
    };
    //Details
    GListService.prototype.getGroceryDetails = function (id) {
        var url = BASRURL + "/" + id;
        return this.http.get(url);
    };
    //GetNeeded Only
    GListService.prototype.GetNeededOnly = function () {
        var NeededOnly = [{ name: '', moreInformations: [{ bought: false }] }];
        var HoldNeeded = [{ name: '', moreInformations: [{ bought: false, }] }];
        this.getGroceries().subscribe(function (respnse) {
            respnse.forEach(function (item) {
                if (item.moreInformations[(item.moreInformations.length - 1)].bought)
                    HoldNeeded.push(item);
            });
        });
        HoldNeeded.shift();
        NeededOnly = HoldNeeded;
        return NeededOnly;
    };
    //Add
    GListService.prototype.addGrocery = function (item) {
        var theresponse;
        this.http.post(BASRURL, item).subscribe(function (response) { theresponse = response; });
        console.log(item);
        console.log(theresponse);
    };
    //Delete
    GListService.prototype.removeG = function (index) {
        var theresponse;
        this.http.delete(BASRURL + "/" + index).subscribe(function (response) { theresponse = response; });
    };
    //Edit
    GListService.prototype.editG = function (index) {
        var _this = this;
        var theresponse;
        this.http.put(BASRURL + "/putedit/" + index.id, index).subscribe(function (response) {
            console.log(response);
            _this.snackBar.open("" + response, "X", {
                duration: 2000,
            });
        });
        console.log('edit sent ');
        console.log(index);
        console.log("-----------");
    };
    //bought
    /*
    bought(id:number): Observable<any>{
      var theresponse;
      this.http.get<any>(BASRURL+"/bought/"+id).subscribe(
        (response) =>
        { theresponse = response}
      );
      console.log(theresponse);
    }
    */
    GListService.prototype.Bought = function (id) {
        var url = BASRURL + "/bought/" + id;
        return this.http.get(url);
    };
    //Needed
    GListService.prototype.Needed = function (id, basic) {
        var theresponse;
        this.http.get(BASRURL + "/Needed/" + id + "/" + basic).subscribe(function (response) { theresponse = response; });
        console.log(theresponse);
    };
    //Needed
    GListService.prototype.NeededPost = function (grocery) {
        var theresponse;
        this.http.post(BASRURL + "/Needed/", grocery).subscribe(function (response) { theresponse = response; });
        console.log(theresponse);
    };
    GListService.prototype.UpdateStatus = function (grocery, req) {
        var _this = this;
        console.log(grocery);
        console.log(req);
        var theresponse;
        this.http.post(BASRURL + "/request/" + req, grocery).subscribe(function (response) {
            console.log(response);
            _this.snackBar.open("" + response, "X", {
                duration: 2000,
            });
        });
    };
    GListService.prototype.isGroceryNameExsits = function (name) {
        return this.http.get(BASRURL + "/name/" + name);
    };
    GListService.prototype.GuessTimeout = function (id) {
        return this.http.get(BASRURL + "/guess/" + id);
    };
    GListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSnackBar */]])
    ], GListService);
    return GListService;
}()); //class

/****
    // View All:---GET:   api/GroceriesApi
    // Details:----GET:   api/GroceriesApi/5
    // Add:--------POST:  api/GroceriesApi
    // Edit:-------PUT:   api/GroceriesApi/5
    // Delete:-----DELETE:api/GroceriesApi/5
    // Needed:------GET :  api/Grpceries/Needed/5  /1760
    // Bought:-----GET :  api/GroceriesApi/Bought/5
    // Basic:------GET:   api/GroceriesApi/Basic/5
*/


/***/ }),

/***/ "./src/app/g-list/g-list.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n   /* margin: 15px 15px 0;*/\r\n   margin-top: 15px;\r\n}\r\n.ul{\r\n    padding: 0;\r\n}\r\n.bar{\r\n  /*  margin: 0 15px 0;*/\r\n    padding-top: 0;\r\n    height: 40px;\r\n}\r\n.ListContainer{\r\n    margin-top: 20px;\r\n    margin-bottom: 40px;\r\n}\r\n.NeededListContainer{\r\n    /*border-top: solid 2px ;\r\n    border-top-color:#333;*/\r\n    \r\n    margin-top: 40px;\r\n}\r\n.matbar{\r\n    background-color: #208888;\r\n}\r\n.matbar2{\r\n    background-color: #208888;\r\n    color: #000;\r\n}\r\n.mat-divider{\r\n    height: 20px;\r\n}"

/***/ }),

/***/ "./src/app/g-list/g-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<app-g-add [GList]=\"GList\" ></app-g-add>\r\n\r\n\r\n<div class=\"ListContainer\">\r\n\r\n\r\n\r\n  <mat-toolbar color=\"primary\" class=\"container-fluid matbar\" (click)='testLog()' >\r\n    <mat-toolbar-row>\r\n      <span>the Grocery List</span>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n\r\n\r\n  <div *ngFor=\"let Item of GList;let i = index\">\r\n    <ul class=\"ul list-unstyled list-group\"\r\n    *ngIf=\"!(Item?.moreInformations[ Item.moreInformations.length-1]?.bought) || Item?.moreInformations[ Item.moreInformations.length-1].bought==null\"\r\n    >\r\n    <app-item-card [Item]='Item'></app-item-card>\r\n    </ul>\r\n  </div>\r\n\r\n\r\n</div>\r\n</div>\r\n<!-- ==================================================================================================  -->\r\n\r\n<mat-divider class=\"mat-divider\"  ></mat-divider>\r\n\r\n<div class=\"NeededListContainer container\" *ngIf=\"NeededOnly?.length!=0\">\r\n\r\n  <mat-toolbar color=\"primary\" class=\"container-fluid matbar2\" (click)='testLog()'>\r\n    <mat-toolbar-row>\r\n      <span>the Bought List</span>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n\r\n  <div *ngFor=\"let Item of GList;let i = index\" >\r\n    <ul class=\"ul list-unstyled list-group\" \r\n    *ngIf=\"Item?.moreInformations[ Item.moreInformations.length-1]?.bought\">\r\n    \r\n    <app-item-card [Item]='Item'></app-item-card>\r\n\r\n    </ul>\r\n  </div>\r\n  <!--div *ngFor=\"let Item of NeededOnly;let i = index\" >\r\n      <ul class=\"ul list-unstyled list-group\" \r\n      *ngIf=\"Item?.moreInformations[ Item.moreInformations.length-1]?.bought\">\r\n      \r\n      <app-item-card [Item]='Item'></app-item-card>\r\n  \r\n      </ul>\r\n    </div-->\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/g-list/g-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_service__ = __webpack_require__("./src/app/helpers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__g_list_service__ = __webpack_require__("./src/app/g-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GListComponent = /** @class */ (function () {
    function GListComponent(GListService, http, helper) {
        this.GListService = GListService;
        this.http = http;
        this.helper = helper;
        this.NeededOnly = this.GListService.GetNeededOnly();
    }
    GListComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    //GET All  from Api
    GListComponent.prototype.getList = function () {
        var _this = this;
        this.GListService.getGroceries().subscribe(function (response) {
            _this.GList = response;
            /*
            this.GList.forEach(element => {
              if (element.moreInformations[element.moreInformations.length-1].bought==true) {
                this.NeededOnly.push(element)
              }
            });
            */
        });
    };
    GListComponent.prototype.SecondsToDays = function (s) {
        if (s < 3600 * 24) {
            var s = s / 3600;
            if (s < 3600) {
                return "" + Math.floor(s * 24) + " Hours";
            }
            return "" + Math.floor(s) + " Hours";
        }
        else {
            var s = s / 3600 / 24;
            return "" + Math.floor(s) + " Days";
        }
    };
    //--------------TESTING-------------//
    GListComponent.prototype.testLog = function () {
        /*
       let options: Intl.DateTimeFormatOptions = {
         day: "numeric", month: "2-digit" , year: "numeric",
         hour: "2-digit", minute: "2-digit"
       };
       let d = new Date(1523733573000)
       // console.log( d.toLocaleDateString("en-US",options) );
       console.log(this.GList[0]);
       
       this.GListService.GuessTimeout(this.GList[0].id).subscribe( (response)=>{console.log(response);
       } )
       */
    };
    GListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-g-list',
            template: __webpack_require__("./src/app/g-list/g-list.component.html"),
            styles: [__webpack_require__("./src/app/g-list/g-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__g_list_service__["a" /* GListService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__helpers_service__["a" /* HelpersService */]])
    ], GListComponent);
    return GListComponent;
}());



/***/ }),

/***/ "./src/app/g-update/g-update.component.css":
/***/ (function(module, exports) {

module.exports = ".bought{\r\n   /* background-color: #28ab6f;*/\r\n   background-color: #208888;\r\n    color: white;\r\n}\r\n.needed{\r\n    background-color: #de0d0dba;\r\n}\r\n.remove{\r\n    margin-right: 15px;\r\n    color:rgb(170, 138, 138);\r\n}\r\n.add{\r\n    margin-right: 15px;\r\n    color:rgb(170, 138, 138);\r\n}"

/***/ }),

/***/ "./src/app/g-update/g-update.component.html":
/***/ (function(module, exports) {

module.exports = "<!--button mat-button color=\"warn\" class=\"remove\" data-toggle=\"modal\" [attr.data-target]=\"removeIdConfirm\">\r\n  Delete</button-->\r\n\r\n<button *ngIf=\"!bought\" (click)='Bought(Item);boughtClicked=!boughtClicked' mat-raised-button class=\"bought\">\r\n  Bought</button>\r\n\r\n  <div *ngIf='boughtClicked' class=\"spacing\">\r\n\r\n      <!--Bought--\r\n      <mat-form-field class=\"spacing\">\r\n        <input placeholder=\"No.\" name=\"No\" matInput type=\"number\" [(ngModel)]='lastmoreInformations.no'>\r\n      </mat-form-field>\r\n    \r\n      <mat-form-field class=\"spacing\">\r\n        <input placeholder=\"Type\" name=\"Type\" matInput type=\"text\" [(ngModel)]='lastmoreInformations.typeOfNo'>\r\n      </mat-form-field>\r\n    \r\n      <mat-form-field>\r\n        <input *ngIf='lastmoreInformations.bought' [(ngModel)]='timeoutDay' placeholder=\"Days\" name=\"Days\" matInput type=\"number\">\r\n      </mat-form-field>\r\n    \r\n      <button *ngIf=\"bought\" (click)='boughtClicked=!boughtClicked;' mat-raised-button color=\"green\" class=\"add\">add</button>\r\n      <--Bought-->\r\n      \r\n    </div>\r\n\r\n<button *ngIf=\"bought\" (click)='Needed(Item);' mat-raised-button color=\"primary\" class=\"needed\">\r\n  Needed</button>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Modal -\r\n<div class=\"modal fade\" [id]=\"removeConfirmForId\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Only delete an item if it was added by mistake</h5>\r\n      </div>\r\n      <div class=\"model-body p-3\">\r\n        <p>If item was bought then click the bought button and don't delete it</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button (click)='remove(Item)' type=\"button\" class=\"btn btn-danger\">Remove</button>\r\n        <button (click)='DELETE(Item)' type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/g-update/g-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_service__ = __webpack_require__("./src/app/helpers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__g_list_service__ = __webpack_require__("./src/app/g-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__frormat_service__ = __webpack_require__("./src/app/frormat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GUpdateComponent = /** @class */ (function () {
    function GUpdateComponent(GListService, formatService, helper) {
        this.GListService = GListService;
        this.formatService = formatService;
        this.helper = helper;
        this.lastmoreInformations = { bought: false, no: 1, typeOfNo: "" };
        this.timeoutDay = 0;
        this.boughtClicked = false;
        //Remove
        this.TheRandomString = this.helper.randomString();
        this.removeIdConfirm = "#" + this.TheRandomString;
        this.removeConfirmForId = this.TheRandomString;
    }
    GUpdateComponent.prototype.ngOnInit = function () {
        this.lastmoreInformations = this.Item.moreInformations[this.Item.moreInformations.length - 1];
    };
    GUpdateComponent.prototype.Bought = function (g) {
        //Send Bought
        g.timeout = this.timeoutDay * 3600 * 24;
        var grocery = this.formatService.Tobought(g);
        console.log(grocery);
        this.GListService.UpdateStatus(grocery, "bought");
    };
    //Needed Logic
    GUpdateComponent.prototype.Needed = function (g) {
        this.boughtClicked = !this.boughtClicked;
        this.SendNeeded(g);
    };
    GUpdateComponent.prototype.SendNeeded = function (g) {
        var grocery = this.formatService.Toneed(g, g.basic, g.timeout, this.lastmoreInformations);
        this.GListService.UpdateStatus(grocery, "needed");
    };
    //Remove
    GUpdateComponent.prototype.remove = function (Item) {
        var grocery = this.formatService.Toremove(Item);
        this.GListService.UpdateStatus(grocery, "remove");
        //Close Dialog
        $(this.removeIdConfirm).modal('hide');
    };
    GUpdateComponent.prototype.DELETE = function (Item) {
        //sendDelete
        var grocery = Item;
        this.GListService.UpdateStatus(grocery, "delete");
        //Close Dialog
        $(this.removeIdConfirm).modal('hide');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GUpdateComponent.prototype, "lastmoreInformations", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GUpdateComponent.prototype, "timeoutDay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GUpdateComponent.prototype, "Item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], GUpdateComponent.prototype, "bought", void 0);
    GUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-g-update',
            template: __webpack_require__("./src/app/g-update/g-update.component.html"),
            styles: [__webpack_require__("./src/app/g-update/g-update.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__g_list_service__["a" /* GListService */], __WEBPACK_IMPORTED_MODULE_3__frormat_service__["a" /* FormatService */], __WEBPACK_IMPORTED_MODULE_0__helpers_service__["a" /* HelpersService */]])
    ], GUpdateComponent);
    return GUpdateComponent;
}());



/***/ }),

/***/ "./src/app/helpers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpersService = /** @class */ (function () {
    function HelpersService() {
    }
    //->Remove
    //Random String Generator
    HelpersService.prototype.randomString = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    //->list
    HelpersService.prototype.PersentageTimeout = function (timeout) {
        if (timeout <= 0)
            return 0;
        var persentage = (Date.now() / 1000) / timeout;
        return persentage;
    };
    //======General
    HelpersService.prototype.formatDate = function (seconds) {
        var d = new Date(seconds * 1000);
        var dayOfweek;
        if (d.getDay() == 0) {
            dayOfweek = "Sunday";
        }
        if (d.getDay() == 1) {
            dayOfweek = "Monday";
        }
        if (d.getDay() == 2) {
            dayOfweek = "Tuesday";
        }
        if (d.getDay() == 3) {
            dayOfweek = "Wednesday";
        }
        if (d.getDay() == 4) {
            dayOfweek = "Thursday";
        }
        if (d.getDay() == 5) {
            dayOfweek = "Friday";
        }
        if (d.getDay() == 6) {
            dayOfweek = "Saturday";
        }
        var Month;
        if (d.getMonth() == 0) {
            Month = "January";
        }
        if (d.getMonth() == 1) {
            Month = "February ";
        }
        if (d.getMonth() == 2) {
            Month = "March";
        }
        if (d.getMonth() == 3) {
            Month = "April";
        }
        if (d.getMonth() == 4) {
            Month = "May";
        }
        if (d.getMonth() == 5) {
            Month = "June";
        }
        if (d.getMonth() == 6) {
            Month = "July";
        }
        if (d.getMonth() == 7) {
            Month = "August";
        }
        if (d.getMonth() == 8) {
            Month = "September";
        }
        if (d.getMonth() == 9) {
            Month = "October";
        }
        if (d.getMonth() == 10) {
            Month = "November";
        }
        if (d.getMonth() == 11) {
            Month = "December";
        }
        var day = (d.getDate() + 1);
        var myDate = dayOfweek + ", " + Month + " " + day;
        return myDate;
    };
    //Less Usefull
    HelpersService.prototype.SecondsToDate = function (inseconds) {
        var days = Math.floor(inseconds / (60 * 60 * 24));
        var hours = Math.floor((inseconds % (60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((inseconds % (60 * 60)) / (60));
        var seconds = Math.floor((inseconds % (60)));
        return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    };
    HelpersService.prototype.SecondsToDaysandHours = function (inseconds) {
        var days = Math.floor(inseconds / (60 * 60 * 24));
        var hours = Math.floor((inseconds % (60 * 60 * 24)) / (60 * 60));
        return days + "d " + hours + "h ";
    };
    HelpersService.prototype.SecondsToString = function (inseconds) {
        var days = Math.floor(inseconds / (60 * 60 * 24));
        var hours = Math.floor((inseconds % (60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((inseconds % (60 * 60)) / (60));
        var seconds = Math.floor((inseconds % (60)));
        return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    };
    HelpersService.prototype.DaysToSeconds = function (D) {
        return D * 3600 * 24;
    };
    HelpersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HelpersService);
    return HelpersService;
}()); //class



/***/ }),

/***/ "./src/app/item-card/item-card.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n    color: black;\r\n    background-color: white;\r\n}\r\n\r\n.card-subtitle{\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/item-card/item-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n\r\n  <li class=\"row\">\r\n\r\n    <mat-card-header class=\"col-sm-auto mr-auto\">\r\n      <mat-card-title>\r\n        <h3 (click)=\"GetDetails(Item.id)\">{{Item.name}}</h3>\r\n      </mat-card-title>\r\n\r\n      <mat-card-subtitle *ngIf=\"!lastmore.bought\" class=\"card-subtitle\">\r\n          {{lastmore.no}} {{lastmore.typeOfNo}}\r\n      </mat-card-subtitle>\r\n\r\n      <mat-card-subtitle *ngIf=\"lastmore.bought\" class=\"card-subtitle\">\r\n            Usually every {{ SecondsToDays(avrageTimeout) }}\r\n          </mat-card-subtitle>\r\n\r\n    </mat-card-header>\r\n\r\n    <mat-card-content class=\"type1\">\r\n\r\n\r\n    </mat-card-content>\r\n\r\n    <div class=\"col-sm-auto\">\r\n      <app-card-buttons [Item]='Item' [bought]='(Item.moreInformations[ Item.moreInformations.length-1])?.bought '>\r\n      </app-card-buttons>\r\n\r\n    </div>\r\n  </li>\r\n\r\n</mat-card>\r\n\r\n\r\n\r\n<!--\r\n<mat-progress-bar mode=\"determinate\" [value]='Persentage(Item.currentCount,Item.timeout)' class=\"bar\" *ngIf='Item.basic'></mat-progress-bar>\r\n-->\r\n\r\n\r\n\r\n<!--\r\n      <app-g-edit [editItem]='Item'></app-g-edit>\r\n\r\n      <app-g-update [Item]='Item' [bought]='(Item.moreInformations[ Item.moreInformations.length-1])?.bought '>\r\n      \r\n\r\n      </app-g-update>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/item-card/item-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_service__ = __webpack_require__("./src/app/helpers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__g_list_service__ = __webpack_require__("./src/app/g-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemCardComponent = /** @class */ (function () {
    function ItemCardComponent(GListService, helper) {
        this.GListService = GListService;
        this.helper = helper;
        this.lastmore = {
            bought: false
        };
    }
    ItemCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GListService.GuessTimeout(this.Item.id).subscribe(function (response) {
            _this.avrageTimeout = response;
            _this.GEtLastMore();
        });
    };
    //Get Details
    ItemCardComponent.prototype.GetDetails = function (index) {
        this.GListService.getGroceryDetails(index).subscribe(function (res) { console.log(res); });
    };
    //--------------Helper Methods
    //---HELPERS
    ItemCardComponent.prototype.ToDate = function (s) {
        return this.helper.formatDate(s);
    };
    ItemCardComponent.prototype.SecondsToDays = function (s) {
        if (s < 3600 * 24) {
            if (s < 3600) {
                if (s < 60) {
                    return "" + Math.floor(s) + " secounds !";
                }
                return "" + Math.floor(s / 60) + " Minutes";
            }
            return "" + Math.floor(s / (60 * 60)) + " Hours";
        }
        return "" + Math.floor(s / (3600 * 24)) + " Days";
    };
    ItemCardComponent.prototype.PersentageTimeout = function (timeout) {
        return this.helper.PersentageTimeout(timeout);
    };
    ItemCardComponent.prototype.GEtLastMore = function () {
        this.lastmore = this.Item.moreInformations[this.Item.moreInformations.length - 1];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemCardComponent.prototype, "Item", void 0);
    ItemCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-card',
            template: __webpack_require__("./src/app/item-card/item-card.component.html"),
            styles: [__webpack_require__("./src/app/item-card/item-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__g_list_service__["a" /* GListService */], __WEBPACK_IMPORTED_MODULE_1__helpers_service__["a" /* HelpersService */]])
    ], ItemCardComponent);
    return ItemCardComponent;
}());



/***/ }),

/***/ "./src/app/recomended-items/recomended-items.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recomended-items/recomended-items.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  recomended-items works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/recomended-items/recomended-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecomendedItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecomendedItemsComponent = /** @class */ (function () {
    function RecomendedItemsComponent() {
    }
    RecomendedItemsComponent.prototype.ngOnInit = function () {
    };
    RecomendedItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recomended-items',
            template: __webpack_require__("./src/app/recomended-items/recomended-items.component.html"),
            styles: [__webpack_require__("./src/app/recomended-items/recomended-items.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecomendedItemsComponent);
    return RecomendedItemsComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("./src/app/test/test.component.html"),
            styles: [__webpack_require__("./src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}()); //classngh

/*
// This function runs when subscribe() is called
function sequenceSubscriber(observer) {
  // synchronously deliver 1, 2, and 3, then complete
 
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  
  


  // unsubscribe function doesn't need to do anything in this
  // because values are delivered synchronously
  return {unsubscribe() {}};
}

// Create a new Observable that will deliver the above sequence
const sequence = new Observable(sequenceSubscriber);

// execute the Observable and print the result of each notification
sequence.subscribe({
  next(number) {console.log(number)},
  complete() { console.log('Finished sequence'); }
});

// Logs:
// 1
// 2
// 3
// Finished sequence
// To "share" the observable tick$ with two observers,
// observer1 and observer2, we can pipe all notifications
// through a Subject, like so

/*

function fromEvent(target, eventName) {
  return new Observable((observer) => {
    const handler = (e) => observer.next(e);

    // Add the event handler to the target
    target.addEventListener(eventName, handler);

    return () => {
      // Detach the event handler from the target
      target.removeEventListener(eventName, handler);
    };
  });
}

const ESC_KEY = 27;
const nameInput = document.getElementById('name') as HTMLInputElement;

const subscription = fromEvent(nameInput, 'keydown')
  .subscribe((e: KeyboardEvent) => {
    if (e.keyCode === ESC_KEY) {
      nameInput.value = '';
    }
  });*/ 


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);




//Hammerjs to apply matrials

if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map