import React from 'react'
import {Task} from './Task';
import {TaskItem} from '../models/Task';

interface TasksProps {
    tasks: TaskItem[];
    onDelete: any;
}

 export const Tasks = ({ tasks, onDelete }: TasksProps) => {
    return (
        <div>
            {
                tasks.map((task, index) => {
                    return <Task key={task.id} onDelete={onDelete} task={task} />
                })
            }
        </div>
    )
}
