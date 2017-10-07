import { Component, OnInit, Input } from '@angular/core';
import { Opt } from '../../Opt';

@Component({
  selector: 'list-item',
  templateUrl: './list.item.component.html',
  styleUrls: ['./list.item.component.css']
})

export class ListItemComponent implements OnInit {
@Input() myOptName: string ;

  constructor() { }

  ngOnInit() {
    
  }
  displayData(){
    console.log(this.myOptName);
  }

}
