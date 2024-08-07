import {Component, Input, OnInit} from '@angular/core';
import {Driver} from "../../../Model/driver";
import {HttpClient} from "@angular/common/http";
import {DriverService} from "../../../Services/driver.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-driver',
  templateUrl: './details-driver.component.html',
  styleUrl: './details-driver.component.scss'
})
export class DetailsDriverComponent implements OnInit {
  @Input() driverId!: string;
  driver!: Driver;

  constructor(private http: HttpClient,
              private driverService: DriverService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.driverId = params['id']; // Converte o ID para número
    });

    this.getDriver();
  }

  public getDriver(): void {
    console.log(this.driverId);
    this.driverService.getDriverById(this.driverId).subscribe({
      next: (driver: Driver) => {
        this.driver = driver;
      },
    })
  }

}
