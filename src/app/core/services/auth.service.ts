import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private af: AngularFireAuth) { }

  createUser(email: string, passsword: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, passsword);
  }
}
