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
  currOpt:Opt;
  constructor(private infoService: InfoService){
  }

  ngOnInit(): void{
    this.infoService.getOpts().then(opts => this.opts = opts);
     this.currOpt = this.opts[0];
  }

  setCurrOpt(myid){
    console.log(myid);
  }
  displayData(myopts){
  //  this.currOpt = myopts;
    console.log(this.currOpt.name);
  }

}
