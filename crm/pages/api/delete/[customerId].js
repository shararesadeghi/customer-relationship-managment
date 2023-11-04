import connectDB from "./../../../utils/connectDB";
import Customer from "./../../../models/Customer";

export default async function handler(req, res) {
  try {
    await connectDB();
    console.log("Conntected to DB");
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
  }

  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({ status: "success", message: "Data Deleted" });
    } catch (err) {
      console.log(err.message);
      res
        .status(500)
        .json({ status: "failed", message: "Error in deleting data" });
    }
  }
}
