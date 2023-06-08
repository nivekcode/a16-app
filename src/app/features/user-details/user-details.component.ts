import {ChangeDetectionStrategy, Component, inject, Input, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GhUsersService} from "../../core/gh-users.service";
import {UserCardComponent} from "./user-card/user-card.component";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  template: `
    <p>
      user-details works!
    </p>
    <app-user-card [userDetails]="userDetails()"/>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  private ghUsersService = inject(GhUsersService);
  userDetails = signal({});
  @Input() set username(username: string) {
    this.ghUsersService.searchUser(username).subscribe(
      (userDetails) => {
        this.userDetails.set(userDetails);
      }
    );
  }
}
