import React, { createContext, useContext, useEffect, useState } from 'react';

import { createTaskService } from '../services/create-task-service';
import { updateTaskService } from '../services/update-task-service';
import { deleteTaskService } from '../services/delete-task-service';
import { getAllTasksService } from '../services/get-all-tasks';

export const TaskContext = createContext(null);

export function TaskContextProvider({ children }) {
    const [tasks, setTasks] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllTasks();
    }, []);

    const getAllTasks = async () => {
        try {
            setLoading(true);
            const tasks = await getAllTasksService();
            setTasks(tasks);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const createTask = async ({ title }) => {
        try {
            setLoading(true);
            await createTaskService({ title });
            await getAllTasks();
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const updateTask = async ({ id, finished }) => {
        try {
            setLoading(true);
            await updateTaskService({ id, finished });
            await getAllTasks();
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const deleteTask = async ({ id }) => {
        try {
            setLoading(true);
            await deleteTaskService({ id });
            await getAllTasks();
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <TaskContext.Provider value={{ loading, error, tasks, getAllTasks, createTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('Precisa estar envolvido dentro de TaskContextProvider');
    }
    return context;
};
