import { Directive,HostListener,ElementRef } from '@angular/core';
import { SandalwoodComponent } from './sandalwood/sandalwood.component';
import { DestinatedComponent } from './destinated/destinated.component';
import { TranquilComponent } from './tranquil/tranquil.component';
import { MiracleleafComponent } from './miracleleaf/miracleleaf.component';
@Directive({
  selector: '[appGallery]'
})
export class GalleryDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click')
  imageChange()
  {
    var src:any=this.el.nativeElement.src;
    var prev:any=document.getElementById("preview");
    prev.src=src
    var imageSlide=document.getElementsByClassName("img-slide");
    for(let i=0; i<imageSlide.length;i++)
    {
      imageSlide[i].classList.remove('active')
    }
    this.el.nativeElement.parentElement.classList.add('active');


  }

}
