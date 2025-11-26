import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SIDEBAR_OPTIONS } from "@dashboard/common/dummys/sidebar-options";

@Component({
    selector: 'sidebar',
    standalone: true,
    imports: [RouterModule],
    templateUrl: 'sidebar.html',
})
export class Sidebar {

    items = SIDEBAR_OPTIONS;
    expanded = signal(true);

    toggle() {
        this.expanded.update(value => !value);
    }

}