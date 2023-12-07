import { getResults } from "../utility/getResults";




export const getAllComponents = async (req, res) => {
    try {
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