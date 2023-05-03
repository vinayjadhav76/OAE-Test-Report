import { Component } from '@angular/core';
import { ROUTES } from './side-nav-routes.config';
import { ThemeConstantService } from '../../services/theme-constant.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './side-nav.component.html'
})

export class SideNavComponent {

    public menuItems: any[]
    isFolded: boolean;
    isSideNavDark: boolean;
    isExpand: boolean;
    userType: any;
    menuType: string = "admin";

    constructor(private themeService: ThemeConstantService) { }

    ngOnInit(): void {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);


        let userData = localStorage.getItem('User');
        let userInfo = userData && JSON.parse(userData)[0];
        this.userType = userInfo.userType;
        // console.warn(this.userType);

        this.menuType = this.userType
        if (this.userType == "Admin") {
            this.menuType = "admin"
            // console.warn(this.menuType);
        } else if (this.userType == "Hospital") {
            this.menuType = "hospital"
        }
    }

    closeMobileMenu(): void {
        if (window.innerWidth < 992) {
            this.isFolded = false;
            this.isExpand = !this.isExpand;
            this.themeService.toggleExpand(this.isExpand);
            this.themeService.toggleFold(this.isFolded);
        }
    }
}
