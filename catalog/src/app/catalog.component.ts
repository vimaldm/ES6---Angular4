import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CatalogService } from './catalog.service';
import { Catalog } from './catalog';

@Component({
   selector: 'app-catalog',
   templateUrl: './catalog.component.html',
   styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit { 
   //Component properties
   allCatalog: Catalog[];
   statusCode: number;
   requestProcessing = false;
   processValidation = false;
   //Create form
   catalogForm = new FormGroup({
       prod_title: new FormControl('', Validators.required),
       prod_category: new FormControl('', Validators.required)	   
   });
   //Create constructor to get service instance
   constructor(private catalogService: CatalogService) {
   }
   //Create ngOnInit() for catalog load
   ngOnInit(): void {
        this.getAllCatalog();
   }   
   //Fetch all
   getAllCatalog() {
        this.catalogService.getAllCatalog()
	  .subscribe(
                data => this.allCatalog = data,
                errorCode =>  this.statusCode = errorCode);   
   }

   //create catalog service
   onFormSubmit() {
	  this.processValidation = true;   
	  if (this.catalogForm.invalid) {
	       return; 
	  }   
	  //if Form is valid create records
          this.preProcessConfigurations();
	  let catalog = this.catalogForm.value;
	       this.catalogService.getAllCatalog()
	      .subscribe(catalogData => {
			 
		   //Generate catalog id	 
		   let maxIndex = catalogData.length - 1;
		  
		   //catalogData.id = maxIndex+1;
		   
		   //Create catalog
     	           this.catalogService.createCatalog(catalog)
			  .subscribe(successCode => {
				   this.statusCode = successCode;
				   this.getAllCatalog();	
				   this.clearForm();
				 },
				 errorCode => this.statusCode = errorCode
			   );
		 });		 
   }
   
   preProcessConfigurations() {
      this.statusCode = null;
      this.requestProcessing = true;   
   }
   
   clearForm() {
      this.catalogForm.reset();	  
      this.processValidation = false;
   }
   
}