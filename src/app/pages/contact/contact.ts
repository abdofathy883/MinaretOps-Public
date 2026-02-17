import { ContactService } from './../../services/contact/contact';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { ISubmitEntry } from '../../models/contact/i-submit-entry';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  contactForm!: FormGroup;
  siteKey: string = '6Ldmd2ksAAAAAF0ciNyDt7Uy0TnBBbJ-PefCpsI3';
  isSending: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  constructor(
    private contactService: ContactService,
    private fb: FormBuilder,
    private reCaptchaV3Service: ReCaptchaV3Service,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: [''],
      phoneNumber: ['', Validators.required],
      message: [''],
      website: [],
    });
  }
  onSubmit() {
    if (this.contactForm.invalid || this.isSending) return;

    this.isSending = true;
    this.reCaptchaV3Service.execute(
      this.siteKey,
      'contact_submit',
      (token) => {
        const entry: ISubmitEntry = {
          fullName: this.contactForm.get('fullName')?.value ?? '',
          phoneNumber: this.contactForm.get('phoneNumber')?.value ?? '',
          email: this.contactForm.get('email')?.value ?? '',
          message: this.contactForm.get('message')?.value ?? '',
          website: this.contactForm.get('website')?.value || undefined,
          recaptchaToken: token,
        };
        this.contactService.submit(entry).subscribe({
          next: () => {
            this.contactForm.reset();
            this.isSending = false;
            this.successMessage = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.';
            // optional: show success message
          },
          error: (error) => {
            this.isSending = false;
            // optional: show error message
            this.errorMessage = error.error;
            console.log('Failed to submit contact form', error);
          },
        });
      },
      { useGlobalDomain: false },
    );
  }
}
