import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpsRoutingModule } from './sign-ups-routing.module';
import { SignUpsComponent } from './sign-ups.component';

@NgModule({
  declarations: [SignUpsComponent],
  imports: [CommonModule, SignUpsRoutingModule],
  exports: [SignUpsComponent],
})
export class SignUpsModule {}
