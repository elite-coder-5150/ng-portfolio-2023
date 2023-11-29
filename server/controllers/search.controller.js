import { db } from '../server.js'

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