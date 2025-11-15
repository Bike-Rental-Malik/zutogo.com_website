import mongoose from "mongoose";
const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "please provide email"],
        unique: true,
    }
})

export default mongoose.models.WaitingUsers || mongoose.model("WaitingUsers", listSchema);