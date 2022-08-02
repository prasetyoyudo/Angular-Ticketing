import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserModel } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
})
export class VisitorListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'site', 'description', 'price', 'action'];
  userListData: UserModel[] = [];
  private subscribers : Subscription[] = [];

  constructor(private User: UserService, private Router : Router) {}

  ngOnInit() {
    this.getUserList();
  }

  async ngOnDestroy() {
    this.subscribers.forEach(each => each.unsubscribe())
  }

  getUserList() {
    const subs = this.User.getUserListService().subscribe((data: UserModel[]) => {
      this.userListData = data;
    });

    this.subscribers.push(subs)
  }

  goToPrintBarcode(id : string) {
    this.Router.navigate(['/request-queue-number'], { queryParams: { dataUser: id } })
    
  }
}
