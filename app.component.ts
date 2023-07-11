import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'To Do List';
  list: any = [];
  flag: boolean = false;

  getData(data: string) {
    if (data !== '') {
      this.list.push({ id: this.list.length, my_data: data });
      this.flag = true;
      console.log(data);
    }
  }

  removeItem(selIndex: number) {
    this.list.splice(selIndex, 1);
    if (this.list.length === 0) {
      this.flag = false;
    }
  }
}
