const Task = require("../models/Task")

// @desc    Get all tasks (Admin: all, User: only assigned tasks)
// @router  GET /api/tasks/
// @access  Private
const getTasks = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

// @desc    Get task by ID
// @router  GET /api/tasks/:id
// @access  Private
const getTasksById = async (req, res) => {};

// @desc    Get a new task
// @router  GET /api/tasks/
// @access  Private
const createTask = async (req, res) => {
    try {
        const {
            title,
            description,

        } = req.body
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
};

// @desc    Update task details
// @router  GET /api/tasks/
// @access  Private
const updateTask = async (req, res) => {};

// @desc    Delete a task
// @router  GET /api/tasks/:id
// @access  Private
const deleteTask = async (req, res) => {};

// @desc    Update task status
// @router  GET /api/tasks/:id/status
// @access  Private
const updateTaskStatus = async (req, res) => {};

// @desc    Update task Checklist
// @router  GET /api/tasks/:id/todo
// @access  Private
const updateTaskChecklist = async (req, res) => {};

// @desc    Dashboard Data (Admin Only)
// @router  GET /api/tasks/:id/status
// @access  Private
const getDashboardData = async (req, res) => {};

// @desc    Dashboard Data (user-specific)
// @router  GET /api/tasks/user-dashboard-data
// @access  Private
const getUserDashboardData = async (req, res) => {};

module.exports = {
    getTasks,
    getTasksById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateTaskChecklist,
    getDashboardData,
    getUserDashboardData,
}

