import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {Usuario} from '../../clases/usuario'; 
import { LoginService } from 'src/app/servicios/login.service';

//import { AlertService, AuthenticationService } from '../_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    datacallback: string;

    constructor(
        private formBuilder: FormBuilder,
        //private route: ActivatedRoute,
        private router: Router,
        private _login: LoginService
        //private authenticationService: AuthenticationService,
        //private alertService: AlertService
        ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.loading = true;
        
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
       
        let datosLogin = new Usuario(this.f.username.value, this.f.password.value);

        this._login.ServiceLogin(datosLogin).subscribe( data =>{
            
            localStorage.setItem('usuario',data._body);
            console.log(data._body);
            //localStorage.setItem('token', data._body.token);
            
            this.router.navigate(['/Side']); 
           



        })

        /*
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        */
      }

    TestAdmin(){
        this.loginForm = this.formBuilder.group({
            username: ['Admin', Validators.required],
            password: ['admin', Validators.required]
        });
    }

   
    TestMozo(){
        this.loginForm = this.formBuilder.group({
            username: ['Mozo', Validators.required],
            password: ['1234', Validators.required]
        });
    }

    TestBirra(){
        this.loginForm = this.formBuilder.group({
            username: ['BirraMan', Validators.required],
            password: ['1234', Validators.required]
        });
    }
    
    TestChef(){
        this.loginForm = this.formBuilder.group({
            username: ['Cheff', Validators.required],
            password: ['1234', Validators.required]
        });
    }

    TestBarTender(){
        this.loginForm = this.formBuilder.group({
            username: ['BarTender', Validators.required],
            password: ['1234', Validators.required]
        });
    }



    TestCandyBar(){
        this.loginForm = this.formBuilder.group({
            username: ['CandyMan', Validators.required],
            password: ['1234', Validators.required]
        });
    }




    Registrar(){
        this.router.navigateByUrl("/Registro");

    }


}
