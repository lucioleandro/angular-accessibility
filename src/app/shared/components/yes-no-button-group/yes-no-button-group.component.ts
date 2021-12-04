import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {

  @Input() value: string = null;
  @Input() label: string = '';

  @Output() valueChange = new EventEmitter<string>();

  options = YesNoButtonGroupOptions;


  constructor() { }

  ngOnInit(): void {
  }

  activate(value: string): void  {
    this.value = value
    this.valueChange.emit(this.value);
  }

}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
