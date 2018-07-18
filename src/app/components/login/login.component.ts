import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OauthService } from '../../shared/services/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private oauth: OauthService
  ) { }

  ngOnInit() {
    const code: string = this.route.snapshot.queryParams['code'];
    if (code) {
      this.requestForToken(code);
    }
  }

  login() {
    this.oauth.oauth();
  }

  requestForToken(code: string) {
    this.oauth.requestForToken(code).subscribe((res) => {
      sessionStorage.setItem('access_token', res.token);
      console.log(res.token);
      this.router.navigate(['/home']);
    });
  }
}
