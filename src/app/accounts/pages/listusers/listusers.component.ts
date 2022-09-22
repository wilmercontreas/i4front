import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/accounts';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.scss']
})
export class ListusersComponent implements OnInit {

  data: User[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    // call get all subs service and save data on array
    this.accountsService.getUsers().subscribe({
      next: resp => {
        this.data = resp || [] ;
      },
      error: () => this.data = []
    });
  }

}
