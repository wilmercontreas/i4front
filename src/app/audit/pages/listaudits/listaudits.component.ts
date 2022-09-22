import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Audit } from '../../interfaces/audits';
import { AuditsService } from '../../services/audits.service';

@Component({
  selector: 'app-listaudits',
  templateUrl: './listaudits.component.html',
  styleUrls: ['./listaudits.component.scss']
})
export class ListauditsComponent implements OnInit {

  data: Audit[] = [];

  constructor(private router: Router, private auditsService: AuditsService) { }

  ngOnInit(): void {
    // call get all  service and save data on array
    this.auditsService.getAudits().subscribe({
      next: resp => {
        this.data = resp || [] ;
      },
      error: () => this.data = []
    });
  }

  // delete sub method 
  deleteAudit(id: string) {
    // call delete sub service and show modal according backend response
    this.auditsService.deleteAudit(id).subscribe({
      next: resp => {
        Swal.fire({
          icon: 'success',
          title: 'Action completed',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Action failed',
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
    // reload page after deleted 
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
