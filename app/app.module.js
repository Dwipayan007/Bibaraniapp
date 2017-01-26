"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var homeComponent_1 = require('../app/Components/homeComponent');
var aboutComponent_1 = require('../app/Components/aboutComponent');
var loginComponent_1 = require('../app/Components/loginComponent');
var pagenotfoundComponent_1 = require('../app/Components/pagenotfoundComponent');
var homeService_1 = require('../app/Services/homeService');
var carosuelComponent_1 = require('../app/Components/carosuelComponent');
var routeComponent_1 = require('../app/Components/routeComponent');
var appRoute = [
    { path: 'home', component: homeComponent_1.homeComponent },
    { path: 'about', component: aboutComponent_1.aboutComponent },
    { path: 'login', component: loginComponent_1.loginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pagenotfoundComponent_1.pagenotfoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoute),
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                homeComponent_1.homeComponent,
                aboutComponent_1.aboutComponent,
                loginComponent_1.loginComponent,
                pagenotfoundComponent_1.pagenotfoundComponent,
                carosuelComponent_1.carosuelComponent,
                routeComponent_1.routeComponent
            ],
            providers: [
                homeService_1.homeService
            ],
            bootstrap: [app_component_1.AppComponent, routeComponent_1.routeComponent, carosuelComponent_1.carosuelComponent, homeComponent_1.homeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
;
//# sourceMappingURL=app.module.js.map