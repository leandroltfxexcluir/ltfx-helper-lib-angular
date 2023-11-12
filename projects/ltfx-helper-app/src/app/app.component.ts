import { Component } from '@angular/core';

import { LtfxHelperService } from 'projects/ltfx-helper/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private ltfxHelperService: LtfxHelperService
  ) { }
}
