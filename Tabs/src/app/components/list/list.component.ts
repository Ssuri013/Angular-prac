import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';
import { Opt } from '../../Opt';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  opts: Opt[] = [];
  constructor(private infoService: InfoService){

  }
  ngOnInit(): void{
    this.infoService.getOpts().then(opts => this.opts = opts);

  }

}
