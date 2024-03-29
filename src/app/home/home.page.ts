import { Component, OnInit } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;  
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Componente[]=[
    {
      icon: 'american-football',
      name: 'Action-sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo:'/alert'
    },
  ];

  constructor() {}
  ngOnInit(){
  }
}
