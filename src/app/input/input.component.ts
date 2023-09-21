import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ip-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Output() Input = new EventEmitter<string>();

  sendInput(e: any) {
    this.Input.emit(e.target.value);
  }
}
