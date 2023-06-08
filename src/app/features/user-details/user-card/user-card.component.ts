import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GitHubUserDetails} from "../../../shared/model/github-user.model";

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-slate-600 rounded-lg shadow-2xl p-4 flex justify-center flex-col items-center" *ngIf="userDetails">
      <img class="rounded-full w-32 h-32 object-cover mx-auto" [src]="userDetails?.avatar_url"/>
      <h1>{{ userDetails?.login }}</h1>
      <span>Todo display props here</span>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {

  @Input({required: true}) userDetails!: GitHubUserDetails | any;
}
