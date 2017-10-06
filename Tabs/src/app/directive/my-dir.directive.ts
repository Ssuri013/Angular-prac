import { OnInit, Input, Directive , ElementRef} from '@angular/core';
import { InfoService } from '../info.service';
import { Opt } from '../Opt';


@Directive({
  selector: '[myDir]'
})
export class MyDirDirective implements OnInit{
  @Input() myId: number;
  opt: Opt ;

  constructor(private infoService: InfoService,private ele: ElementRef) {


   }

 ngOnInit(): void{
  this.infoService.getOpt(this.myId).then(
    opt => {
      this.ele.nativeElement.textContent=opt.name;
    //  this.ele.nativeElement.style.backgroundColor ="blue";
    }
  )
}


}
