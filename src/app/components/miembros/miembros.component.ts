import { Component, OnInit } from '@angular/core';

import {RaidersServiceService} from '../../services/raiders-service.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.css']
})
export class MiembrosComponent implements OnInit {

  raiders:any[] = [];
  constructor(private _raiderService : RaidersServiceService) { 
  }

  ngOnInit() {
    this.raiders = this._raiderService.getRaiders();

  }

}
