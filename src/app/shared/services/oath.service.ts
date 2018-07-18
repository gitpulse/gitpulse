import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../lib/services/base.service';
import { environment } from '../../../environments/environment';
import { map } from '../../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OathService extends BaseService {

  readonly githubClientId = environment.githubClientId;
  readonly githubClientSecret = environment.githubClientSecret;
  readonly apiEndPoint = environment.apiEndpoint;

  requestForOAth(): Observable<any> {
    const url = 'https://github.com/login/oauth/authorize';
    const params = {
      client_id: this.githubClientId,
      scope: 'user:email'
    }
    return this.getRequest(url, params).pipe(
      map((json) => {
        console.log(json);
      })
    );
  }
}
