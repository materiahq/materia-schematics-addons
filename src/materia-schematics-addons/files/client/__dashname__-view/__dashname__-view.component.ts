
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddonView } from '@materia/addons';

@AddonView('<%= utils.dasherize(packageName) %>')
@Component({
    selector: '<%= prefix %>-<%= dashname %>-view',
    templateUrl: './<%= dashname %>-view.component.html',
    styleUrls: ['./<%= dashname %>-view.component.scss'],
    providers: []
})
export class <%= utils.classify(name) %>ViewComponent implements OnInit {
    @Input() app;
    @Input() settings;

    @Output() openSetup = new EventEmitter<void>();

    constructor() { }

    ngOnInit() {
    }
}
