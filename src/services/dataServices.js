import { Mens } from '../Olympics/Sports/Men.js';
import { Womens } from '../Olympics/Sports/Women.js';

export class SportsDataServices {
  constructor() {
    this.sport = [];
    this.gender = [];
    this.mens = [];
    this.womens = [];
    this.gold = [];
    this.silver = [];
    this.bronze = [];
  }

  loadData(sportsData) {
    for (let data of sportsData) {
      switch (data.gender) {
        case 'mens':
           // console.log('mens');
           this.mens.push(data);
          break;
        case 'womens':
           // console.log('womens');
           this.womens.push(data);
          break;
        default:
        console.log('unknown');
      }
    }
  }
}
