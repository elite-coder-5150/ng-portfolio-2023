import { db } from '../server.js'

// TODO : refactor this crap! 
/**
 * 
 * 
 * @param {*} req  - the request object
 * @param {*} res - the response object
 */
export const searchUsers = async (req, res) => {
    const { value } = req.params;

    try {
        const user_sql = /* sql */ `
            select u_id, u_name 
            from users 
            where u_name 
            ilike %1 order by id limit 8
        `;
        const userResults = await db.query(user_sql, [`%${value}%`]);

        if (userResults.length == 0) {
            res.status(404).send({error: true, message: 'User not found'});
        } else {
            res.status(200).send({userResults});
        }
    } catch (err) {
        console.error(err);
    }
}

export const searchComponentByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const sql = /* sql */ `
            select category from components where category=?
        `;

        const result = await db.query(sql, [category], (err, result) => {
            if (err) {
                throw err;
            } else if (result.affectedRows >= 1) {
                res.status(200).send(result);
            } else {
                res.status(404).send({error: true, message: result.message});
            }
        });
    } catch (err) {
        console.error(err);
    }
};

//? ---------------------------------------------------------------------------
const express = require('express');
const router = express.Router();

const { queryDb } = require('../database'); // Import your database query function

router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ success: false, message: 'Search query parameter "q" is required.' });
    }

    const sql = /* sql */`
      SELECT * FROM articles
      WHERE MATCH(title, content) AGAINST(? IN BOOLEAN MODE)
    `;

    const results = await queryDb(sql, [q]);

    return res.status(200).json({ success: true, data: results });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
