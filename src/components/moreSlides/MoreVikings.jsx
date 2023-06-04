import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function MoreVikings() {
   return (
      <>
         <Card>
            <CardContent>
               <Typography variant="p" component="div">
                  Viking 1 and Viking 2 were a pair of NASA spacecraft sent to study Mars. Viking 1
                  launched in August 20, 1975 and landed on July 20, 1976 and Viking 2 launched on
                  September 9, 1975 and landed on September 3, 1976. They were the first spacecraft
                  to sucessfully land on Mars.
               </Typography>
               <Typography variant="p">
                  Both of the spacecraft were very similar and had similar discoveries. Both
                  spacecraft had a lander and an orbiter. The lander would study the Martian soil
                  and air while the orbiter provided communication with Earth. To study the ground,
                  a nutrient solution was injected to the ground and then monitored for any
                  metabolic activity. The exhange of gases between the soil and atmosphere was
                  studied. Soil was heated to detect any organic compounds. These experimments would
                  yield inconclusive results.
               </Typography>
               <Typography variant="p">
                  Although the results of the biology experiements were inconclusive, the Viking
                  missions provided cruical data on Martian environment, soil composition, and
                  atmospheric conditions.
               </Typography>
            </CardContent>
         </Card>
      </>
   );
}
