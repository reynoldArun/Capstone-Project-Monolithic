import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit {

  @Input() message:any;

  constructor() { }

  ngOnInit(): void {
  }

}
