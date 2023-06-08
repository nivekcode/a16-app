import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

import {GitHubUser, GitHubUserDetails} from "../shared/model/github-user.model";

@Injectable({
  providedIn: 'root'
})
export class GhUsersService {

  constructor(private http: HttpClient) {
  }

  searchUser(username: string): Observable<GitHubUserDetails>{
    return this.http.get<GitHubUserDetails>(`https://api.github.com/users/${username}`).pipe(
    );
  }

  searchUsers(query: string): Observable<GitHubUser[]> {
    return this.http.get<GitHubUser[]>(`https://api.github.com/search/users?q=${query}`).pipe(
      map((res: any) => res.items)
    );
  }

}
