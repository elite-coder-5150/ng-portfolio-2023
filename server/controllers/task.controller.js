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
        res.status(500).json({error: 'query execution error'});
    }
}

 export const getSingleTask = (req, res) => {
    const { id } = req.params;

    db.query(`SELECT * FROM tasks WHER id=?`, [id], (err, results) => {
        if (err) {
            throw err;
        }

        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).send('task not found');
        }
    })
 }

 export const addTask = (req, res) => {
    const { title, description } = req.body;

    const sql = `INSERT INTO tasks (title, description) VALUES(?, ?)`;
    db.query(sql, [title, description], (err, result) => {
        if (err) {
            throw err;
        }

        res.status(201).send('task added successfully');
    })
 }

 export const updateTask = (req, res) => {
    const {id, title, description} = req.body;

    const sql = `UPDATE tasks SET title = ? WHERE id = ? AND description = ? WHERE id = ?`;

    db.query(sql, [title, description, id], (error, results) => {
        if (error) {
            throw error;
        }

        if (results.affectedRows > 0) {
            res.send('task updated successfully');
        } else {
            res.status(404).send('Task not found');
        }
    });
 }

 export const deleteTask = (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FORM tasks WHERE id = ?`;

    db.query(sql, [id], (error, results) => {
        if (error) {
            throw error;
        }

        if (results.affectedRows > 0) {
            res.send('task deleted successfully');
        } else {
            res.send(404).send('Task not found');
        }
    })
 }