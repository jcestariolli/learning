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
var core_1 = require("@angular/core");
var todo_service_1 = require("./todo.service");
var AppComponent = (function () {
    function AppComponent(todoService) {
        this.todoService = todoService;
    }
    AppComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos().then(function (todos) { return _this.todos = todos; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'jeka-app',
        template: "<h1>NodeTodo</h1>\n  <ul>\n  <li *ngFor = \"let todoX of todos\">\n  {{todoX.todo}} - {{todoX.isDone}}\n  </li>\n  </ul>",
        providers: [todo_service_1.TodoSevice]
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoSevice])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map