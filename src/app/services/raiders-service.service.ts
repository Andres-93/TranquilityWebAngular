import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class RaidersServiceService {

  //lista raiders
  private raiders  :Raider[] = [
    {
      nombre : "Krosax",
      img:"../../../assets/img/iconoBrujo.png",
      log: "https://www.warcraftlogs.com/character/eu/dun-modr/krosax",
      io: "https://raider.io/characters/eu/dun-modr/Krosax",
      descripcion: "TEXTO DE MIERDA QUE NO SE QUE PONER",
      tank:"0",
      dps:"1",
      heal:"0"
    },
    {
      nombre : "Macheal",
      img:"../../../assets/img/iconoPaladin.png",
      log: "https://www.warcraftlogs.com/character/eu/dun-modr/macheal",
      io: "https://raider.io/characters/eu/dun-modr/Macheal",
      descripcion: "TEXTO DE MIERDA QUE NO SE QUE PONER",
      tank:"0",
      dps:"0",
      heal:"1"
    },
    {
      nombre : "Kale",
      img:"../../../assets/img/iconoChaman.png",
      log: "https://www.warcraftlogs.com/character/eu/dun-modr/kaledryl",
      io: "https://raider.io/characters/eu/dun-modr/kaledryl",
      descripcion: "TEXTO DE MIERDA QUE NO SE QUE PONER",
      tank:"0",
      dps:"1",
      heal:"0"
    },
    {
      nombre : "Ellysdk",
      img:"../../../assets/img/iconoDK.png",
      log: "https://www.warcraftlogs.com/character/eu/dun-modr/ellysdk",
      io: "https://raider.io/characters/eu/dun-modr/ellysdk",
      descripcion: "TEXTO DE MIERDA QUE NO SE QUE PONER",
      tank:"1",
      dps:"1",
      heal:"0"
    },
    {
      nombre : "Nalusey",
      img:"../../../assets/img/iconoHunter.png",
      log: "https://www.warcraftlogs.com/character/eu/exodar/nalusey",
      io: "https://raider.io/characters/eu/exodar/nalusey",
      descripcion: "TEXTO DE MIERDA QUE NO SE QUE PONER",
      tank:"0",
      dps:"1",
      heal:"0"
    },
    {
      nombre : "Rádikal",
      img:"../../../assets/img/iconoPicaro.png",
      log: "https://www.warcraftlogs.com/character/eu/dun-modr/rádikal",
      io: "https://raider.io/characters/eu/dun-modr/rádikal",
      descripcion: "TEXTO DE MIERDA QUE NO SE QUE PONER",
      tank:"0",
      dps:"1",
      heal:"0"
    },
    {
      nombre : "Brissonde",
      img:"../../../assets/img/iconoBrujo.png",
      log: "https://www.warcraftlogs.com/character/eu/dun-modr/brissonde",
      io: "https://raider.io/characters/eu/dun-modr/brissonde",
      descripcion: "TEXTO DE MIERDA QUE NO SE QUE PONER",
      tank:"0",
      dps:"1",
      heal:"0"
    },
    {
      nombre : "Tomasito",
      img:"../../../assets/img/iconoChaman.png",
      log: "https://www.warcraftlogs.com/character/eu/dun-modr/tomasito",
      io: "https://raider.io/characters/eu/dun-modr/tomasito",
      descripcion: "TEXTO DE MIERDA QUE NO SE QUE PONER",
      tank:"0",
      dps:"1",
      heal:"0"
    },
    {
      nombre : "Arteis",
      img:"../../../assets/img/iconoChaman.png",
      log: "https://www.warcraftlogs.com/character/eu/dun-modr/arteis",
      io: "https://raider.io/characters/eu/dun-modr/arteis",
      descripcion: "TEXTO DE MIERDA QUE NO SE QUE PONER",
      tank:"0",
      dps:"1",
      heal:"0"
    }


  ]
  
  

  constructor() {
    console.log('aaaaaaaaaaaaaa');
   }



   getRaiders(){
     return this.raiders;
   }





}

export interface Raider{
  nombre : string;
  img:string;
  log: string;
  io: string;
  descripcion: string;
  tank:string;
  dps:string;
  heal:string;
 }
