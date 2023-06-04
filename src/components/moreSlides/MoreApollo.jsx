import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
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
                  would be the first humans step foot on the moon. Armstrong famously said, "That's
                  one small step for man, one giant leap for mankind."
               </Typography>
               <img id="firstImg" src={pic}></img>
               <Typography variant="p" component="div">
                  
               </Typography>
               <Typography variant="p" component="div">

               </Typography>
            </CardContent>
         </Card>
      </>
   );
}
