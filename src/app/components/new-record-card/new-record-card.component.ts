import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-record-card',
  templateUrl: './new-record-card.component.html',
  styleUrls: ['./new-record-card.component.scss'],
})
export class NewRecordCardComponent {
  @Output() add: EventEmitter<boolean> = new EventEmitter();

  onClick() {
    this.add.emit(true);
  }
}
