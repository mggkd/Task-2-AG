import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdownform',
  templateUrl: './dropdownform.component.html',
  styleUrls: ['./dropdownform.component.css']
})
export class DropdownformComponent implements OnInit{
  dataFormDropdown : FormGroup | any ;

  constructor(){}
  ngOnInit(): void {
    this.dataFormDropdown = new FormGroup({
      firstname : new FormControl('',Validators.required),
      lastname : new FormControl('',Validators.required),
      contactMethod : new FormControl('',Validators.required),
      contactInfo : new FormControl('',Validators.required),
    })
  }
  onSubmit(){
    console.log(this.dataFormDropdown)
    this.dataFormDropdown.reset()
  }
}
