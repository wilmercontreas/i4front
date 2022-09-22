import { Component, OnInit } from '@angular/core';
import { Photo } from '../../interfaces/accounts';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-listphotos',
  templateUrl: './listphotos.component.html',
  styleUrls: ['./listphotos.component.scss']
})
export class ListphotosComponent implements OnInit {

  data: Photo[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    // call get all photos service and save data on array
    this.accountsService.getPhotos().subscribe({
      next: resp => {
        this.data = resp || [] ;
      },
      error: () => this.data = []
    });
  }

}
