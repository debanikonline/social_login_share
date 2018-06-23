import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular2-social-login';
import { AuthServService } from '../auth-serv.service';
import Swal from 'sweetalert2';
declare var jquery:any;
declare var $ :any;
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {
  user:any;
  sub:any;
  public thisurl;
  public facebookbuttontext;
  public googlebuttontext;
  public loginname;
  public isLogged=false;
  constructor(public _auth:AuthService,public service:AuthServService,public spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.thisurl = window.location.href; //window.location.href
    console.log(this.thisurl);
    if(localStorage.getItem("isLogged")==="true")
    {
      this.facebookbuttontext="Logged In";
      this.googlebuttontext="Logged In";
      this.loginname=localStorage.getItem('name');
      this.isLogged=true;
    }
    else
    {
      this.facebookbuttontext="Login with Facebook";
      this.googlebuttontext="Login with Google";
      this.loginname="";
    }
  }
  
  facebookloginfunction()
  {
    this.sub=this._auth.login("facebook").subscribe((data)=>{
      
      this.user=data;
      if(this.user.email)
      {
        $(".logout").removeClass("hidden");
        console.log("loggedIn via facebook");
        localStorage.setItem("isLogged","true");
        localStorage.setItem("name",this.user.name);
        this.facebookbuttontext="Logged In";
        console.log(this.user);
        this.isLogged=true;
        this.loginname=localStorage.getItem('name');
        Swal({
          title: 'Success',
          text: 'Your Logged in via Facebook',
          type: 'success',
          timer: 3000
        })
      }
     
     
    })
  }
  googleloginfunction()
  {
    this.sub=this._auth.login("google").subscribe((data)=>{
      this.user=data;
      if(this.user.email)
      {
        $(".logout").removeClass("hidden");
        console.log("loggedIn via google");
        localStorage.setItem("isLogged","true");
        localStorage.setItem("name",this.user.name);
        this.googlebuttontext="Logged In";
        console.log(this.user);
        this.isLogged=true;
        this.loginname=localStorage.getItem('name');
        Swal({
          title: 'Success',
          text: 'Your Logged in via Google',
          type: 'success',
          timer: 3000
        })
      }
      
    })
  }
  logout()
  {
    $(".logout").addClass("hidden");
    this.facebookbuttontext="Login with Facebook";
    this.googlebuttontext="Login with Google";
    this.isLogged=false;
    localStorage.clear();
    this.loginname="";
    Swal({
      title: 'warning',
      text: 'Your have been logged-out',
      type: 'warning',
      timer: 3000
    })
  }

  sendemail(data)
  {
    this.spinner.show();
    this.service.sendemail(data).subscribe((res:any)=>{

      console.log(res.status,"response from API");
      if(res.status==true)
      {
        this.spinner.hide();
        $('.modal').hide();
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        Swal({
          title: 'Success',
          text: 'The Link to this product is sent',
          type: 'success',
          timer: 3000
        })
      }
      else
      {
        this.spinner.hide();
        $('.modal').hide();
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        Swal({
          title: 'Error',
          text: 'Something Went Wrong, Try Later',
          type: 'error',
          timer: 3000
        })
      }

    })
    console.log(data,"in TS file");
  }

}
