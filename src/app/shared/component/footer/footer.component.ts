import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showMode:any='chat';
  showDialog:any;
  
  constructor(private router: Router) { }

  consultation:any
  ngOnInit() {
    this.consultation = {
      requestor:'',
      request:'',
      type:'',
      description:'',
      date:'',
      engagement:''
    }
  }
  showinfo(s){
    if(s=='new'){
      this.showDialog=false;
      this.router.navigate(['newrequest']);
      
    }
    else{
          this.showMode=s;
    }
  }

}
