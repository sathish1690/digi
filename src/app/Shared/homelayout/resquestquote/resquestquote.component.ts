import {ChangeDetectionStrategy, Component,signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {Observable, merge} from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resquestquote',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, CommonModule],
  templateUrl: './resquestquote.component.html',
  styleUrl: './resquestquote.component.css'
})
export class ResquestquoteComponent {
formGroup:any=FormGroup;
post: any = '';

constructor(private formBuilder:FormBuilder) { }

ngOnInit(){
  this.createForm();
}
createForm(){
  let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  this.formGroup =this.formBuilder.group({
    'email': [null, [Validators.required,Validators.pattern(emailregex)], this.checkInUseEmail],
    'firstname':[null, Validators.required],
    'lastname':[null, Validators.required],
    'subject':[null, Validators.required]
  })
}

checkInUseEmail(control:any) {
  // mimic http database access
  let db = ['tony@gmail.com'];
  return new Observable(observer => {
    setTimeout(() => {
      let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
      observer.next(result);
      observer.complete();
    }, 4000)
  })
}
getErrorEmail() {
  return this.formGroup.get('email').hasError('required') ? 'Email is required' :
    this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
      this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
}

onSubmit(post:any) {
  this.post = post;
}
  //updateErrorMessage() {
    //if (this.email.hasError('required')) {
     //this.errorMessage.set('You must enter a value');
   // } else if (this.email.hasError('email')) {
      //this.errorMessage.set('Not a valid email');
   // } else {
      //this.errorMessage.set('');
   // }
  //}
}
