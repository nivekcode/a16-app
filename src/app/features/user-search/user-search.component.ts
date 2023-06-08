import {ChangeDetectionStrategy, Component, effect, inject, signal} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {toObservable, toSignal} from "@angular/core/rxjs-interop";
import {debounceTime, distinctUntilChanged, filter, switchMap} from "rxjs";
import {GhUsersService} from "../../core/gh-users.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <input #input (input)="searchTerm.set(input.value)"
           class="border-2 border-white border-solid rounded-lg bg-slate-800 p-2 w-full outline-0" type="text"/>
    <ul>
      <li
        [routerLink]="['/user-details', user.login]"
        *ngFor="let user of ghUsers()" class="border-white border-solid border-2 rounded-lg mt-5 flex items-center h-full p-4 cursor-pointer">
        <img class="rounded-full w-12 h-12 object-cover mr-5" [src]="user.avatar_url"/>
        {{ user.login }}
      </li>
    </ul>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchComponent {
  searchTerm = signal('');
  private ghUsersService = inject(GhUsersService);

  ghUsers = toSignal(toObservable(this.searchTerm).pipe(
    debounceTime(500),
    distinctUntilChanged(),
    filter(term => term.length > 0),
    switchMap(term => this.ghUsersService.searchUsers(term)
    )), {
    initialValue: []
  });

}
