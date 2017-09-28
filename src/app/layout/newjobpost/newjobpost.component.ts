
import { Component , OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DataserviceService } from "../../dataservice.service";
import { Http,Response } from "@angular/http";

@Component({
  selector: 'app-newjobpost',
  templateUrl : './newjobpost.component.html'
})
export class NewjobpostComponent
{

    // private apiUrl = 'http://localhost:51071/api/ContractorDashboard/GetLoadType';
    data:any = [];
    data1:any = [];

    ngOnInit() 
    {}

    complexForm : FormGroup;

    constructor(fb: FormBuilder,private service:DataserviceService,private http:Http)
  {
      this.getContacts();
      

     this.getContacts1();
      this.getData1();

      this.complexForm = fb.group
      ({
      
      'JobTitle' : [null, Validators.required],
      'JobDescription': [null, Validators.required],
       'budget' : [null, Validators.required],
       'EstimatedTime' : [null, Validators.required],
       'LoadTypeId' : [null, Validators.required],
       'distance':[null,Validators.required],
      'LoadWeight' : [null, Validators.required],
       'SourceAddress' : [null, Validators.required],
       'DestinationAddress' : [null, Validators.required],
       'JobStartDate' : [null, Validators.required],
       'JobEndDate' : [null, Validators.required],
       'TruckTypeId' : [null, Validators.required],
       'NoofTrucksRequired':[null,Validators.required]
      })
  }

  

 getContacts()
  {
       this.service.getData().subscribe(data => 
       {
          console.log(data);
          this.data = data
       })
  } 




getData1() {
        return this.http.get('http://localhost:51071/api/ContractorDashboard/GetTruckType').map((response: Response) => response.json());
    }
  

 getContacts1()
  {
       this.service.getData1().subscribe(data1 => 
       {
          console.log(data1);
          this.data1 = data1
       })
  } 




element:any[];

  submitForm(complexForm:NgForm)
  {
    this.element=complexForm.value;
    console.log(this.element)
    this.service.submitForm(this.element)
     .subscribe (
         Newdata=>{
               console.log(Newdata);
               this.element=Newdata;
     }) ;    
  }
 }
