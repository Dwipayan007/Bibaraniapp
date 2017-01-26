import {Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class homeService {
    constructor (private http: Http) {}

    //private homeUrl='../app/testData.json';
    private homeUrl='https://jsonplaceholder.typicode.com/posts';

getData():Observable<string[]>{
    return this.http.get(this.homeUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
}

findById(id: string) {
const endPoint = 'post/'+id;
return this.http.get(this.homeUrl+endPoint)
                .map(this.extractData)
                .catch(this.handleError);
}
private extractData(res: Response) {
    let body = res.json();
    return body || { };
}
private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
        console.error(errMsg);
    return Observable.throw(errMsg);
}
}