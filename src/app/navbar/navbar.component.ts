import { Component, OnInit } from '@angular/core';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  counter: number = 0
  
  constructor(private _wishListService: WishListService) {
    this._wishListService.getCounter().subscribe((res:any) => {
      this.counter = res
    })
   }

  ngOnInit(): void {
  }

}
