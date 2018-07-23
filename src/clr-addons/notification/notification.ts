/*
 * Copyright (c) 2018 Porsche Informatik. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';
import { interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'clr-notification',
  templateUrl: './notification.html',
  animations: [],
  host: {
    '[class.notification]': 'true',
    '[class.top]': 'direction === "top"',
  },
})
export class ClrNotification implements OnInit {
  _open: boolean = false;
  _progressStatus: number = 0;
  _step: number = 5;

  @Input('clrTimeout') timeout: number = 2000;
  @Input('clrNotificationType') notificationType: string = 'info'; // "info", "warning", "success" and "danger"
  @Input('clrDismissable') dismissable: boolean = false;
  @Input('clrProgressbar') progressbar: boolean = false;

  @Output('clrClosed') closed: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  public isOpen(): boolean {
    return this._open;
  }

  public open(): void {
    if (this._open) {
      return;
    }
    this._open = true;
    if (this.progressbar) {
      interval((this.timeout - 100) / (100 / this._step))
        .pipe(takeUntil(timer(this.timeout)))
        .subscribe(() => this.updateProgressStatus());
    }
    timer(this.timeout).subscribe(() => this.close());
  }

  public updateProgressStatus(): void {
    this._progressStatus += this._step;
  }

  public close(): void {
    if (!this._open) {
      return;
    }
    this._open = false;
    this._progressStatus = 0;
    this.closed.emit();
  }

  public toggle(): void {
    if (this._open) {
      this.close();
    } else {
      this.open();
    }
  }
}
