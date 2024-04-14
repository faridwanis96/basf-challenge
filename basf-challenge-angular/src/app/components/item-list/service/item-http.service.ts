import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemDto} from "./item.model";

const ITEMS_PATH = 'http://localhost:8080/items'

@Injectable({
    providedIn: 'root'
})
export class ItemHttpService {



    constructor(private httpClient: HttpClient) {
    }


    public getAllItems(): Observable<ItemDto[]> {
        return this.httpClient.get<ItemDto[]>(ITEMS_PATH);
    }

    public getItemById(itemId: number): Observable<ItemDto> {
        const path = `${ITEMS_PATH}/${itemId}`;
        return this.httpClient.get<ItemDto>(path);
    }

    public updateItem(itemDto: ItemDto): Observable<ItemDto> {
        const path = `${ITEMS_PATH}/${itemDto.id}`;
        return this.httpClient.put<ItemDto>(path, itemDto);
    }

    public createItem(itemDto: ItemDto): Observable<ItemDto> {
        return this.httpClient.post<ItemDto>(ITEMS_PATH, itemDto);
    }

    public deleteItem(itemId: number): Observable<any> {
        const path = `${ITEMS_PATH}/${itemId}`;
        return this.httpClient.delete(path);
    }
}
