import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

interface CustomWindow extends Window {
  ngRef?: any;
}

const customWindow: CustomWindow = window;

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    if (customWindow.ngRef) {
      customWindow.ngRef.destroy();
    }
    customWindow.ngRef = ref;
  })
  .catch((err) => console.error(err));
