import { Component, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-successes',
  templateUrl: './successes.component.html',
  styleUrls: ['./successes.component.css']
})
export class SuccessesComponent implements OnChanges, OnDestroy {
  script = document.createElement('script');

  constructor(){
    // <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    this.script.setAttribute( 'src', 'https://platform.twitter.com/widgets.js' );
    this.script.setAttribute( 'charset', 'utf-8' );
    this.script.setAttribute( 'async', 'true' );
    this.script.async;
    document.querySelector('head').appendChild( this.script );
    
  }

  ngOnDestroy(){
    this.script.remove()
  }
  
  ngOnChanges(){
  }

  
}
