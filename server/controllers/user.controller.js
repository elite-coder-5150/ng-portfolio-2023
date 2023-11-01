import { db } from '../server';

const bcrypt = require('bcrypt');

export const getAllUsers = async (req, res) => {
    try {
        const sql = /** sql */`SELECT * FROM users`;
        db.query(sql, (err, results) => {
            if (err) {
                throw err;
            }

            if (results.length == 0) {
                res.status(404).send('No users found');
            } else {
                res.status(200).send(results);
            }
        })
    } catch (err) {
        console.error(err);

    }
};

export const getSingleUser = async (req, res) => {
    const { id } = req.params;

    db.query('SELECT * FROM users WHEREid=?', [id], (err, results) => {
        if (err) {
            throw err;
        }

        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).send ('user not found');
        }
    })
};

// register a new user
export const registerUser = async (req, res) => {
    const { name, email, password } = req.params;

    try {
        const hashPass = await bcrypt.hash(password, 10);

        const sql = `INSERT INTO users (name, email, password) VALUES(?, ?, ?)`;

        db.query(sql, [name, email, password], (err, result) => {
            if (err) {
                res.status(500).send('error registering user');
            } else {
                res.status(201).send('user registered successfully')
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).send('server error');
    }
}

export const updateUser = (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;

    try {
        const sql = /* sql */`UDPATE users SET name=?, email=? where id=?`;

        db.query(sql, [name, email, userId], (err, result) => {
            if (err) {
                res.status(400).send('error updating user');
            } else if (result.affectedRows > 0) {
                res.send('user updated successfully');
            } else {
                res.status(404).send('user not found');
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('server error');
    }
};

export const deleteUser = (req, res) => {
    const userId = req.params.id;

    try { 
        const sql = `DELETE FROM users WHERE id=?`;

        db.query(sql, [userId], (err, result) => {
            if (err) {
                res.status(400).send('error deleting user');
            } else if (result.affectedRows > 0) {
                res.send('user deleted successfully');
            } else {
                res.status(404).send('user not found');
            }
        })
    } catch (err) {
        console.error(err);
        res.status (500).send('internal server error');
    }
};