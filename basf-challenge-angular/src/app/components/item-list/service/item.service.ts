import {Injectable} from '@angular/core';
import {Observable, Subject, tap} from "rxjs";
import {ItemDto} from "./item.model";
import {ItemHttpService} from "./item-http.service";

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    public allItems = new Subject<ItemDto[]>();

    constructor(private itemHttpService: ItemHttpService) {
    }


    public getAllItems(): void {
        console.log("ItemService.getAllItems");
        this.itemHttpService.getAllItems().subscribe(items => this.allItems.next(items))
    }

    public findItemById(itemId: number): Observable<ItemDto> {
        return this.itemHttpService.getItemById(itemId);
    }

    public updateItem(itemDto: ItemDto): Observable<ItemDto> {
        return this.itemHttpService.updateItem(itemDto).pipe(
            tap(item => this.getAllItems())
        );
    }

    public createItem(itemDto: ItemDto): Observable<ItemDto> {
        return this.itemHttpService.createItem(itemDto).pipe(
            tap(item => this.getAllItems())
        );
    }

    public deleteItem(itemId: number): Observable<any> {
        return this.itemHttpService.deleteItem(itemId).pipe(
            tap(item => this.getAllItems())
        );
    }
}
