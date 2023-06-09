import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import pic from "../../assets/FirstMoonLanding.jpeg";

<div className="" />;
export default function MoreApollo() {
   return (
      <>
         <Card>
            <CardContent>
               <Typography variant="p" component="div">
                  Apollo 11 launched from Kennedy Space Center in Florida on July 16, 1969 with a
                  Saturn V rocket. The Lunar Model, named Eagle, seperated from the Command Module
                  (Columbia) and landed on the Moon on July 20, 1969. Neil Armstrong and Buzz Aldrin
                  would explore the moon and conduct experiments several hours after landing. They
                  would leave the moon using the Lunar Module and rendezvous with Command Module
                  which has orbiting the moon with Michael Collins.
               </Typography>
               <img id="cardImg" src={pic}></img>
               <Typography variant="p" component="div">
                  Neil Armstrong and Buzz Aldrin would be the first humans step foot on the moon.
                  Armstrong famously said, "That's one small step for man, one giant leap for
                  mankind." Neil Armstrong and Buzz Aldrin would spend about 2.5 hours outside the
                  Lunar Module. They would set up scientifc instruments on the moon to record
                  seismic activity and laser reflectors to percisely record the distance between the
                  earth and moon. They would collect about 47.5 pounds of lunar rocks and soil. The
                  experiments carried out by Armstrong and Aldrin help us understand the geology of
                  the moon.
               </Typography>
               <Typography variant="p" component="div"></Typography>
            </CardContent>
         </Card>
      </>
   );
}
