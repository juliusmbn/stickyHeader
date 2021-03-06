import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, HostListener } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { Observable }        from 'rxjs/Observable';
@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css'],
  providers:[EmployeeService]
})
export class StickerComponent implements OnInit {

    public tgxScroller:number;
    employees: Employee[];

  // What to clone
    @ViewChild('clone') template;

    // Where to insert the cloned content
    @ViewChild('header', {read:ViewContainerRef}) header;
    @ViewChild('body', {read:ViewContainerRef}) body;

    @HostListener('scroll',['$event'])
    onScroll(event){
      let s = event.target.scrollLeft;
      this.tgxScroller = s;
    }

    constructor(private resolver:ComponentFactoryResolver, private employeeService: EmployeeService){}


    getEmployees(): void {
      this.employeeService.getEmployees().subscribe(
        employees => this.employees = employees,
 
      );
    }
    ngOnInit(){
       this.getEmployees();
      
    }

    fixTable(){
      this.header.createEmbeddedView(this.template);
      this.body.createEmbeddedView(this.template); 
    }

    ngAfterViewInit(){
      this.fixTable();
    }

    ngAfterViewChecked()
    {
        
    }
    


}
