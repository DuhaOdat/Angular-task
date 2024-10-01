import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrl: './lecture.component.css'
})
export class LectureComponent {
  name: string = "duha";
  num: number = 1996;
  urlImg: string = "https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp";

  onchange() {
    this.name="Ayah"
  }

  color = "red";

  display = true;

  num11: number = 12;
}
