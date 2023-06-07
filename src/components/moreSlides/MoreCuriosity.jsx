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
                  reach the red planet. Curiosity's initial two-year mission was extended
                  indefinitely and countinues to operate to this day.
               </Typography>
               <Typography variant="p" component="div">
                  The Curiosity rover is much larger than previous Mars rovers. It weights about
                  899kg and is about as large as a car. It's able to scale to uneven surface of Mars
                  with it's six wheels.It has many advanced scientific instruments to study the
                  Martian environment. Some of these instruments include a 3d camera, laser-induced
                  breakdown spectrometer and remote micro-imager, and radiation assessment detector.
               </Typography>
               <Typography>
                  Curiosity has made many discoveries of Mars. It has found evidence of the presence
                  of water, organic molecules, and essential elements to support life. It has
                  detected levels of methane in the atmosphere, implying there has been some
                  biological activity. In the ancient lakebed of Gale Crater, it has found
                  sedimentary rocks which could have been formed by the lake. It has climbed 5km
                  high Mount Sharp in Gale Crater and encounted distinct layers of sedimentary rock.
               </Typography>
            </CardContent>
         </Card>
      </>
   );
}
