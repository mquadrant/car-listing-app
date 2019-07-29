"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
  // .connect(
  //     "mongodb+srv://emm:emm@cluster0-9jokw.gcp.mongodb.net/test?retryWrites=true&w=majority"
  // )
  .connect("mongodb://localhost/orders", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch(err => console.error("Could not connect to MongoDB Atlas...", err));
const orderSchema = new mongoose_1.default.Schema({
  name: String,
  noOfOrders: Number,
});
const Order = mongoose_1.default.model("Order", orderSchema);
async function getOrders() {
  const result = await Order.find();
  console.log(result);
  return result;
}
exports.getOrders = getOrders;
async function createOrder(payload) {
  console.log("result");
  const order = new Order(payload);
  const result = await order.save();
  console.log(result);
  console.log("Contact was saved to the database");
  return order;
}
exports.createOrder = createOrder;
exports.default = Order;
//# sourceMappingURL=mongo.js.map
