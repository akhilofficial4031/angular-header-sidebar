import { OnInit, Component, Renderer2, ElementRef, AfterViewInit, Input } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuList: any = [];

  state = 'open';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {

    this.menuList = [
      {
        icon: 'fa-tachometer',
        name: 'Dashboard'
      },
      {
        icon: 'fa-area-chart',
        name: 'Leaderboard'
      },
      {
        icon: 'fa-shopping-cart',
        name: 'Order'
      },
      {
        icon: 'fa-shopping-bag',
        name: 'Products'
      },
      {
        icon: 'fa-book',
        name: 'Sales Report'
      },
      {
        icon: 'fa-cog',
        name: 'Settings'
      },
    ]

  }


  toggleSidebar(): void {
    this.renderer.removeClass(document.body, this.state);
    this.state = this.state === 'open' ? 'close' : 'open';
    this.renderer.addClass(document.body, this.state);
  }

}
