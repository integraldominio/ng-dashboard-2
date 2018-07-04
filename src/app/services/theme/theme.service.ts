import { Injectable } from '@angular/core';
import * as domHelper from '../../helpers/dom.helper';
@Injectable()
export class ThemeService {
  dashThemes = [{
    name: 'theme-dark-purple',
    baseColor: '#9c27b0',
    isActive: false
  }, {
    name: 'theme-dark-pink',
    baseColor: '#e91e63',
    isActive: false
  }, {
    name: 'theme-blue',
    baseColor: '#247ba0',
    isActive: false
  }, {
    name: 'theme-indigo',
    baseColor: '#3f51b5',
    isActive: true
  }];
  activatedThemeName: String;
  constructor() {
    this.changeTheme({name: 'theme-indigo'});
  }
  changeTheme(theme) {
    domHelper.changeTheme(this.dashThemes, theme.name);
    this.dashThemes.forEach((t) => {
      t.isActive = false;
      if(t.name === theme.name) {
        t.isActive = true;
        this.activatedThemeName = theme.name;
      }
    });
  }
}
