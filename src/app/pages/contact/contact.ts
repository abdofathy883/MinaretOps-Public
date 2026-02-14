import { ContactService } from './../../services/contact/contact';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit{
  contactForm!: FormGroup;
  siteKey: string = '';
  isSending: boolean = false;
  constructor(private contactService: ContactService, private fb: FormBuilder, private reCaptchaV3Service: ReCaptchaV3Service){}

  
  ngOnInit(): void {
    this.initializeForm();
    this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
   console.log('This is your token: ', token);
 }, {
     useGlobalDomain: false
 });
  }

  initializeForm(){
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: [''],
      phoneNumber: ['', Validators.required],
      message: [''],
      website: []
    })
  }
  onSubmit(){

  }
}
