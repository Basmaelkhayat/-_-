import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleBarComponent } from './single-bar.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [SingleBarComponent],
  imports: [CommonModule, ChartsModule],
  exports: [SingleBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingleBarModule {}
