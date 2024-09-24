import {Component, Input, OnInit} from '@angular/core';
import {Manager} from '../../../Model/manager';
import {ManagerService} from '../../../Services/manager.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-manager',
  templateUrl: './details-manager.component.html',
  styleUrls: ['./details-manager.component.scss']
})
export class DetailsManagerComponent implements OnInit {
  @Input() managerId!: string;
  manager!: Manager;

  constructor(private managerService: ManagerService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.managerId = params['id'];
    });

    this.getManager();
  }

  public getManager(): void {
    console.log(this.managerId);
    this.managerService.getManagerById(this.managerId).subscribe({
      next: (manager: Manager) => {
        this.manager = manager;
      },
    });
  }
}
