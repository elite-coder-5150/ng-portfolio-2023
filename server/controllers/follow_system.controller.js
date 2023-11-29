const db = require('../server');
const { getResults } = require('../utility/getResults');

export const follow = async (req, res) => {
    try {
        const { sender, receiver } = req.body;

        if (!sender || !receiver) {
            return res.status(404).send({
                success: false,
                message: 'Sender and receiver are required'
            });
        }

        const sql = /* sql */`
            insert into follow_system (follow_id, sender_id, receiver_id, since)
            values (?, ?, ?, now())
        `;

        const results = await getResults(sql, [id]);

        if (results.affectedRows === 0) {
            return res.status(404).send({
                success: false,
                error: 'Error created follower'
            });
        }

        return results.status(200).send({
            success: true,
            message: 'follow successful',
            data: results
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({success: false, message: 'Internal Server Error'});
    }
}

export const unfollow = async (req, res) => {
    try {
        const { sender, receiver } = req.body;

        if (!sender || !receiver) {
            return res.status(404).send({
                success: false,
                message: 'Sender and receiver are required'
            })
        }

        const sql = /* sql */ `
            delete from follow_system
            where sender_id = ? and receiver_id = ?
        `;

        const results = await getResults(sql, [sender, receiver]);

        if (results.affectedRows === 0) {
            return res.status(404).send({
                success: false,
                message: 'Error unfollowing'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'unfollow successful',
            data: results
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({success: false, message: 'Internal Server Error'});
    }
}

export const getFollowers = async (req, res) => {
    try {
        const { userId } = req.params;

        const sql = /* sql */`
            select 
                fs.follow_id, 
                fs.sender_id, 
                fs.receiver_id, 
                fs.sinse, 
            from follow_system as fs
            where receiver_id = ?
        `;

        const results = await getResults(sql, [userId]);

        return res.status(200).send({
            success: true,
            data: results
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false, 
            message: 'Internal Server Error'
        });
    }
};


export const getFollowing = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(404).send({
                success: false,
                message: 'userId is required'
            });
        }

        const sql = /* sql */`
            select fs.sender_id 
            from follow_system fs
            where fs.sender_id = ?
        `;

        const results = await getResults(sql, [userId]);

        if (results.affectedRows === 0) {
            return res.status(404).send({
                success: false,
                message: 'error retrieving the people you are following'
            })
        }

        return res.status(200).send({
            success: true,
            data: results
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false, 
            message: 'Internal Server Error'
        });
    }
};

export const updateFollowStatus = async (req, res) => {
    try {
        const { sender, receiver, status } = req.body;

        const sql = /* sql */ `
            update follow_system
            set status = ?
            where sender_id = ? and receiver_id = ?
        `;

        const results = await getResults(sql, [status, sender, receiver]);

        return res.status(200).send({
            success: true,
            message: 'Follow status updated successfully',
            data: results
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false, 
            message: 'Internal Server Error'
        });
    }
};