import { Injectable } from '@angular/core';
import { DEVELOPERS } from './mock-developer-list';

export interface IDeveloper
{
  id:number;
  name: string;
  qualification: string;
  salary: number;
}

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  constructor() { }
  getDeveloper(id:number){
    const developer = DEVELOPERS.find((dev) => dev.id == id);
    if (!developer) {
      return null
    }

    return developer
  }
  getDevelopers(){
    return DEVELOPERS
  }
}
