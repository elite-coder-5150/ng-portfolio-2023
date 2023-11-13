import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'ng-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.scss']
})
export class RelationshipComponent implements OnInit {
  private url: string = '';
  ReqRes: string = '';
  ngOnInit(): void {}
  
  sendRequest(): void {
    const userId = '';

    axios.post(`${this.url}/request`, { userId })
      .then((response) => {
        this.ReqRes = response.data;
      })
      .catch((error) => {
        this.ReqRes = `Error: ${error.message}`;
      });
  }
  
  getPendingRequests(): void {
    axios.post(`${this.url}/is-pending`, {})
      .then((response) => {
        this.ReqRes = response.data;
      })
      .catch((error) => {
        this.ReqRes = `Error: ${error.message}`;
      });
  }
  
  //? grab the request id from the form.
  acceptRequest(): void {
    const reqId = '';

    axios.post(`${this.url}/api/requests/${reqId}`)
      .then((response) => {
        this.ReqRes = response.data;
      }).catch(err => {
        this.ReqRes = `Error: ${err.message}`;
      })
  }

  cancelRequest(): void {
    const reqId = '';
    axios.post(`${this.url}/api/request/cancel`, { reqId })
      .then((response) => {
        this.ReqRes = response.data;
      }).catch((err) => {
        this.ReqRes = `Error: ${err.message}`;
      })
  }
}
