import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

  get title(): string{
    return this.headerService.headerData.title;
  }

  get icon(): string{
    return this.headerService.headerData.icon;
  }

  get routeUrl(): string{
    return this.headerService.headerData.routeUrl;
  }

}
