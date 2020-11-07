const Datastore = require("nedb-promise");
const subscriptions = new Datastore({
  filename: "./db/subscriptions.db",
  autoload: true,
});
const Cryptr = require("cryptr");
require("dotenv/config");
const cryptr = new Cryptr(process.env.SECRET);
const { streamsDB } = require("./Stream");

module.exports = {
  setSubscriptions(tags, userID) {
    const newTags = tags.map(async (tag) => {
      const streams = await streamsDB.find({ tag });
      await subscriptions.insert(
        streams.map((stream) => {
          const newStream = {
            tag: stream.tag,
            date: stream.date,
            userID,
            content: stream.content,
          };
          return newStream;
        })
      );
    });

    return newTags;
  },

  async getSubscriptions(userID) {
    const streams = await subscriptions.find({ userID });
    return streams.map((stream) => {
      const newStream = {
        tag: stream.tag,
        date: stream.date,
        userID,
        content: cryptr.decrypt(stream.content),
      };
      return newStream;
    });
  },
};
