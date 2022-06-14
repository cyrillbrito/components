import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { ToastComponent } from './toast.comp';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private overlay: Overlay) { }

  success(message: string): void {
    this.open('success', message);
  }

  error(message: string): void {
    this.open('error', message);
  }

  private open(type: ToastComponent['type'], message: string) {
    const overlayRef = this.overlay.create({});
    const portal = new ComponentPortal(ToastComponent);
    const compRef = overlayRef.attach(portal);
    const comp = compRef.instance;

    comp.type = type;
    comp.text = message;
  }
}
