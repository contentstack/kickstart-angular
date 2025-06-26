import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentstackService } from '../../services/contentstack.service';
import ContentstackLivePreview from "@contentstack/live-preview-utils";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  page: any;
  error: string = '';

  constructor(private contentstackService: ContentstackService) { }

  getContent() {
    this.contentstackService.getEntryByUrl('page', '/').subscribe({
      next: (result) => {
        this.page = result;
      },
      error: (err) => {
        this.error = 'Error loading content. Please check your Contentstack configuration.';
        console.error('Contentstack error:', err);
      }
    });
  }

  ngOnInit() {
    ContentstackLivePreview.onEntryChange(() => {
      this.getContent()
    });
  }
}