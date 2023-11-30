import { getResults } from "../utility/getResults";




export const getAllComponentsFromUser = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).send({
                success: false,
                message: 'user id is requried'
            });
        }

        
    } catch (error) {
        console.error(error);
    }
}