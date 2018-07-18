import { Component, OnInit } from '@angular/core';
import { OauthService } from '../../shared/services/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private oauth: OauthService
  ) { }

  ngOnInit() {
  }

  login() {
    this.oauth.oauth();
  }
}
