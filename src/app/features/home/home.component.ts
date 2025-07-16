import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { Friend } from '../../shared/interfaces/friend.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  friends: Friend[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getFriends().subscribe(friends => {
      this.friends = friends;
    });
  }

  getPreviewMessage(message: string): string {
    return message.length > 100 ? message.substring(0, 100) + '...' : message;
  }
}