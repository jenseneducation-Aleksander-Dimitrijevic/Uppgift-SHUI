const Datastore = require("nedb-promise");
const streamsDB = new Datastore({
  filename: "./db/streams.db",
  autoload: true,
});
const Cryptr = require("cryptr");
require("dotenv/config");
const cryptr = new Cryptr(process.env.SECRET);

// const streamsData = require("../data/streams.json");

// streamsData.streams.forEach((stream) => {
//   streamsDB.insert({
//     id: Date.now(),
//     content: cryptr.encrypt(stream.content),
//     tag: stream.tag,
//   });
// });

// Comment out DB insert to intially insert data
module.exports = {
  async getAllStreams() {
    const streams = await streamsDB.find({});
    streams.forEach((stream) => {
      cryptr.decrypt(stream.content);
    });
    return streams;
  },
};
