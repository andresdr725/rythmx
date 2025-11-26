import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Sidebar } from "@dashboard/components/sidebar/sidebar";

@Component({
    selector: 'dashboard-layout',
    standalone: true,
    imports: [Sidebar, RouterOutlet],
    templateUrl: './index.html',
})
export default class DashboardLayout {
}