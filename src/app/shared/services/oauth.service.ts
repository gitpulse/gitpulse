import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { BaseService } from '../lib/services/base.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OauthService extends BaseService {
  readonly githubClientId = environment.githubClientId;
  readonly apiEndPoint = environment.apiEndpoint;

  oauth(): void {
    const url = 'https://github.com/login/oauth/authorize?client_id=' + this.githubClientId;
    window.location.href = url;
  }

  requestForToken(code: string): Observable<any> {
    const url = environment.gateKeeperEndpoint;
    // GET gateKeeperEndpoint/{code}
    return this.getRequest(url + code);
  }
}
