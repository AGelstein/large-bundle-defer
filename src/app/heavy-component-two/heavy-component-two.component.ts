// src/app/heavy-component-two/heavy-component-two.component.ts
import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';

@Component({
  selector: 'app-heavy-component-two',
  templateUrl: './heavy-component-two.component.html',
  styleUrls: ['./heavy-component-two.component.css'],
  standalone: true,
})
export class HeavyComponentTwoComponent {
  chart: any;

  constructor() {}

  generatePdf() {
    const documentDefinition = {
      content: [
        { text: 'This is a sample PDF document generated using pdfmake.' },
      ],
    };
    pdfMake.createPdf(documentDefinition).download('sample.pdf');
  }
}
