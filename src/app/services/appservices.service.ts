import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppservicesService {

  constructor() { }
  someFunction(){
		console.log("I do something useful!");
	}
}
