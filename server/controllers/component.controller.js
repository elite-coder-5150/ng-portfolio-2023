import { getResults } from "../utility/getResults";

export const getAllComponents = async (req, res) => {
    try {
        const { u_id } = req.params.id;

        if (!u_id) {
            return res.status(400).send({
                success: false,
                message: "User id is required"
            });
        }
        const sql = /* sql */`
            select * from components
        `;

        const results = await getResults(sql);

        if (results.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'no components found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'successfully retrieved components',
            data: results
        })
        
    } catch (error) {
        console.error(error);

        return res.status(500).send({
            success: false,
            message: 'internal server error',
        });
    }
}

export const createComponent = async (req, res) => {
    try {
        const { u_id, c_id } = req.params;

        const {
            c_name, c_author, c_version, c_description, 
            c_type, c_created_at, c_updated_at 
        } = req.body;

        if (!u_id || !c_id) {
            return res.status(400).send({
                message: 'user id and component id are required'
            })
        }
    } catch (error) {
        console.error(error);

        return res.status(500).send({
            success: false,
            message: 'internal server error',
        })
    }
};

export const updateComponent = async (req, res) => {
    try {
        const { c_id } = req.params;

        const { 
            c_name, c_author, c_version, c_description, 
            c_type, c_created_at, c_updated_at 
        } = req.body;

        

        if (!c_name, !c_author, !c_version, !c_description,
            !c_type, !c_created_at, !c_updated_at) {
            res.status (500).send({
                success: false,
                message: 'all fields are required'
            });
        }

        const sql = /* sql */`
            update components
            set c_name=?, c_author=?, c_version=?, c_description=?, 
                c_type=?, c_created_at=?, c_updated_at=? c_updated_at=?
            where c_id?
        `;

        const results = await getResults(sql, [
            c_name, c_author, c_version, c_description, 
            c_type, c_created_at, c_updated_at
        ]);


    } catch (error) {
        console.error(error);

        res.status(500).send({
            success: false,
            message: 'internal server error',
        });
    }
};

export const deleteComponent = async (req, res) => {
    try {
        const { c_id } = req.params;

        if (!c_id) {
            return res.status(400).send({
                success: false,
                message: 'Component id is required.'
            });
        }

        const sql = /* sql */`
            delete from components
            where c_id = ?
        `;

        const result = await getResults(sql);

        if (result.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'No results found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'successfully deleted'
        })
    } catch (error) {
        console.error(error);

        return res.status(500).send({
            success: false,
            message: 'internal server error'
        });
    }
}