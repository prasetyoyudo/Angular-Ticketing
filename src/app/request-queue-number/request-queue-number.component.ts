import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css'],
})
export class RequestQueueNumberComponent implements OnInit {
  paramId = '';
  dataUser: UserModel;
  private subscribers: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private User: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.paramId = params.dataUser;
      this.getUserById(this.paramId);
    });

    setTimeout(() => {
      window.print()
    }, 400);
  }

  async ngOnDestroy() {
    this.subscribers.forEach((each) => each.unsubscribe());
  }

  getUserById(id : string) {
    const subs = this.User.getUserByIdService(id).subscribe(
      (data: UserModel) => {
        this.dataUser = data;
      }
    );
    this.subscribers.push(subs);
  }
}
