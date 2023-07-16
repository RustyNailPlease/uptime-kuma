import { createRouter, createWebHistory } from "vue-router";

import EmptyLayout from "./layouts/EmptyLayout.vue";
import Layout from "./layouts/Layout.vue";
import Dashboard from "./pages/Dashboard.vue";
import DashboardHome from "./pages/DashboardHome.vue";
import Details from "./pages/Details.vue";
import EditMonitor from "./pages/EditMonitor.vue";
import EditMaintenance from "./pages/EditMaintenance.vue";
import List from "./pages/List.vue";
const Settings = () => import("./pages/Settings.vue");
import Setup from "./pages/Setup.vue";
import StatusPage from "./pages/StatusPage.vue";
import Entry from "./pages/Entry.vue";
import ManageStatusPage from "./pages/ManageStatusPage.vue";
import AddStatusPage from "./pages/AddStatusPage.vue";
import NotFound from "./pages/NotFound.vue";
import DockerHosts from "./components/settings/Docker.vue";
import MaintenanceDetails from "./pages/MaintenanceDetails.vue";
import ManageMaintenance from "./pages/ManageMaintenance.vue";
import APIKeys from "./components/settings/APIKeys.vue";

// Settings - Sub Pages
import Appearance from "./components/settings/Appearance.vue";
import General from "./components/settings/General.vue";
const Notifications = () => import("./components/settings/Notifications.vue");
import ReverseProxy from "./components/settings/ReverseProxy.vue";
import Tags from "./components/settings/Tags.vue";
import MonitorHistory from "./components/settings/MonitorHistory.vue";
const Security = () => import("./components/settings/Security.vue");
import Proxies from "./components/settings/Proxies.vue";
import Backup from "./components/settings/Backup.vue";
import About from "./components/settings/About.vue";

const routes = [
    {
        path: "/",
        component: Entry,
    },
    {
        // If it is "/dashboard", the active link is not working
        // If it is "", it overrides the "/" unexpectedly
        // Give a random name to solve the problem.
        path: "/uptimer",
        component: Layout,
        children: [
            {
                path: "/",
                component: Dashboard,
                children: [
                    {
                        name: "DashboardHome",
                        path: "/uptimer/dashboard",
                        component: DashboardHome,
                        children: [
                            {
                                path: "/uptimer/dashboard/:id",
                                component: EmptyLayout,
                                children: [
                                    {
                                        path: "",
                                        component: Details,
                                    },
                                    {
                                        path: "/uptimer/edit/:id",
                                        component: EditMonitor,
                                    },
                                ],
                            },
                            {
                                path: "/uptimer/clone/:id",
                                component: EditMonitor,
                            },
                            {
                                path: "/uptimer/add",
                                component: EditMonitor,
                            },
                        ],
                    },
                    {
                        path: "/uptimer/list",
                        component: List,
                    },
                    {
                        path: "/uptimer/settings",
                        component: Settings,
                        children: [
                            {
                                path: "general",
                                component: General,
                            },
                            {
                                path: "appearance",
                                component: Appearance,
                            },
                            {
                                path: "notifications",
                                component: Notifications,
                            },
                            {
                                path: "reverse-proxy",
                                component: ReverseProxy,
                            },
                            {
                                path: "tags",
                                component: Tags,
                            },
                            {
                                path: "monitor-history",
                                component: MonitorHistory,
                            },
                            {
                                path: "docker-hosts",
                                component: DockerHosts,
                            },
                            {
                                path: "security",
                                component: Security,
                            },
                            {
                                path: "api-keys",
                                component: APIKeys,
                            },
                            {
                                path: "proxies",
                                component: Proxies,
                            },
                            {
                                path: "backup",
                                component: Backup,
                            },
                            {
                                path: "about",
                                component: About,
                            },
                        ]
                    },
                    {
                        path: "/uptimer/manage-status-page",
                        component: ManageStatusPage,
                    },
                    {
                        path: "/uptimer/add-status-page",
                        component: AddStatusPage,
                    },
                    {
                        path: "/uptimer/maintenance",
                        component: ManageMaintenance,
                    },
                    {
                        path: "/uptimer/maintenance/:id",
                        component: MaintenanceDetails,
                    },
                    {
                        path: "/uptimer/add-maintenance",
                        component: EditMaintenance,
                    },
                    {
                        path: "/uptimer/maintenance/edit/:id",
                        component: EditMaintenance,
                    },
                ],
            },
        ],
    },
    {
        path: "/uptimer/setup",
        component: Setup,
    },
    {
        path: "/uptimer/status-page",
        component: StatusPage,
    },
    {
        path: "/uptimer/status",
        component: StatusPage,
    },
    {
        path: "/uptimer/status/:slug",
        component: StatusPage,
    },
    {
        path: "/uptimer/:pathMatch(.*)*",
        component: NotFound,
    },
];

export const router = createRouter({
    linkActiveClass: "active",
    history: createWebHistory(),
    routes,
});
