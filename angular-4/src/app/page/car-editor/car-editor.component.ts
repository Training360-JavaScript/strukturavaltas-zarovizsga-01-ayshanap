import { CarService } from 'src/app/service/car.service';
import { Car } from 'src/app/model/car';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  car$: Observable<Car> = this.ar.params.pipe(
    switchMap( params => this.carService.get(params['id']))
  );

  constructor(
    private carService: CarService,
    private router: Router,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit(car: Car) : void {
    this.carService.update(car).subscribe(
      car => this.router.navigate(['/', 'car'])
    )
  }

}
