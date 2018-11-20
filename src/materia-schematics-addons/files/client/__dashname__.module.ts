import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatRippleModule,
  MatSnackBarModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';

import { Addon } from '@materia/addons';

import { <%= utils.classify(name) %>ViewComponent } from './<%= dashname %>-view/<%= dashname %>-view.component';
import { <%= utils.classify(name) %>SetupComponent } from './<%= dashname %>-setup/<%= dashname %>-setup.component';

@Addon('<%= utils.dasherize(packageName) %>')
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule
  ],
  declarations: [<%= utils.classify(name) %>ViewComponent, <%= utils.classify(name) %>SetupComponent],
  exports: [<%= utils.classify(name) %>ViewComponent, <%= utils.classify(name) %>SetupComponent]
})
export class <%= utils.classify(name) %>Module {}
