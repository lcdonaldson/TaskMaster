export const generateTasks = () => {
    const tasks = [];
    for (let i = 1; i <= 500; i++) {
      tasks.push({
        id: i,
        title: `Task ${i}`,
        dueDate: new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
        priority: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
        status: Math.random() > 0.5 ? "Pending" : "Completed",
      });
    }
    return tasks;
};