const Datastore = require("nedb-promise");
const streamsDB = new Datastore({
  filename: "./db/streams.db",
  autoload: true,
});
const { users } = require("./User");
const Cryptr = require("cryptr");
require("dotenv/config");
const cryptr = new Cryptr(process.env.SECRET);

// const streamsData = require("../data/streams.json");

// Comment out DB insert to intially insert data
// streamsData.streams.forEach((stream) => {
//   streamsDB.insert({
//     content: cryptr.encrypt(stream.content),
//     date: stream.date,
//     tag: stream.tag,
//   });
// });

module.exports = {
  async getUserStreams(userID) {
    const user = await users.findOne({ _id: userID });
    if (!user) return;
    const subscriptions = user.subscriptions.map(async (sub) => {
      const streams = await streamsDB.find({ tag: sub });
      return streams.map((stream) => {
        return {
          tag: stream.tag,
          date: stream.date,
          content: cryptr.decrypt(stream.content),
        };
      });
    });
    return subscriptions;
  },
  streamsDB,
};
