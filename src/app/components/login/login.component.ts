import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OauthService } from '../../shared/services/oauth.service';
import { Globals } from '../../shared/globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private globals: Globals,
    private oauth: OauthService
  ) { }

  ngOnInit() {
    const code: string = this.route.snapshot.queryParams['code'];
    if (code) {
      this.globals.code = code;
      this.requestForToken(code);
    }
  }

  login() {
    this.oauth.oauth();
  }

  requestForToken(code: string) {
    console.log('code: ' + code);
    this.oauth.requestForToken(code).subscribe();
  }
}
