const Datastore = require("nedb-promise");
const subscriptions = new Datastore({
  filename: "./db/subscriptions.db",
  autoload: true,
});
const Cryptr = require("cryptr");
require("dotenv/config");
const cryptr = new Cryptr(process.env.SECRET);
const { users } = require("./User");
const { streamsDB } = require("./Stream");

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
    if (!user) return;
    return user.subscriptions.map(async (sub) => {
      return await streamsDB.find({ tag: sub });
    });
  },

  async removeStream(userID) {
    const stream = await subscriptions.findOne({ userID });
    return await subscriptions.remove(stream);
  },
};
