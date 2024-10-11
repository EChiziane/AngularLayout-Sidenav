import {Component, Input, OnInit} from '@angular/core';
import {Material} from "../../../Model/material";
import {HttpClient} from "@angular/common/http";
import {MaterialService} from "../../../Services/material.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-materials',
  templateUrl: './details-materials.component.html',
  styleUrl: './details-materials.component.scss'
})
export class DetailsMaterialsComponent implements OnInit {
  @Input() materialId!: string;
  material!: Material;

  constructor(private http: HttpClient,
              private materialService: MaterialService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.materialId = params['id'];
    });

    this.getMaterial();
  }

  public getMaterial(): void {
    console.log(this.materialId);
    this.materialService.getMaterialById(this.materialId).subscribe({
      next: (material: any) => {
        this.material = material;
      },
    });
  }
}
