import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1] // "Bearer TOKEN"
        if (!token) {
            return res.status(401).json({ message: 'not auth' })
        }
        let decodedData;
        if (token){
            decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            req.userId = decodedData?.id
        }

        next()
    } catch (error) {
        console.log(error)
    }
} 

export default auth