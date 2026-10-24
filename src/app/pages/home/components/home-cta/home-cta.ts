import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../../shared/services/content.service';
import { Contact, ContactInfo } from '../../../../core/models/contact.model';
import { Service } from '../../../../core/models/service.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home-cta',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-cta.html',
  styleUrl: './home-cta.scss',
})
export class HomeCta implements OnInit {

  private content = inject(ContentService);

  data!: Contact;

  contactInfo!: ContactInfo;

  contactForm = {
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    message: ''
  };

  service!: Service;

  servicesList: any = [];

  private http = inject(HttpClient);

  isSubmitting = false;
  submitSuccess = '';
  submitError = '';

  ngOnInit(): void {
    this.data = this.content.getContact();
    this.contactInfo = this.data?.contactInfo;
    this.service = this.content.getService();
    this.servicesList = this.service?.services?.map(e => e.shortTitle);
  }
  
  submit(): void {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = '';
    this.submitError = '';

    this.http
      .post<{ message: string }>(
        '/.netlify/functions/contact',
        this.contactForm
      )
      .subscribe({
        next: (response) => {
          this.submitSuccess = response.message;
          this.contactForm = {
            name: '',
            company: '',
            email: '',
            phone: '',
            country: '',
            service: '',
            message: ''
          };

          this.isSubmitting = false;
          alert(this.submitSuccess);
        },
        error: (error) => {
          this.submitError =
            error.error?.message ||
            'Unable to send your enquiry. Please try again later.';

          this.isSubmitting = false;
          alert(this.submitError);
        }
      });
  }

}