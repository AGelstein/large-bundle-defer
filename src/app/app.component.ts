import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeavyComponentOneComponent } from './heavy-component-one/heavy-component-one.component';
import { HeavyComponentTwoComponent } from './heavy-component-two/heavy-component-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeavyComponentOneComponent,
    HeavyComponentTwoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'large-bundle-defer';
}
