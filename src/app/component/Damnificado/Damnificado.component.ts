import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Damnificado',
  templateUrl: './Damnificado.component.html',
  styleUrls: ['./Damnificado.component.css']
})
export class DamnificadoComponent implements OnInit{

constructor(public route:ActivatedRoute, private router:Router){

}
  ngOnInit(): void {

  }

}
