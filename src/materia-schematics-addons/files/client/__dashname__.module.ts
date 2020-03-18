import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { Addon } from '@materia/addons';

import { <%= utils.classify(name) %>ViewComponent } from './<%= dashname %>-view/<%= dashname %>-view.component';
import { <%= utils.classify(name) %>SetupComponent } from './<%= dashname %>-setup/<%= dashname %>-setup.component';

@Addon('<%= utils.dasherize(packageName) %>')
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule
  ],
  declarations: [<%= utils.classify(name) %>ViewComponent, <%= utils.classify(name) %>SetupComponent],
  exports: [<%= utils.classify(name) %>ViewComponent, <%= utils.classify(name) %>SetupComponent]
})
export class <%= utils.classify(name) %>Module {}
