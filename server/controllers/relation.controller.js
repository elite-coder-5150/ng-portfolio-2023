import { db } from '../server';
import { validationResult } from 'express-validator';

export const request = async (req, res) => {
    try {
        req.checkBody('sender', 'Sender must be a valid user id').isInt();
        req.checkBody('receiver', 'Receiver must be a valid userid').isInt();

        const errors = req.validationResult();

        if (errors) {
            return res.status(400).json({ error: errors});
        }
        const { sender, receiver} = req.body;

        const pending = await isPending();
        if (pending) {
            res.status(400).json({error: err, message: 'request is pending'});
        } else {
            const sql = /* sql */ `
                INSERT INTO relation (from, to, status) 
                VALUES (:from, :to, :status)`;

            const results = await new Promise((resolve, reject) => {
                db.query(sql, [from, to, status], (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                    const friends = results.legnth > 0;
                    res.json({Friends: friends}); 
                });
            });
        }
    } catch (err) {
        console.error(err)
    }
}



//? check if the users are already fiends.
export const alreadyFriends = async (req, res) => {
    try {
        req.checkBody('sender', 'Sender must be a valid user id').isInt();
        req.checkBody('receiver', 'Receiver must be a valid userid').isInt();

        const errors = req.validationErrors();

        if (errors) {
            return res.status(400).json({ error: errors});
        }

        const { sender, receiver } = req.body;

        const sql = /* sql */` 
                SELECT * 
                FROM relation 
                WHERE receiver=? AND sender=? AND status='f'
            `;

        try {
            const results = await new Promise((resolve, reject) => {
                db.query(sql, [receiver, sender], (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                })
            });

            const friends = results.length > 0;
            res.json({ alreadyFriends: friends });
        } catch (err) {
            console.error(err);
            res.status(500).json({error: err});
        }
    } catch (err) {
        console.error(err);
    }
}

//? check to see if the request is pending
export const isPending = async (req, res) => {
    try {
        req.checkBody('sender', 'Sender must be a valid user id').isInt();
        req.checkBody('receiver', 'Receiver must be a valid userid').isInt();

        const errors = req.validationErrors();

        if (errors) {
            return res.status(400).json({ error: errors});
        }

        const { sender, receiver } = req.body;
        const sql = /* sql */`
            SELECT * FROM relation 
            WHERE (
                status = 'p' AND sender=? AND receiver=?
            ) OR (
                status = 'p' AND receiver=? AND sender=?
            )`;

        db.query(sql, [sender, receiver, receiver, sender], (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: "Server error" });
            } else {
                if (results.length > 0) {
                    res.json(results[0]);
                } else {
                    res.status(404).send({ success: false, error: 'No pending requests' });
                }
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Server error" });
    
    }
}

//? TODO: I need to add the recipocal relationship for the other user.
export const accept = async (req, res) => {
    try {
        req.checkBody('sender', 'Sender must be a valid user id').isInt();
        req.checkBody('receiver', 'Receiver must be a valid userid').isInt();

        const errors = req.validationErrors();

        if (errors) {
            return res.status(400).json({ error: errors});
        }

        const { sender, receiver } = req.body;

        const sql = /* sql */ `
            UPDATE relation SET status='f' WHERE status='p'
            AND from='?' AND  to='?'
        `;

        try {
            const results = await new Promise((resolve, reject) => {
                db.query(sql, [from, to], (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });

            if (results.affectedRows == 0) {
                res.status(500).send({ success: false, err: err.message});
            } else {
                res.status(200).send({ success: true, message: 'successfully added a new friend' });
            }
        } catch (err) {
            console.error(err);
        }
    } catch (err) {
        console.error(err);
    }
};

//? cancel the request.
//? the function is not finished.
export const cancel = async (req, res) => {
    try {
        req.checkBody('sender', 'Sender must be a valid user id').isInt();
        req.checkBody('receiver', 'Receiver must be a valid userid').isInt();

        const errors = req.validationErrors();

        if (errors) {
            return res.status(400).json({ error: errors});
        }

        //? not sure if i need this 
        // const { sender, receiver } = req.body;

        try {
            const results = await new Promise((resolve, reject) => {
                 // remove the request from the database.
                const sql = /* sql */ `
                    DELETE FROM relation where status='p'
                    AND sender=? AND receiver=?
                `;
                db.query(sql, [sender, receiver], (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });

            if (results.affectedRows == 1) {
                res.status(200).send({error: false, message: 'successfully cancelled the request'});
            } else {
                res.status(404).send({error: true, message: 'request not found'});
            }
        } catch (err) {
            res.status(500).send({error: err.error, message: 'internal server error'});
        }
    } catch (err) {
        console.error(err);
        
    }
}