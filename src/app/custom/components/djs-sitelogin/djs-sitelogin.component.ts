import { Component, OnInit } from '@angular/core';
import { AuthService } from '@spartacus/core';
import { LoginComponent } from '@spartacus/user/account/components';
import { UserAccountFacade } from '@spartacus/user/account/root';

@Component({
  selector: 'djs-sitelogin',
  templateUrl: './djs-sitelogin.component.html',
  styleUrls: ['./djs-sitelogin.component.scss']
})

// extends LoginComponent
export class DjsSiteloginComponent  implements OnInit {

  isLoggedIn$ = this.authService.isUserLoggedIn();
  user$ = this.userAccount.get();

  constructor(
    private authService: AuthService,
    private userAccount: UserAccountFacade
  ) {
  }


  ngOnInit(): void {
    this.user$?.subscribe(user => {
      console.log('User:', user);
    });
  }

  logout(): void {
    console.log('Custom logout');
    this.authService.logout();
  }

}
