import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ItemDto} from "../service/item.model";
import {ItemService} from "../service/item.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";


@Component({
    selector: 'app-item-dialog',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatHint,
        MatButton,
        MatIcon,
        MatError
    ],
    templateUrl: './item-dialog.component.html',
    styleUrl: './item-dialog.component.css'
})
export class ItemDialogComponent {
    public itemId: number | undefined;
    itemForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
    });

    constructor(public dialogRef: MatDialogRef<ItemDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: number,
                private itemService: ItemService) {

        if (data) {
            itemService.findItemById(this.data).subscribe(item => {
                this.itemId = item.id;
                this.itemForm = new FormGroup({
                    name: new FormControl(item.name, [Validators.required]),
                    description: new FormControl(item.description, [Validators.required]),
                });
            });
        }

    }

    getDialogTitle(): string {
        return this.itemId ? "Edit Item" : "Create Item";
    }

    onCancelClick() {
        this.dialogRef.close();
    }

    onSubmitClick() {
        if (this.itemForm.invalid) {
            return;
        }
        const itemDto = {
            id: this.itemId,
            name: this.itemForm.value.name,
            description: this.itemForm.value.description
        }

        if (itemDto.id) {
            this.itemService.updateItem(itemDto as ItemDto).subscribe(itemDto => {
                this.dialogRef.close();
            });
        } else {
            this.itemService.createItem(itemDto as ItemDto).subscribe(itemDto => {
                this.dialogRef.close();
            });
        }

    }
}
