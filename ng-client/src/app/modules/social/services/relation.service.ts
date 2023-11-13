import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class RelationService {
    private url: string = 'http://localhost/api';

    constructor() {}

    //? router.post('/api/request', request);
    sendRequest(data: any): Observable<any> {
        const url = `${this.url}/request`;
        
        return new Observable<any>(observer => {
            axios.get(url, data)
                .then(response => {
                    observer.next(response.data);
                    observer.complete();
                })
                .catch(err => {
                    observer.error(err);
                });
        });
    }

    //? router.post('/already-friends, alreadyFriends);
    alreadyFriends(data: any): Observable<any> {
        const url = `${this.url}/already-friends`;

        return new Observable<any>(observer => {
            axios.get(url, data)
                .then(response => {
                    observer.next(response.data);
                    observer.complete();
                })
                .catch(err => {
                    observer.error(err);
                });
        });
    }

    //? router.post('/already-friends, alreadyFriends);
    isPending(data: any): Observable<any> {
        const url = `${this.url}/is-pending';`;

        return new Observable<any>(observer => {
            axios.get(url, data)
                .then(response => {
                    observer.next(response.data);
                    observer.complete();
                })
                .catch(err => {
                    observer.error(err);
                });
        });
    }
}
