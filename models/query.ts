import mongoose from "mongoose";


const QuerySchema = new mongoose.Schema(
  {
    website: String,
    full_name: String,
    org: String,
    email: String,
    phone: String,
    query_type: String,
    msg: String,

  }
);

export default mongoose.models.Query || mongoose.model("Query", QuerySchema);
