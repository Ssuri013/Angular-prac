import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  template: `
  	<h1>{{A}}</h1>
  	<img src="{{A}}" />
  	<h1>hi</h1>
  `,
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  A = "https://www.google.co.in/search?q=image&tbm=isch&imgil=TVEPc8yBbrThFM%253A%253B2bZLA8JdC6ZaTM%253Bhttps%25253A%25252F%25252Fwww.w3schools.com%25252Fcss%25252Fcss3_images.asp&source=iu&pf=m&fir=TVEPc8yBbrThFM%253A%252C2bZLA8JdC6ZaTM%252C_&usg=__9d_ArGJ9NIBKYNG-pCUAJdP5Z4w%3D&biw=1920&bih=974&ved=0ahUKEwi1-uLmopXWAhWDqI8KHSAIBn4QyjcIQw&ei=U2KyWfWEJ4PRvgSgkJjwBw#imgrc=TVEPc8yBbrThFM:";

}
