import { Component } from '@angular/core';
import {MATCH} from '../../assets/data';

@Component({
  
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public match = MATCH;
  constructor() {}

}
