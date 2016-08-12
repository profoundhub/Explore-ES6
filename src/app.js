import { Sports } from './Olympics/Sports/sports.js';
import { Womens } from './Olympics/Sports/Women.js';
import { Mens } from './Olympics/Sports/Men.js';
import { sportsData } from './sports-data.js';
import { SportsDataServices } from './services/dataServices.js';

let dataService = new SportsDataServices();
dataService.loadData(sportsData);

console.log(dataService.mens);
