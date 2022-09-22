import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Audit, DeleteAuditResponse, GetAuditResponse, GetAuditsResponse, UpdateAuditResponse } from '../interfaces/audits';

@Injectable({
  providedIn: 'root'
})
export class AuditsService {

  constructor(private http: HttpClient ) { }

  // get api from environment
  private api: string = environment.api;

  getAudits() {
    const endPoint = `${this.api}/audits`;
    // list all audits request and show only data response 
    return this.http.get<GetAuditsResponse>(endPoint).pipe(
      map( resp => resp.data ),
    );
  }

  getAuditById( id: string ) {
    const endPoint = `${this.api}/audits/${id}`;
    // list one audit request 
    return this.http.get<GetAuditResponse>(endPoint).pipe(
      map( resp => resp.data ),
    );
  }

  updateAudit( body: Audit ) {
    const endPoint = `${this.api}/audits/${body._id}`;
    // update audit request
    return this.http.put<UpdateAuditResponse>(endPoint, body);
  }

  deleteAudit( id: string ) {
    const endPoint = `${this.api}/audits/${id}`;
    // delete audit request 
    return this.http.delete<DeleteAuditResponse>(endPoint);
  }

}
