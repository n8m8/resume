import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-history-item',
  templateUrl: './work-history-item.component.html',
  styleUrls: ['./work-history-item.component.scss']
})
export class WorkHistoryItemComponent implements OnInit {
  @Input() companyName: string;
  @Input() title: string;
  @Input() dateRange: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
