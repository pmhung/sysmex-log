import { ToastOptions } from 'ng2-toastr';

export class CustomToastOption extends ToastOptions {
    animate = 'flyRight'; 
    newestOnTop = false;
    showCloseButton = false;
    positionClass = "toast-top-right";
}