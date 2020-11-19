import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms'
import { Registerlist } from 'src/app/interfaces/registerlist';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
 public getformvalues = [];
 SelectedIDs = [];
 selectedrows =[];
 phoneNumber = new Array();
 usertodelete: boolean =true;
 isMasterSel:boolean;
 removePhone:boolean;

  constructor() { }
  
  //registerFormList   = [] ;
  formSubmitted: boolean;
  countries = ["India","us","uk"];
  states = ["Ap","Telangana","Karnataka","up","wb"];
  
  ngOnInit(): void {
    this.isMasterSel = false;
  }
  registerForm = new FormGroup({
    firstName: new FormControl
    ('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
    lastName: new FormControl
    ('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
    emailAddress: new FormControl
    ('', [Validators.required, Validators.email]),
    dob: new FormControl
    ('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required,Validators.pattern("[0-9 ]{6}")]),
    //phoneNumber: new FormArray([new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")])]),
  });
  get phoneNumber1(){
    return 
    this.registerForm.get('phoneNumber') as FormArray;
  }
  add(){
    const pnumb = new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]);
    this.phoneNumber.push(pnumb);
    this.removePhone ==true;
  }
  remove(index){
   //this.phoneNumber.removeAt(index);
  }
  get f() { return this.registerForm.controls; }
  register(field) {
    return (
      this.registerForm.get(field).errors && this.registerForm.get(field).touched ||
      this.registerForm.get(field).untouched &&
      this.formSubmitted && this.registerForm.get(field).errors
    );
  }
  saveregistervalues(){
    this.formSubmitted = true;
    if(this.registerForm.valid){
      this.getformvalues.push(this.registerForm.value)
      console.log(this.registerForm.value)
    }
  }
  onRegisterReset(){
    this.formSubmitted = false;
    this.registerForm.reset()
  }

  addnew(){
    var newline = (<HTMLSelectElement>document.getElementById("totalval") ).value+1;
   
    var newinput="<div id='new"+newline+"'>"+"<input type='number' name='phone1' maxlength='10' minlength='10' placeholder='entermobilenumber'>"+ "<button   onclick='remove()' ><span class='glyphicon glyphicon-trash'></span></button>"+"</div>";

    $('#newrow').append(newinput);
    $('#totalval').val(newline);
  }
  saveregistervalues1(formvalues){
   
    console.log(formvalues.value);
    this.getformvalues.push(formvalues.value);
  }
  deleterow(numb,formvals){
    const confo = confirm('Do you want to delete');
    if (confo === true) {
    //const index = this.getformvalues.indexOf(formvals);

    this.getformvalues.splice(numb, 1);
}
  }
  selectID(id, formval){
    this.SelectedIDs.push(id);
    this.selectedrows.push(formval);
}
delete(){
  let formfilterdata = [];
formfilterdata= this.getformvalues;
  for(let i = 0; i<this.getformvalues.length; i++){
    for (let j =0; j<this.selectedrows.length; j++){
      if(this.getformvalues[i] === this.selectedrows[j] ){
       
        formfilterdata.splice(i, 1);
    }
  }
}
const conf = confirm("do you want to delete" + " " + this.selectedrows.length + " " + "row");
        if(conf===true){
          this.getformvalues = formfilterdata; 
        }
        
this.selectedrows = [];
this.isMasterSel = false;
}

checkUncheckAll() {
  this.selectedrows = [];
  for (var i = 0; i < this.getformvalues.length; i++) {
    this.getformvalues[i]['isSelected'] = this.isMasterSel;
    this.selectedrows.push(this.getformvalues[i]);
  }
 
}


}