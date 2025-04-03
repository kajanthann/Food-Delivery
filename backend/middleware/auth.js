import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
    const token = req.headers.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        
        // Initialize req.body if it's undefined
        req.body = req.body || {}; // ✅ Fixes "Cannot set userId on undefined"
        req.body.userId = tokenDecode.id; // Attach userId to req.body
        
        next(); // Proceed to the next middleware/route
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default authMiddleware;