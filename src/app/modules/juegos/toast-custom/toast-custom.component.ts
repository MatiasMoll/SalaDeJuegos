import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toast-custom',
  templateUrl: './toast-custom.component.html',
  styleUrls: ['./toast-custom.component.css']
})
export class ToastCustomComponent implements OnInit {

  @Input() titulo;
  @Input() mensaje;
  @Input() gano;
  @Output() eventNewGame = new EventEmitter<any>();
  @Output() eventBackHome = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log('Test');
  }

  newGame(){
    this.eventNewGame.emit();
  }

  backHome(){
    this.eventBackHome.emit();
  }
}
