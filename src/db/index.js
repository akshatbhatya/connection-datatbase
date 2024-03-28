import mongoose from "mongoose"
import DB_NAME from "../contants.js"

const connectDb = async () => {
  try {
    const data = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log("mongodb is connected", `${data.connection.host}`)
  } catch (err) {
    console.log("mongo db error", err)
    process.exit(1)
  }
}

export default connectDb
