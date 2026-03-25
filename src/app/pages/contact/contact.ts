import { ContactService } from './../../services/contact/contact';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { ISubmitEntry } from '../../models/contact/i-submit-entry';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/languages/language.service';
import { LanguageCode } from '../../models/portfolio/i-portfolio';
import { CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Seo } from '../../services/seo/seo';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, TranslatePipe, NgClass, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  contactForm!: FormGroup;
  siteKey: string = '6Ldmd2ksAAAAAF0ciNyDt7Uy0TnBBbJ-PefCpsI3';
  isSending: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  currentLanguage: LanguageCode = LanguageCode.ar;

  private contactService = inject(ContactService);
  private fb = inject(FormBuilder);
  private reCaptchaV3Service = inject(ReCaptchaV3Service);
  private languageService = inject(LanguageService);


  private route = inject(ActivatedRoute);
  private seoService = inject(Seo);

  ngOnInit(): void {
    const seo = this.route.snapshot.data['seo'];
    this.seoService.applySeo(seo);
    this.currentLanguage = this.languageService.currentLang();
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

  get marginClass(): string {
    return this.currentLanguage === LanguageCode.ar ? 'ms-2' : 'me-2';
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
          },
          error: (error) => {
            this.isSending = false;
            this.errorMessage = error.error;
            console.log('Failed to submit contact form', error);
          },
        });
      },
      { useGlobalDomain: false },
    );
  }
}
