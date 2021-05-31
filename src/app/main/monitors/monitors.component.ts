import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss']
})
export class MonitorsComponent implements OnInit {


  ngOnInit(){
  }




  // circle(cx,cy,radius,radiusY,startDegrees,endDegrees, ell){
  //   if (radiusY===undefined)      radiusY      = radius;
  //   if (startDegrees===undefined) startDegrees = 0;
  //   if (endDegrees===undefined)   endDegrees   = 180;
  //   var startRadians = startDegrees*Math.PI/180,
  //       endRadians   = endDegrees*Math.PI/180,
  //       stepRadians  = (endRadians-startRadians)/(ell.length-1);
  //   for (let i=0; i < ell.length; i++){
  //     var a = i*stepRadians+startRadians,
  //         x = Math.cos(a)*radius  + cx,
  //         y = Math.sin(a)*radiusY + cy;
  //     ell[i].css({position:'absolute', left:x+'px', top:y+'px'});
  //   }
  // }

}
