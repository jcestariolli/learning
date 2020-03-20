import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';

import {Todo} from './todos';

@Injectable()
export class TodoSevice {
    private headers = new Headers({'Content-Type': 'application/json'});
    private todosApiUrl = 'api/todos/test';

    constructor(private http: Http) {}
    getTodos(): Promise<Todo[]> {
        return this.http.get(this.todosApiUrl).toPromise().then(
            response => response.json() as Todo[]
        );
    }

}

