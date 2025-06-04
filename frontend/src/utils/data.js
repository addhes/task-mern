import { LuClipboardCheck, LuLayoutDashboard, LuLogOut, LuSquarePlus, LuUsers } from 'react-icons/lu'

export const SIDE_MENU_DATA = [
    {
        id: "01",
        label: "Dashboard",
        icon: LuLayoutDashboard,
        path: "/admin/dashboard"
    },
    {
        id: "02",
        label: "Manage Tasks",
        icon: LuClipboardCheck,
        path: "/admin/tasks"
    },
    {
        id: "03",
        label: "Create Tasks",
        icon: LuSquarePlus,
        path: "/admin/dashboard"
    },
    {
        id: "04",
        label: "Team Members",
        icon: LuUsers,
        path: "/admin/dashboard"
    },
        {
        id: "05",
        label: "Logout",
        icon: LuLogOut,
        path: "logout"
    },
]

export const SIDE_MENU_USER_DATA = [
    {
        id: "01",
        label: "Dashboard",
        icon: LuLayoutDashboard,
        path: "/user/dashboard"
    },
    {
        id: "02",
        label: "My Tasks",
        icon: LuClipboardCheck,
        path: "/user/tasks"
    },
    {
        id: "05",
        label: "Logout",
        icon: LuLogOut,
        path: "logout"
    },
]

export const PRIORITY_DATA = [
    { label: "Low", value: "Low"},
    { label: "In Progress", value: "In Progress"},
    { label: "COmpleted", value: "COmpleted"}
]

export const STATUS_DATA = [
    { label: "Low", value: "Low"},
    { label: "In Progress", value: "In Progress"},
    { label: "COmpleted", value: "COmpleted"}
]