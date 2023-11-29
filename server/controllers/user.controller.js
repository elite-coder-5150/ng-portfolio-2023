import { getResults } from '../utility/getResults';
const bcrypt = require('bcrypt');


export const getAllUsers = async (req, res) => {
    try {
        const sql = /* sql */`
            select u.u_name, u.email, u.profile_pic from users as u
        `;

        const results = await getResults(sql);

        return results.status(200).send({
            success: true,
            message: 'successfully retrieved all users',
            data: results
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({success: false, message: 'Internal Server Error'});
    }
};

export const getSingleUser = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).send({
                success: false,
                message: 'User id is required'
            });
        }

        const sql = /* sql */`
            select u.u_name, u.email, u.profile_pic 
            from users as u
            where u_id = ?
        `;

        const user = await getResults(sql, [userId]);

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'user not found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'succcessfully retrieved user',
            data: user
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false, 
            message: 'Internal Server Error'
        })
    }
};


//? register a new user
export const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        if (!username || !password || !email) {
            return res.status(400).send({
                success: false,
                message: 'username, password and email are required'
            })
        }

        const hashPass = await bcrypt.hash(password, 10);

        const sql = /* sql */`
            insert into users (username, password, email)
            values (?, ?, ?);
        `;

        const results = await getResults(sql, [username, hashPass, email]);

        return res.status(200).send({
            success: true,
            message: 'succcessfully registered user',
            data: results
        });
    } catch (err) {
        console.error(error);
        return res.status(500).send({
            success: false, 
            message: 'Internal Server Error'
        })
    }
}

//? update a user in the database
export const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const { username, email, password } = req.body;

        if (!userId || !username || !email || !password) {
            return res.status(400).send({
                success: false,
                message: 'User id, username email and password are required'
            })
        }

        const sql = /* sql */`
            update users
            set username=?, email=?, password=?
            where u_id=?
        `

        const results = await getResults(sql, [username, email, password])
    } catch (error) {
        console.error(error);
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

export const getAllComponentsFromUser = (req, res) => {
    const { c_id, c_author } = req.body;

    try {
        const sql = /* sql */ `
            select c_id, c_author from components where c_id=? and c_author=?
        `;
        db.query(sql, [c_id, c_author], (err, results) => {
            if (err) {
                console.error(err);
            } else if (results.length > 0) {
                res.status(200).send(results);
            } else {
                res.status(404).send({error: true, message: 'no component found'});
            }
        });
    } catch (err) {
        console.error(err);
    }
}