import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Catalog } from './catalog';

@Injectable()
export class CatalogService {
    //json server response url
    catalogUrl = "http://localhost:3000/catalog";
    //constructor for http
    constructor(private http:Http) { 
    }
    //Fetch all catalog
    getAllCatalog(): Observable<Catalog[]> {
        return this.http.get(this.catalogUrl)
	   .map(this.extractData)
	   .catch(this.handleError);

    }
	
	//Create catalog
    createCatalog(catalog: Catalog):Observable<number> {
	let catalogHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: catalogHeaders });
        return this.http.post(this.catalogUrl, catalog, options)
               .map(success => success.status)
               .catch(this.handleError);
    }	
	
    	
    private extractData(res: Response) {
	let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.status);
    }
} 