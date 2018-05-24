import { Component, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('f') storeForm: NgForm;
  user= {
    storeName: '',
    storeEmail: '',
    storeDescription: '',
    location: ''
  };
  submitted= false;

  onSubmit(){
    this.submitted=true;
    this.user.storeName = this.storeForm.value.storeName;
    this.user.storeEmail = this.storeForm.value.storeEmailId;
    this.user.storeDescription = this.storeForm.value.storeDescription;
    this.user.location = this.storeForm.value.location;
}
}