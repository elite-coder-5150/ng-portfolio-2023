import { db } from '../server';
import { validationResult } from 'express-validator';

export const createComponent = async (req, res) => {
    try {
        const { component_name, author, version, type, description } = req.body;
        const created_date = new Date()
                                    .toISOString()
                                    .slice(0, 19)
                                    .replace('T', ' ');

        req.checkBody('created_date', 'Created date must be a valid Date').isDate();
        req.checkBody('component_name', 'Component name must be a valid string').isString();
        req.checkBody('component_id', 'Component id must be a valid string').isString();
        req.checkBody('component_type', 'Component type must be a valid component type').isEnum();
        req.checkBody('version', 'Version must be a valid string').isString();
        req.checkBody('type', 'Component type must be a valid type').isEnum();
        req.checkBody('description', 'Version must be a valid string').isString();

        const errors = req.validationErrors();

        if (errors) {
            return res.status(400).json({ error: errors });
        }   

        const sql = /* sql */ `
            INSERT INTO components
            (component_id, author, version, description, type, updated_date, created_date) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        try {
            const results = await new Promise((resolve, reject) => {
                db.query(sql, [component_id, author, version, description, type, updated_date, created_date], (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });

            if (results.affectedRows == 0) {
                res.status(500).send({ success: false, err: err.message })
            } else {
                res.status(200).send({ success: true, message: 'successfully create a new component'})
            }
        } catch (error) {
            console.log(error);
        }

    } catch (error) {
        console.error(error);
    }
};