import { Injectable } from '@angular/core';
import { BaseService } from '../lib/services/base.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OauthService extends BaseService {
  readonly githubClientId = environment.githubClientId;
  readonly githubClientSecret = environment.githubClientSecret;
  readonly apiEndPoint = environment.apiEndpoint;

  oauth(): void {
    // OAuth url: https://github.com/login/oauth/authorize?client_id={ githubClientId }
    const url = 'https://github.com/login/oauth/authorize?client_id=' + this.githubClientId;
    window.location.href = url;
  }
}
