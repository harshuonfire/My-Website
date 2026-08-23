const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1688653802629-5360086bf632?q=80&w=1332&auto=format&fit=crop";

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: DEFAULT_IMAGE,
      set: (v) => (v === "" ? DEFAULT_IMAGE : v),
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;