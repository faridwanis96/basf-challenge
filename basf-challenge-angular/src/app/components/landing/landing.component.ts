import {Component} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'app-landing',
  standalone: true,
    imports: [
        MatButton,
        MatCell,
        MatCellDef,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatIcon,
        MatIconButton,
        MatRow,
        MatRowDef,
        MatSort,
        MatSortHeader,
        MatTable,
        MatCardContent,
        MatCard
    ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
