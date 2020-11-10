const Datastore = require("nedb-promise");
const subscriptions = new Datastore({
  filename: "./db/subscriptions.db",
  autoload: true,
});
const Cryptr = require("cryptr");
require("dotenv/config");
const cryptr = new Cryptr(process.env.SECRET);
const { streamsDB } = require("./Stream");
const { users } = require("./User");

module.exports = {
  async setSubscriptions(tags, userID) {
    // const newTags = tags.map(async (tag) => {
    //   const streams = await streamsDB.find({ tag });
    //   await subscriptions.insert(
    //     streams.map((stream) => {
    //       const newStream = {
    //         tag: stream.tag,
    //         date: stream.date,
    //         userID,
    //         content: stream.content,
    //       };
    //       return newStream;
    //     })
    //   );
    // });

    // return newTags;

    const user = users.findOne({ _id: userID });
    if (!user) return;
    return await users.update(user, {
      $push: { subscriptions: { $each: tags } },
    });
  },

  async getSubscriptions(userID) {
    const user = await users.findOne({ _id: userID });
    // return streams.map((stream) => {
    //   const newStream = {
    //     tag: stream.tag,
    //     date: stream.date,
    //     userID,
    //     content: cryptr.decrypt(stream.content),
    //   };
    //   return newStream;
    // });
    if (!user) return;
    return user;
  },

  async removeStream(userID) {
    const stream = await subscriptions.findOne({ userID });
    return await subscriptions.remove(stream);
  },
};
