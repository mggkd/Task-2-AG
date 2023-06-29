import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-radioform',
  templateUrl: './radioform.component.html',
  styleUrls: ['./radioform.component.css']
})
export class RadioformComponent {
  dataFormRadio : FormGroup | any ;

  constructor(){}
  ngOnInit(): void {
    this.dataFormRadio = new FormGroup({
      firstname : new FormControl('',Validators.required),
      lastname : new FormControl('',Validators.required),
      contactMethod : new FormControl('',Validators.required),
      contactInfo : new FormControl('',Validators.required),
    })
  }
  onSubmit(){
    console.log(this.dataFormRadio)
    this.dataFormRadio.reset()
  }
}
