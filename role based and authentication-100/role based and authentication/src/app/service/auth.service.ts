import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:3000/user';
  RegisterUser(registerData: any) {
    console.log(registerData);
    
    return this.http.post(this.apiurl, registerData);
  }
  
  GetUserbyCode(email:any){
    console.log(email);
    return this.http.get(this.apiurl)
  }
  Getall(){
    return this.http.get(this.apiurl);
  }
  updateuser(email:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+email,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  isloggedin(){
    return sessionStorage.getItem('email')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  GetAllCustomer(){
    return this.http.get('http://localhost:3000/customer');
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }
}
