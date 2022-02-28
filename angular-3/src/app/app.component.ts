import { ConstructionService } from 'src/app/service/construction.service';
import { Construction } from 'src/app/model/construction';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-3';

  list$: Observable<Construction[]> = this.constructionService.getAll();

  constructor(
    private constructionService: ConstructionService
  ) {}

  onDelete(construction: Construction) : void {
    this.constructionService.delete(construction).subscribe(
    )
  }

}
