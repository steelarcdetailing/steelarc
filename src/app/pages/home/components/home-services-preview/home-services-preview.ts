import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service, Services } from '../../../../core/models/service.model';
import { ContentService } from '../../../../shared/services/content.service';

@Component({
  selector: 'app-home-services-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-services-preview.html',
  styleUrl: './home-services-preview.scss'
})
export class HomeServicesPreview implements OnInit {

  private content = inject(ContentService);

  selectedService = 0;

  data!: Service;

  services: Services[] = [];

  ngOnInit(): void {
    this.data = this.content.getService();
    this.services = this.data?.services;
  }

  select(index: number): void {

    this.selectedService = index;

  }

}