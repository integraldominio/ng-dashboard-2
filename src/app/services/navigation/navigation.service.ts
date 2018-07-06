import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: string;       // Possible values: link/dropDown/icon/separator/extLink
  name?: string;      // Used as display text for item and title for separator type
  state?: string;     // Router state
  icon?: string;      // Item icon name
  tooltip?: string;   // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[];  // Dropdown items
}
interface IChildItem {
  name: string;       // Display text
  state: string;       // Router state
}

@Injectable()
export class NavigationService {

  defaultMenu: IMenuItem[] = [
    {
      name: 'DASHBOARD',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard'
    },
    {
      name: 'FORMS',
      type: 'dropDown',
      tooltip: 'Forms',
      icon: 'description',
      state: 'forms',
      sub: [
        {name: 'BASIC', state: 'basic'},
        {name: 'EDITOR', state: 'editor'},
        {name: 'UPLOAD', state: 'upload'},
        {name: 'WIZARD', state: 'wizard'}
      ]
    },
  ]

  constructor() {}

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
}
