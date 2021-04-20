import React from 'react'
import { TaskItem as TaskItem } from '../models/Task';

interface Props
{
    task: TaskItem;
    onDelete: any;
}

export const Task = ({task, onDelete}: Props) => {
    return (
        <div>
            <p>{task.text}</p>
            <button onClick={() => onDelete(task.id)}>X</button>
        </div>
    )
}

