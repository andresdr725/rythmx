import type { Routes } from "@angular/router";

export const routes: Routes = [
    // {
    //     path: "",
    //     redirectTo: "",
    //     pathMatch: "full",
    // },
    {
        path: "",
        loadChildren: () => import("@dashboard/routes").then((router) => router.dashboardRoutes),
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full",
    },
];
