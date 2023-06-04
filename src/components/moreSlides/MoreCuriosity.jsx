import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function MoreCuriosity() {
   return (
      <>
         <Card>
            <CardContent>
               <Typography variant="p" component="div">
                  NASA launched Curiosity rover from Cape Canaveral Air Force Station, Florida on
                  November 26, 2011. It landed on August 5, 2012 after eight months and 10 days to
                  reach the red planet.
               </Typography>
               <Typography variant="p" component="div">
                  The Curiosity rover is much larger than previous Mars rovers. It weighs about 899
                  kilograms and is about as large as a car. It has the ability to roll over
                  obstacles up to 25 inches high and travel about 660 feet per day. It has advanced
                  scientific intruments to study the terrain of Mars. Some of these instruments
                  include the Chemistry and Mineralogy instrument which identifies and analyzes
                  soils.
               </Typography>
               <Typography variant="p" component="div">
                  Over the years, Curiosity has made several important discoveries. It has found
                  evidence of ancient streambeds, round pebbles, and sedimenntary rock layers that
                  suggest the existence of flowing water. It has detected organic molecules in the
                  Martian soil. Methane gas has been detected which raises questions on how this gas
                  came to Mars. Overall, it's discoveries have improved our understanding of Mars
                  and the planet's habitability.
               </Typography>
            </CardContent>
         </Card>
      </>
   );
}
