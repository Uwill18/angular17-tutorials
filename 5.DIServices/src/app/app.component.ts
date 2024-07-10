import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { Data } from './interfaces/data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  data: string[] = [];//array of strings
  posts: Data[] = []; //array of data


  //dataService : DataService creates the dataService object
  //consequently in this constructor the getData() method is called
  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe({
      next: (response: Data[]) => {
        this.posts = response; //response from api of data array is being stored here
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }
}
