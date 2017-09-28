import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions, Response } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class DataserviceService {

 
  constructor(private http:Http) {

   }


  
  

  

 /* createPost(resourses)
			{
     
			 var headers = new Headers({ 'content-type': 'application/json'});
      
		//	 var options = new RequestOptions({ headers: headers });
 
  			 return this.http.post(this.url,
			JSON.stringify(resourses),{headers:headers})
  
 			 .map(response=>response.json())

			  }
*/

submitForm(resourses)
{
	debugger;
 var headers=new Headers();
 headers.append('Content-Type', 'application/json');
 
//    let headers=new Headers({'content-type':'application/json'});
   	 return this.http.post("http://localhost:51071/api/ContractorDashboard/SetData",JSON.stringify(resourses),{headers:headers})
		.map(response=>response.json());
			  
      }

 getData() {
        return this.http.get('http://localhost:51071/api/ContractorDashboard/GetLoadType').map((response: Response) => response.json());
    }
 
  getData1() {
        return this.http.get('http://localhost:51071/api/ContractorDashboard/GetTruckType').map((response: Response) => response.json());
    }

	 
                    
}

              
  
			 
                         
  
                         

                         


