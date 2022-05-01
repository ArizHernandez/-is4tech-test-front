import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoService } from '@ngneat/transloco';

interface NotificationProps {
  message: string;
  action?: string;
  duration?: number;
  position?: {
    vertical: 'top' | 'bottom';
    horizontal: 'start' | 'center' | 'end';
  };
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar, private translocoService: TranslocoService) {}

  notificate({
    message = '',
    action,
    duration = 2000,
    position = {
      vertical: 'top',
      horizontal: 'end',
    },
  }: NotificationProps) {
    this.snackBar.open(this.translocoService.translate(message), action, {
      duration,
      horizontalPosition: position.horizontal,
      verticalPosition: position.vertical,
      panelClass: ['bg-cyan-700', 'text-white', 'dark:bg-cyan-600'],
    });
  }
}
