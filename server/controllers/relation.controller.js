const getResults = require('../utility/getResults');
//? send a request to another user.
export const sendRequest = async (req, res) => {
    try {
        const pending = await isPending();
        const alreadyFriends = await alreadyFriends();

        if (pending) {
            res.status(400).send({
                success: false,
                message: 'The request is pending.'
            });
        } else if (alreadyFriends) {
            res.status(400).send({
                success: false,
                message: 'You are already friends with this person.'
            });
        } else {
            const { sender, receiver } = req.body;

            if (!sender || !receiver) {
                return res.status(400).send({
                    success: false,
                    message: 'sender and receiver are required'
                });
            }

            const sql = /* sql */`
                insert into relation (sender, receiver, status)
                values (?, ?, 'p');
            `;

            const results = await getResults(sql, [sender, receiver]);

            if (results.length === 0) {
                return res.status(404).send({
                    success: false,
                    message: 'request not found'
                });
            }

            return res.status(200).send({
                success: true,
                message: 'successfuly canceled request',
                data: results
            })
        }
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'internal server error'
        });
    }
};
//? check to see if the request is pending
export const isPending = async (req, res) => {
    try {
        const { sender, receiver } = req.body;
        
        if (!sender || !receiver) {
            return res.status(400).send({
                success: false,
                message: 'sender and receiver are required'
            })
        }
        const sql = /* sql */`
            SELECT * FROM relation
            WHERE (
                status = 'p' AND sender=? AND receiver=?
            ) OR (
                status = 'p' AND receiver=? AND sender=?
            )
        `;

        const results = await getResults(sql, [sender, receiver, receiver, sender]);

        if (results.affectedRows === 0) {
            return res.status(404).send({
                success: false,
                message: 'no pending requests were found'
            });
        }

        return res.status(200).send({
            success: true,
            data: results
        })
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Server error" });
    }
};

//? get all of teh request from the database
export const getAllRequests = async (req, res) => {
    try {
        const { sender, receiver } = req.body;

        if (!sender || !receiver) {
            return res.status(404).send({
                success: false,
                message: 'sender and receiver are required'
            })
        }
        const sql = /*sql*/ `
            SELECT * 
            FROM requests 
            WHERE sender=? AND receiver=?
        `;

        const results = await getResults(sql, [sender, receiver]);

        if (results.affectedRows === 0) {
            return res.status(404).send({
                success: false,
                message: 'error getting requests'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'requests received successfully',
            data: results
        })
    } catch (err) {
        console.error(err);
    }
}

//? check if the users are already fiends.
export const alreadyFriends = async (req, res) => {
    try {
        const { sender, receiver } = req.body;

        if (!sender || !receiver) {
            return res.status(400).send({
                success: false,
                message: 'sender and receiver are required'
            });
        }
        const sql = /* sql */` 
            SELECT * 
            FROM relation 
            WHERE sender=? AND receiver=? AND status='f'
        `;

        const results = await getResults(sql, [sender, receiver]);

        if (results.affectedRows === 0) {
            return res.status(400).send({
                success: false,
                message: 'the users are not found'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'you are already friends with this person',
            data: results
        });
    } catch (err) {
        console.error(err);
    }
}

//? accept the request
export const accept = async (req, res) => {
    try {
        const { sender, receiver } = req.body;

        if (!sender || !receiver) {
            return res.status(400).send({
                success: false,
                message: 'sender and receiver are required'
            });
        }

        const sql = /* sql */`
            update relation
            set status = 'f'
            where sender=? and receiver=? and status='p'
        `;

        const results = await getResults(sql, [requestId]);

        if (results.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'request not found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'successfuly canceled request',
            data: results
        })
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'internal server error'
        });
    }
};

//? cancene the request
export const cancel = async (req, res) => {
    try {
        const { requestId } = req.params;

        if (!requestId) {
            return res.status(400).send({
                success: false,
                message: 'requestId is required'
            });
        }

        const sql = /* sql */`
            delete from relations where requestid = ?
        `;

        const results = await getResults(sql, [requestId]);

        if (results.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'request not found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'successfuly canceled request',
            data: results
        })
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'internal server error'
        });
    }
}