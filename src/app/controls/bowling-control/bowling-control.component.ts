import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bowling-control',
  templateUrl: './bowling-control.component.html',
  styleUrl: './bowling-control.component.scss'
})
export class BowlingControlComponent implements OnChanges {
  @Input() bowling: boolean[] = new Array(10).fill(0).map(() => true);
  @Input() blocked: boolean[] = new Array(10).fill(0).map(() => false);

  @Output() changed = new EventEmitter<number>();

  counted = 0;

  switch(index: number) {
    this.bowling[index] = !this.bowling[index];
    this.bowling = [...this.bowling];
    this.counted = this.count();
    this.changed.emit(this.count());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['blocked']) {
      this.blocked.forEach((b, index) => {
        if (b) {
          this.bowling[index] = true;
        }
      })
      this.counted = this.count();
    }
  }

  count() {
    return this.bowling.reduce((p, c) => p + (!c && 1 || 0), 0);
  }

  reset() {
    this.counted = 0;
    this.bowling = new Array(10).fill(0).map(() => true);
    this.changed.emit(this.count());
  }
}
