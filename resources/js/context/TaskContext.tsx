import * as React from "react";
import apiService from "../components/services/apiService";

interface TaskData {
    title: string;
    description: string;
    id: number;
    completed: 0 | 1;
    created_at: string;
    updated_at: string;
}

interface TaskContextType {
    taskList: TaskData[];
}

const TaskContext = React.createContext <TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC = ({ children }) => {
    const [taskList, setTaskList] = React.useState<TaskData[]>([]);

    const fetchTaskList = () => {
        apiService.get('get-task-list').then((res) => {
            console.log(res)
            setTaskList(res.data.data)
        })
    }

    React.useEffect(() => {
        fetchTaskList()
    }, [])

    return <TaskContext.Provider value={{ taskList}}>
        {children}
    </TaskContext.Provider>
}

export const useTaskContext = () => {
    const context = React.useContext(TaskContext);
    if (!context){
        throw new Error('useTaskContext must be used within a TaskProvider')
    }

    return context
};
