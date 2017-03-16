import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ng2-accordion';

import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {
    Validators,
    FormGroup,
    FormControl
} from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import { Message } from './message';
@Component({
    selector: 'app-screen2',
    templateUrl: './screen2.component.html',
    styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {

    public items = ['Typescript', 'Angular2'];
    constructor(private http: Http) { }
     
    
    ngOnInit() {
    }

    classification = ['Normal Message', 'High Priority', 'Urgent'];
    references = ['reference1', 'reference2', 'reference3'];


    placeholder_subject = 'Add subject';
    placeholder_recipient = 'Enter Recipient..';
    recipients = ['John Poots'];
    contacts=['John Poots']

    add_recipient(to,email) {
        if (to !== ''){
        this.recipients.push(to);
        this.contacts.push(to);
    }
        console.log(this.recipients);
    }
   
    printdata(form,subject) {
        console.clear();
        console.log("Recipients:"+this.recipients+", Subject:"+subject);
        form.reset();
        var temp=JSON.stringify(this.recipients);
     
        var message: Message={
            recipient_list:this.contacts,
            subject :subject
        };
           console.log(message);
       this.recipients.splice(0, this.recipients.length)  ;   
    }

    delete(rec) {
        var index = this.recipients.indexOf(rec);
        if (index >= 0){
        this.recipients.splice(index, 1);
         this.contacts.splice(index, 1);
    }
       // console.log(this.recipients);
    }
    resetform(form){
        this.recipients.splice(0, this.recipients.length) ;
    }
}
