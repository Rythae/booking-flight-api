// exports.example = (req, res) => {
//   console.log("example");
//   res.send("Flight example");
// };
const { data } = require("../models/Flight");
const flightController = {};

flightController.getAll = (req, res) => {
  return res.json({ data });
};

flightController.create = (req, res) => {
  const { title, time, price, date } = req.body;
  const id = data.length ? data[data.length - 1].id + 1 : 1;
  const flight = { id, title, time, price, date };
  data.push(flight);
  return res.status(201).json({ data: flight, message: "New flight created" });
};

flightController.getOne = (req, res) => {
  const id = req.params.id;
  const foundFlight = data.find((flight) => {
    return String(flight.id) === id;
  });
  if (!foundFlight) {
    return res.status(404).json({ message: "Flight not found" });
  }
  return res.status(200).json({ data: foundFlight });
};

flightController.updateOne = (req, res) => {
  const id = req.params.id;
  const flightIndex = data.findIndex((flight) => Number(id) === flight.id);
  const { title, time, price, date } = req.body;
  const foundFlight = data[flightIndex];
  data[flightIndex] = {
    id: foundFlight.id,
    title: title || foundFlight.title,
    time: time || foundFlight.time,
    price: price || foundFlight.price,
    date: date || foundFlight.date,
  };

  if (!foundFlight) {
    return res.status(404).json({ message: "Flight not found" });
  }
  return res.status(200).json({ data: data[flightIndex] });
};

flightController.deleteOne = (req, res) => {
  const id = req.params.id;
  const flightIndex = data.findIndex((flight) => Number(id) === flight.id);
  const deleteFlight = data.splice(flightIndex, 1);
  return res
    .status(200)
    .json({ data: deleteFlight, message: "Flight deleted" });
};

module.exports = flightController;
