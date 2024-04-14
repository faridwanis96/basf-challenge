import {Component} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {
    MatList,
    MatListItem,
    MatListItemIcon,
    MatListItemTitle,
    MatListSubheaderCssMatStyler,
    MatNavList
} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatRipple} from "@angular/material/core";

@Component({
  selector: 'app-sidenav',
  standalone: true,
    imports: [
        MatSidenavContent,
        MatSidenav,
        MatSidenavContainer,
        RouterOutlet,
        MatList,
        MatListSubheaderCssMatStyler,
        MatDivider,
        MatListItem,
        MatIcon,
        RouterLink,
        RouterLinkActive,
        MatRipple,
        MatNavList,
        MatListItemIcon,
        MatListItemTitle
    ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

}
