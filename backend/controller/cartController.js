import userModel from '../models/userModel.js'

// add items to user cart
const addToCart = async (req, res) => {
    try {
        // Find the user by ID
        let userData = await userModel.findById(req.body.userId);

        // Check if user exists
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        // Ensure cartData is an object
        let cartData = userData.cart;

        // Add or increment item in the cart
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        // Update user's cart in database
        await userModel.findByIdAndUpdate(req.body.userId, { $set: { cart: cartData } });

        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.error("Error in addToCart:", error);
        res.json({ success: false, message: "Error adding to cart" });
    }
};
// remove items to user cart
const removeFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cart;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1
        }
        await userModel.findByIdAndUpdate(req.body.userId, { $set: { cart: cartData } })
        res.json({success:true,message:"Removed from cart"})
    } catch (error) {
        console.log(error);
        res.json({success:true,message:"Error"})
        
    }
}

// fetch user cart data
const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cart;
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

export {addToCart,removeFromCart,getCart}