import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
  message: string;
  type: ToastType;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _toasts = signal<ToastMessage[]>([]);
  toasts = this._toasts.asReadonly();

  show(message: string, type: ToastType = 'warning') {
    const newToast: ToastMessage = { message, type };
    this._toasts.update(toasts => [...toasts, newToast]);

    setTimeout(() => {
      this._toasts.update(toasts => toasts.slice(1));
    }, 3000);
  }
}
