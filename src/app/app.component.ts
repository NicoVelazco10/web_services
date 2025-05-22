import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryStateComponent } from "./components/country-state/country-state.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CountryStateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web_services';
}
