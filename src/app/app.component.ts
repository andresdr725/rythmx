import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgxSonnerToaster } from "ngx-sonner";

@Component({
	selector: "app-root",
	host: {
		class: "w-full h-full bg-gray-50",
	},
	template: `
        <router-outlet/>
        <ngx-sonner-toaster [class]="_class"/>    
    `,
	imports: [RouterOutlet, NgxSonnerToaster],
})
export class AppComponent {
	protected readonly _class = "bg-red-500 !shadow-sm !select-none";
}
