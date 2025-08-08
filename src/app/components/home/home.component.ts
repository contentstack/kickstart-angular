import { Component, OnInit, signal, inject } from '@angular/core';
import { ContentstackService } from '../../services/contentstack.service';
import ContentstackLivePreview from "@contentstack/live-preview-utils";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  private readonly contentstackService = inject(ContentstackService);

  readonly page = signal<any>(null);
  readonly error = signal<string>('');

  getContent() {
    this.contentstackService.getEntryByUrl('page', '/').subscribe({
      next: (result) => {
        this.page.set(result);
      },
      error: (err) => {
        this.error.set('Error loading content. Please check your Contentstack configuration.');
        console.error('Contentstack error:', err);
      }
    });
  }

  ngOnInit() {
    ContentstackLivePreview.onEntryChange(() => {
      this.getContent()
    });

    // Load initial content
    this.getContent();
  }
}