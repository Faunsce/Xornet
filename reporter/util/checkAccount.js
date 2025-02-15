const axios = require("axios");
const logger = require("./logger");
const settings = require("./settings");

module.exports = async function checkAccount(staticData, mute) {
  return new Promise(async (resolve) => {
    if (!mute) logger.info("accChk");
    try {
      let response = await axios.post(`${process.env.BACKEND_URL}/reporter`, {
        uuid: process.env.TEST_UUID || settings.getUUID(),
      });

      if (!mute) logger.info(response.data.message);
      staticData.reporter = {
        linked_account: response.data.account_uuid,
      };
      if (!mute) logger.info("authCmp");

      logger.info("restart");
      resolve();
    } catch (error) {
      if (!mute) logger.warn("svrDn");
      if (error.response.status == 403) {
        if (!mute) logger.warn(["goToURL", [`${process.env.FRONTEND_URL}/dashboard/machines/all?newMachine=${settings.getUUID()}`, "red"]]);

        // Retry after 10 sec
        setTimeout(async () => await module.exports(staticData, mute), 10000);
      }
    }
  });
};
