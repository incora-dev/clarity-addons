/*
 * Copyright (c) 2018 Porsche Informatik. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationService {
  @Output() change: EventEmitter<any> = new EventEmitter();

  elements = [];

  openNotification(index) {
    const notification = this.elements[index];
    if (notification) {
      if (!notification._open) {
        notification.open();
        this.elements.forEach((_notification, i) => {
          if (_notification._open && index !== i) {
            _notification.moveDown();
          }
        });
      }
    }
  }
}