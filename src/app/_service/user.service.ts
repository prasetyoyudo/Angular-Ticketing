import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment"
// import {}
// import { CartListModel } from "../_model/cart.models";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,) {}

  getUserListService() {
    return this.http.get(`${environment.BASE_URL_API}/user`)
  }

  postUserService(body) {
    return this.http.post(`${environment.BASE_URL_API}/user`, body)
  }

  getUserByIdService(id) {
    return this.http.get(`${environment.BASE_URL_API}/user/${id}`)
  }
}
