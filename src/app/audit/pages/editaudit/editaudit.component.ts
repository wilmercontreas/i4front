import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { Audit } from '../../interfaces/audits';
import { AuditsService } from '../../services/audits.service';

@Component({
  selector: 'app-editaudit',
  templateUrl: './editaudit.component.html',
  styleUrls: ['./editaudit.component.scss']
})
export class EditauditComponent implements OnInit {

  data: Audit = {};
  id: string = ""; 
  auditNotFound: boolean = false;
  methodsSelect = [
    {
      method: 'Get',
      value: 'GET'
    },
    {
      method: 'Post',
      value: 'POST'
    },
    {
      method: 'Put',
      value: 'PUT'
    },
    {
      method: 'Delete',
      value: 'DELETE'
    }
  ];
  urlSelect = [
    {
      url: 'api/accounts/users (All Users)',
      value: 'api/accounts/users'
    },
    {
      url: 'api/accounts/posts (All Posts)',
      value: 'api/accounts/posts'
    },
    {
      url: 'api/accounts/photos (All Photos)',
      value: 'api/accounts/photos'
    }
  ];

  // create reactive form 
  form: FormGroup = this.fb.group({
    method: ['', [Validators.required] ],
    url: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private router: Router, 
    private auditsService: AuditsService,
    private activatedRoute: ActivatedRoute,){}

  ngOnInit(): void {
    this.loadAudit();
  }

  // error messages of invalid inputs 
  get mnsgErrMethod(): string {
    if(this.form.controls['method']?.errors?.['required']){
      return 'The method is required'
    }
    return '';
  };
  get mnsgErrUrl(): string {
    if(this.form.controls['url']?.errors?.['required']){
      return 'The url is required'
    }
    return '';
  };
  
  // show message error if inputs was touched and have errors
  invalidInput(campo: string) {
    return this.form.controls[campo].errors && this.form.controls[campo].touched;
  }

  // method to call get services and save data in arrays 
  loadAudit(){
    this.activatedRoute.params.pipe(
      // get the id on the url and call getsubbyid service
      switchMap( params => {
        this.id = params['id'];
        return this.auditsService.getAuditById(params['id']);
      })
    ).subscribe({
        next: resp => {
          if (!resp) {
            this.auditNotFound = true;
          }
          this.data = resp!;
          // write data from response service on form
          this.form.patchValue({
            method: this.data.method,
            url: this.data.url,
          });
        },
        error: () => this.auditNotFound = true
    });
  }

  // update sub method 
  updateAudit(){
    //show error modal if inputs are invalid after submit
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      Swal.fire({
        icon: 'warning',
        title: 'Form invalid, fill the inputs',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }
    // perepare payload to send on body service
    const body: Audit = {
      _id: this.id,
      url: this.form.value.url,
      method: this.form.value.method,
      response: this.data.response
    };
    // call update sub service and show modal according backend response
    this.auditsService.updateAudit(body).subscribe({
      next: resp => {
        Swal.fire({
          icon: 'success',
          title: 'Action completed',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigateByUrl('/audits');
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
  }

}
