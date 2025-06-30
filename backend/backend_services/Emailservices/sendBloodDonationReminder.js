const ejs = require("ejs");
const dotenv = require("dotenv");
const Donor = require("../models/Donor"); 
const Prospect = require("../models/Prospect");
const sendMail = require("../helpers/sendmail");

dotenv.config();

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};

const sendBloodDonationReminder = async()=>{
   
    const donors = await Donor.find();
    if(donors.length>0){
        for(let donor of donors){
            //calculate the difference between donor date and todays date
            const donorDate = new Date(donor.date);
            const today = new Date();
            const diffTime = Math.abs(today-donorDate);
            const diffDays = Math.ceil(diffTime/(1000*60*60*24));

            if(diffDays>60){
                ejs.renderFile(
                    "templates/BloodDonationReminder.ejs",
                    {
                        name : donor.name,
                        date : donor.date
                    },
                    async (err,data)=>{
                        let messageoption = {
                          from: process.env.EMAIL,
                           to: donor.email,
                          subject: "Namaskaram, Rakt Setu Donor.",
                           html: data,
                        };



                        try{
                           await sendMail(messageoption);
                            const formattedDate = formatDate(today);
                            await Donor.findByIdAndUpdate(
                                donor._id,
                                {
                                    $set:{date:formattedDate}
                                }
                            )

                        }catch(error){
                          console.log(error)
                        }
                    }
                );
            }
        }
    }
}

module.exports ={sendBloodDonationReminder};