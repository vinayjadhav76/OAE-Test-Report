import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  reportUrl = "http://localhost:3000/report";

  constructor(private _http: HttpClient) { }

  addReport(data) {
    return this._http.post(this.reportUrl, data)
  }

  listReport() {
    return this._http.get("http://localhost:3000/report?satus=Pass")
  }

  listRefferReport() {
    return this._http.get("http://localhost:3000/report?satus=Reffer")
  }

  getReport(id) {
    return this._http.get(this.reportUrl + "/" + id)
  }
}
