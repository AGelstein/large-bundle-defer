// src/app/heavy-component-one/heavy-component-one.component.ts
import { Component } from '@angular/core';
import * as _ from 'lodash'; // Example of a large library

@Component({
  selector: 'app-heavy-component-one',
  templateUrl: './heavy-component-one.component.html',
  styleUrls: ['./heavy-component-one.component.css'],
  standalone: true,
})
export class HeavyComponentOneComponent {
  largeData = _.range(10000); // Just an example to simulate load
}
