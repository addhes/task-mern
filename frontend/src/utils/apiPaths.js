export const BASE_URL = "http://localhost:7000"

export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register",
        LOGIN: "/api/auth/login",
        GET_PROFILE: "/api/auth/profile",
    },

    USERS: {
        GET_ALL_USERS: "/api/users",
        GET_USER_BY_ID: (userID) => `/api/users/${userID}`,
        CREATE_USER: "/api/users",
        UPDATE_USER: (userID) => `/api/users/${userID}`,
        DELETE_USER:(userID) => `/api/users/${userID}`,
    },

    TASKS: {
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", // Get Dashboard Data
    GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data", // Get User Dashboard Data
    GET_ALL_TASKS: "/api/tasks", // Get all Tasks (Admin: all, User: only assigned)
    GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`, // Get task by ID
    CREATE_TASK: "/api/tasks", // Create a new task (Admin only)
    UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, // Update task details
    DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, // Delete a task (Admin only)
    UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`, // Update task status
    UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo` // Update todo checklist
    },

    REPORTS: {
    EXPORT_TASKS: "/api/reports/export/tasks", // Download all tasks as an Excel file
    EXPORT_USERS: "/api/reports/export/users", // Download user-task report
    },

    IMAGE: {
    UPLOAD_IMAGE: "api/auth/upload-image"
    },

}