export const ROUTER_CONST = {
    REDIRECT:"/redirect",
    DASHBOARD: "/tabs/dashboard",
    BUILDING: "/tabs/building",
    BLOCK: {
        LIST: "/tabs/block/list",
        DETAIL: "/tabs/block/detail/"
    },
    APARTMENT:{
        LIST: "/tabs/apartment/list",
        DETAIL: (id)=>`/tabs/apartment/detail/${id}`
    },
    RESIDENT: {
        LIST: "/tabs/resident/list",
        DETAIL: (id)=>`/tabs/resident/detail/${id}`
    },
    VEHICLE: {
        LIST: "/tabs/vehicle/list",
        DETAIL: (id)=>`/tabs/vehicle/detail/${id}`
    },
    SERVICE: {
        LIST: "/tabs/service/list",
        DETAIL: (id)=>`/tabs/service/detail/${id}`
    },
    BILL: {
        LIST: "/tabs/bill/list",
        DETAIL: (id)=>`/tabs/bill/detail/${id}`
    },
    EMPLOYEE: {
        LIST: "/tabs/employee/list",
        DETAIL: (id)=>`/tabs/employee/detail/${id}`
    },
    PAYMENT_METHOD: "/tabs/apartment",
    PROFILE: "/tabs/profile",
    NOT_AUTH: "/auth"
} 