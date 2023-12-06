import {getResults} from "../utility/getResults";

export const getAllTasks = async (req, res) => {
    try {
        const sql = /* sql */`
            select * from tasks 
        `;

        const results = await getResults(sql);

        return res.status(200).send({
            message: 'retrieved all the tasks successfully',
            rows: results

        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'internal server error'
        })
    }
}

 export const getSingleTask = async (req, res) => {
    try {
        const { taskId } = req.params;

        if (!taskId) {
            return res.status(404).send({
                success: false,
                message: 'Task id is required'
            });
        }

        const sql = /* sql */`
            select 
                t.task_id, 
                t.title, 
                t.description, 
                t.assignee, 
                t.due_date,
                t.priority,
                t.status,
                t.modified_date,
                t.created_date 
            from tasks t
            where t.task_id = ?
        `;

        const tasks = await getResults(sql, [taskId])
        
        if (tasks.length === 0) {
            return res.status(400).send({
                success: false,
                message: 'Task not found'
            })
        }

        return res.status(200).send({
            tasks
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Internal Server Error'
        });
    }
 }

 export const addTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { 
            title, description, assignee, due_date, 
            priority, status, modified_date, created_date 
        } = req.body;
        
        if (!taskId) {
            res.status(400).send({
                success: false,
                message: 'Task id is required'
            })
        }
        if (!title || !description || !assignee || !due_date || 
            !priority || !status || !modified_date, !created_date) {
            return res.status(400).send({
                success: false,
                message: 'all fields are required'
            });
        }

        const sql = /* sql */`
            insert into tasks (title, description, assignee, due_date, priority, status, modified_date, created_date)
            values (?, ?, ?, ?, ?, ?, ?)
        `;

        const results = await getResults(sql, [
            title, description, assignee, due_date, 
            priority, status, modified_date, created_date
        ]);

        if (!results.length) {
            return res.status(400).send({
                success: false,
                message: 'error executing query'
            });
        }

        return res.status(200).send({
            success: true,
            messagege: 'task successfully inserted successfully',
            data: results
        });
    } catch (err) {
        console.error(err);

        res.status(500).send({
            success: false,
            message: 'internal server error'
        });
    }
 }

 // todo: these methods need refactored.
 export const updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { 
            title, description, assignee, due_date, 
            priority, status, modified_date, created_date 
        } = req.body;

        if (!taskId) {
            return res.status(400).send({
                success: false,
                message: 'task id is required'
            });
        }

        if (!title || !description || !assignee || !due_date || 
            !priority || !status || !modified_date, !created_date) {
            return res.status(400).send({
                success: false,
                message: 'all fields are required'
            });
        }

        const sql = /* sql */`
            update tasks
            set title=?, description=?, assignee=?, due_date=?, priority=?, status=?, modified_date=?, created_date=?, updated_date=
            where taskId=?
        `;

        const results = await getResults(sql, [
            title, description, assignee, due_date, 
            priority, status, modified_date, created_date
        ])

        if (results.affectedRows === 0) {
            return res.status(400).send({
                success: false,
                message: 'error updating fields'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'update successfully updated fields',
            data: results
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'internal server error'
        });
    }
 }

 export const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;

        if (!taskId) {
            return res.status(400).send({
                success: false,
                message: 'task id is required'
            });
        }


        const sql = /* sql */`
            delete from tasks
            where task_id = ?
        `;

        const results = await getResults(sql, [taskId]);

        if (results.affectedRows === 0) {
            return res.status(404).send({
                success: false,
                message: 'task not found'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'task successfully deleted',
        });
    } catch (error) {
        console.error(error);

        return res.status(500).send({
            success: false,
            message: 'internal server error'
        })
    }
 }