import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatTableDataSource
} from "@angular/material/table";
import {AsyncPipe} from "@angular/common";
import {ItemDto} from "./service/item.model";
import {ItemService} from "./service/item.service";
import {MatDialog} from "@angular/material/dialog";
import {ItemDialogComponent} from "./item-dialog/item-dialog.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatSort, MatSortHeader} from "@angular/material/sort";

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
    selector: 'app-item-list',
    standalone: true,
    imports: [
        MatTable,
        MatHeaderCell,
        MatHeaderCellDef,
        MatColumnDef,
        MatCell,
        MatCellDef,
        MatHeaderRow,
        MatHeaderRowDef,
        MatRow,
        MatRowDef,
        AsyncPipe,
        MatButton,
        MatIcon,
        MatSort,
        MatSortHeader,
        MatIconButton
    ],
    templateUrl: './item-list.component.html',
    styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit, AfterViewInit {
    displayedColumns: string[] = ['id', 'name', 'action'];
    dataSource = new MatTableDataSource<ItemDto>();
    @ViewChild(MatSort) sort: MatSort | null = null;

    constructor(private itemService: ItemService, public dialog: MatDialog) {
        itemService.allItems.subscribe(items => this.dataSource.data = items);

    }


    onRowClicked(item: ItemDto): void {
        this.dialog.open(ItemDialogComponent, {
            data: item.id,
            width: '600px',
        });
    }

    ngOnInit(): void {
        this.itemService.getAllItems();
    }

    onCreateItemClick() {
        this.dialog.open(ItemDialogComponent, {
            width: '600px'
        });
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
    }

    onDeleteItemClick(event: MouseEvent, itemDto: ItemDto) {
        this.itemService.deleteItem(itemDto.id).subscribe();
        event.stopPropagation();
    }
}
