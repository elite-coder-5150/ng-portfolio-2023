import { db } from '../server';
export const getAllTasks = async (req, res) => {
    try {
        db.query("SELECT * FROM tasks", (err, results) => {
            if (err) {
                console.error('error executing the query: ' + err);
                return res.status(500).json({error: 'query execution error'});
            }

            db.close();

            res.status(200).json({tasks: results });
        })
    } catch (e) {
        console.error('error executing the query: ' + e);
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