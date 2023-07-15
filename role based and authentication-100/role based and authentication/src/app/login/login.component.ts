import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router) {
      sessionStorage.clear();

  }
  userdata: any;

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });


  proceedlogin()  {
    if (this.loginform.valid) {
      this.service.GetUserbyCode(this.loginform.value.email).subscribe((item: any) => {
        let user: any  = [...item].filter(usr => usr.email == this.loginform.value.email)
        this.userdata = user[0];
        console.log(this.userdata, this.userdata.password, this.loginform.value.password);
        if (this.userdata.password === this.loginform.value.password) {
          if (this.userdata.isactive) {
            sessionStorage.setItem('email',this.userdata.email);
            sessionStorage.setItem('role',this.userdata.role);
            this.router.navigate(['/dashboard']);
          } else {
            this.toastr.error('Please contact Admin', 'InActive User');
          }
        } else {
          this.toastr.error('Invalid credentials');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }
}




// import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr'
// import { AuthService } from '../service/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   constructor(
//     private builder: FormBuilder,
//     private toastr: ToastrService,
//     private service: AuthService,
//     private router: Router
//   ) {
//     sessionStorage.clear();
//   }

//   userdata: any;

//   loginform = this.builder.group({
//     email: this.builder.control('', Validators.required),
//     password: this.builder.control('', Validators.required)
//   });

//   proceedlogin() {
//     if (this.loginform.valid) {
//       this.service.GetUserbyCode(this.loginform.value.email).subscribe(item => {
//         this.userdata = item;
//         if (this.userdata.password === this.loginform.value.password) {
//           if (this.userdata.isactive) {
//             sessionStorage.setItem('email', this.userdata.email);
//             // sessionStorage.setItem('role', this.userdata.role);
//             this.router.navigate(['/dashboard']); // Navigate to dashboard
//           } else {
//             this.toastr.error('Please contact Admin', 'InActive User');
//           }
//         } else {
//           this.toastr.error('Invalid credentials');
//         }
//       });
//     } else {
//       this.toastr.warning('Please enter valid data.');
//     }
//   }
// }
