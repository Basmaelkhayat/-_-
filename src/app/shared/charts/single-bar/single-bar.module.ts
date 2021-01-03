import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SingleBarComponent } from './single-bar.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [SingleBarComponent],
  imports: [CommonModule, ChartsModule],
  exports: [SingleBarComponent],
  providers: [DecimalPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingleBarModule {}
