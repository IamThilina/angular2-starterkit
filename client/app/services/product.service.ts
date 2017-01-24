/**
 * Created by thilina on 1/2/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductManagementService {

    constructor(private http: Http) { }

    private adminAPIurl = 'api/admin';
    private commonAPIurl = 'api/common';
    private operatorAPIurl = 'api/operator'

    addProduct(product: FormData): Promise<any> {

        const headers = new Headers({'Content-Type': 'application/json'});
        const url = `${this.adminAPIurl}/product/add`;
        return new Promise((resolve, reject) => {
            //noinspection TypeScriptUnresolvedFunction
            this.http
                .post(url, JSON.stringify({product: product}), {headers: headers})
                .toPromise()
                .then(response => {
                    resolve(response.json());
                },error => {
                    reject(error);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });
    }

    editProduct(product: FormData): Promise<any> {

        const headers = new Headers({'Content-Type': 'application/json'});
        const url = `${this.adminAPIurl}/product/edit`;
        return new Promise((resolve, reject) => {
            //noinspection TypeScriptUnresolvedFunction
            this.http
                .post(url, JSON.stringify({product: product}), {headers: headers})
                .toPromise()
                .then(response => {
                    resolve(response.json());
                },error => {
                    reject(error);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });
    }

    getAllProducts(): Promise<any> {

        const url = `${this.commonAPIurl}/products`;
        return new Promise((resolve, reject) => {
            //noinspection TypeScriptUnresolvedFunction
            this.http
                .get(url)
                .toPromise()
                .then(response => {
                    resolve(response.json());
                },error => {
                    reject(error);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });
    }

    //


    getFilterdTills(productFilterData: any): Promise<any> {

        const headers = new Headers({'Content-Type': 'application/json'});
        const url = `${this.operatorAPIurl}/products/data`;
        return new Promise((resolve, reject) => {
            //noinspection TypeScriptUnresolvedFunction
            this.http
                .post(url, JSON.stringify({data: productFilterData}), {headers: headers})
                .toPromise()
                .then(response => {
                    resolve(response.json());
                },error => {
                    reject(error);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });
    }

    getExpiredTills(): Promise<any> {

        const headers = new Headers({'Content-Type': 'application/json'});
        const url = `${this.operatorAPIurl}/products/tills/expired`;
        return new Promise((resolve, reject) => {
            //noinspection TypeScriptUnresolvedFunction
            this.http
                .get(url)
                .toPromise()
                .then(response => {
                    resolve(response.json());
                },error => {
                    reject(error);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });
    }
}