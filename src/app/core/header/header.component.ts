import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-12 bg-slate-900 flex items-center p-4">
      <h1>Github user search</h1>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
