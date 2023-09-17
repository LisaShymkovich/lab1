import { Component } from '@angular/core';
import { DevelopersService, IDeveloper } from '../services/developers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-developer-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.css']
})
export class DeveloperDetailsComponent {
  developer : IDeveloper | null = null;

  constructor(private service : DevelopersService, private route : ActivatedRoute) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if (!id) {
      return;
    } else {
      this.developer = this.service.getDeveloper(+id);
    }
  }
}
