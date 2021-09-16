import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user: any;
  
  constructor(private http: HttpClient) {
    this.http.get('https://api.github.com/users/kencordero').subscribe((response) => {
      this.user = response;
    });
   }

  ngOnInit(): void { }

}
