import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import LoginResponseBody = JamFactoryApi.LoginResponseBody;
import StatusResponseBody = JamFactoryApi.StatusResponseBody;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpOptions = {
    withCredentials: true
  };
  private apiUrl = environment.JAMFACTORY_API_URL + '/auth';

  constructor(private http: HttpClient) {
  }

  getCurrent(): Observable<StatusResponseBody> {
    return this.http.get<StatusResponseBody>(this.apiUrl + '/current', this.httpOptions);
  }

  getLogout(): void {
    this.http.get(this.apiUrl + '/logout', this.httpOptions).subscribe();
  }

  getLogin(): Observable<LoginResponseBody> {
    return this.http.get<LoginResponseBody>(this.apiUrl + '/login', this.httpOptions);
  }
}
