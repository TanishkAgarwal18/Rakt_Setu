const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./utils/db");
const cron = require("node-cron");
const {sendDetailsProspectEmail} = require("./Emailservices/sendDetailsProspect");
const {sendEligibilityEmail}= require("./Emailservices/sendEligibilityEmail");
const {sendBloodDonationReminder} = require("./Emailservices/sendBloodDonationReminder");
const  {sendDonorDetailsEmail}  = require("./Emailservices/sendDonorDetailsEmail");
dotenv.config();

//SERVER
const PORT = process.env.PORT;

//schedule task

const run = () => {
  cron.schedule("* * * * * *", async () => {
    await sendDetailsProspectEmail();
    await sendEligibilityEmail();
   await  sendBloodDonationReminder();
    await sendDonorDetailsEmail();
  });
}

run();

app.listen(PORT, () => {
  console.log(`Backgroundservices is running on ${PORT} `);
  dbConnection();
});
