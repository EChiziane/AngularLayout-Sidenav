import {Component, Input, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {CarloadService} from "../../../Services/carload.service";
import {ActivatedRoute} from "@angular/router";
import {Carload} from "../../../Model/car-load";

@Component({
  selector: 'app-carload-details',
  templateUrl: './details-carload.component.html',
  styleUrls: ['./details-carload.component.scss']
})
export class CarloadDetailsComponent implements OnInit {
  @Input() carloadId!: string;
  carload!: Carload;

  constructor(private http: HttpClient,
              private carloadService: CarloadService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carloadId = params['id']; // Converte o ID
    });

    this.getCarload();
  }

  public getCarload(): void {
    console.log(this.carloadId);
    this.carloadService.getCarloadById(this.carloadId).subscribe({
      next: (carload: any) => {
        this.carload = carload;
      },
    });
  }
}
