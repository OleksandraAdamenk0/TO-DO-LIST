import tasksModel from "../models/tasks.js";

const getHome = async (req, res) => {
    const allTasks = await tasksModel.getAllTasks();
    const completedTasks = await tasksModel.getCompletedTasks();
    const tasksAmount = allTasks.length;
    const completedTasksAmount = completedTasks.length;
    const percentage = completedTasksAmount / tasksAmount * 100;

    const rightColumnTasks = [];
    const leftColumnTasks = [];

    for (let i = 0; i < tasksAmount; i++) {
        const task = allTasks[i];

        const formattedTask = {
            id: task.id,
            title: task.title,
            completed: task.status,
        };

        if (task.datetime) {
            const dateObj = new Date(task.datetime);
            formattedTask.date = dateObj.toLocaleDateString('en-GB');
            formattedTask.time = dateObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        }

        if (i % 2 === 0) { rightColumnTasks.push(formattedTask); }
        else { leftColumnTasks.push(formattedTask); }
    }

    res.render('home', {statistic: {done: completedTasksAmount, all: tasksAmount, progressWidth: percentage},
                        rightColumn: rightColumnTasks, leftColumn: leftColumnTasks
    });
}

export default getHome;