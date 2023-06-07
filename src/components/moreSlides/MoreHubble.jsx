import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function MoreHubble() {
   return (
      <>
         <Card>
            <CardContent>
               <Typography variant="p" component="div">
                  The Hubble Space Telescope was launched with the Space Shuttle Discovery on April
                  24, 1990 at the Kennedy Space Center in Florida, USA. When the space shuttle was
                  in orbit, the telescope was released from it and entered low Earth orbit. Five
                  missions have been done to make repairs and upgrades sinced Hubble launched.
                  Hubble still orbits around the earth and provides some of the most detailed images
                  we have seen of space.
               </Typography>
               <Typography variant="p" component="div">
                  Hubble has a clear and unobstructed view of the universe because it's high above
                  the Earth's atmosphere. With it's position and its large 2.4 meter mirror, it's
                  capable of taking high resolution observations across a wide range of wavelengths.
               </Typography>
               <Typography>
                  Hubble has made many groundbreaking discoveries and observations. These include:
                  <ul>
                     <li>Determining the age of the universe to be 13.8 billion years</li>
                     <li>Measuring the rate of universe's expansion (Hubble's Constant)</li>
                     <li>Investigating exoplanets and evidence of water vapor on them</li>
                     <li>Producing iconic images such as the Pillars of Creation</li>
                  </ul>
               </Typography>
            </CardContent>
         </Card>
      </>
   );
}
