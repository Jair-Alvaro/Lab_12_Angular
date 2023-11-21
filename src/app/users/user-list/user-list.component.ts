import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
  ];

  constructor(private router: Router) {}

  showDetails(user: any): void {
    this.router.navigate(['/users', user.id], { state: { userDetails: user } });
  }
}
