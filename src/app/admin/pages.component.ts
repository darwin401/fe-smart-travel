import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  mobileQuery: MediaQueryList | undefined;
  hasBackdrop = new FormControl(null as null | boolean);

  _mobileQueryListener: () => void;

  constructor( private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  navigate(path:string){
    this.router.navigateByUrl(`dashboard/${path}`)
  }
  ngOnDestroy(): void {
    this.mobileQuery?.removeListener(this._mobileQueryListener);
  }


}
