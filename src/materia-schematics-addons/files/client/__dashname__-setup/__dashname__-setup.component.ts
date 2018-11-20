
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AddonSetup } from '@materia/addons';

export interface IBoilerplateSetup {
    name: string;
}

@AddonSetup('<%= utils.dasherize(packageName) %>')
@Component({
    selector: '<%= prefix %>-<%= dashname %>-setup',
    templateUrl: './<%= dashname %>-setup.component.html',
    styleUrls: ['./<%= dashname %>-setup.component.scss'],
    providers: []
})
export class <%= utils.classify(name) %>SetupComponent implements OnInit {
    @Input() app;
    @Input() settings;

    @Output() save = new EventEmitter<IBoilerplateSetup>();
    @Output() cancel = new EventEmitter<void>();

    form: FormGroup;

    get requiredError() { return this.form.get('name').hasError('required'); }

    constructor() { }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(this.settings && this.settings.name ? this.settings.name : '', Validators.required)
        });
    }

    saveClick() {
        if (this.form.valid) {
            this.save.emit(this.form.value);
        }
    }
}
