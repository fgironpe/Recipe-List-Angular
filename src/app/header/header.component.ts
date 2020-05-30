import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() featureSelected: EventEmitter<string> = new EventEmitter<string>();
    
    collapsed = true;

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}