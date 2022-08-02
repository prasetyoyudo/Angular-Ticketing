import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_service/user.service';
import { Subscription } from 'rxjs';
import { UserModel } from '../_model/user.model';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css'],
})
export class InputVisitorDetailsComponent implements OnInit {
  userForm: FormGroup;
  selectSite = '';
  private subscribers : Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private User: UserService,
    private Route: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  async ngOnDestroy() {
    this.subscribers.forEach(each => each.unsubscribe())
  }

  buildForm() {
    this.userForm = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      address: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      description: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],

      price: ['', Validators.compose([Validators.required])],

      site: ['', Validators.compose([Validators.required])],
    });
  }

  onSubmitCustBio(value : UserModel) {
    const subs = this.User.postUserService(value).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
      setTimeout(() => {
        this.Route.navigate(['/visitor-list']);
      }, 300);
    });
    this.subscribers.push(subs)
  }
}
