import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/accounts';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.scss']
})
export class ListpostsComponent implements OnInit {

  data: Post[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    // call get all posts service and save data on array
    this.accountsService.getPosts().subscribe({
      next: resp => {
        this.data = resp || [] ;
      },
      error: () => this.data = []
    });
  }


}
