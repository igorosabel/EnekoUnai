import { Provider } from '@angular/core';
import FireworksService from '@services/fireworks.service';

function provideCore(): Provider[] {
  return [FireworksService];
}

export default provideCore;
