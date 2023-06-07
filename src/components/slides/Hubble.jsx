import { Box, Button, Card, CardContent, List, ListItem, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import pic from "../../assets/hubble.jpeg";

export default function Hubble({ setShowMore }) {
   return (
      <>
         <Card>
            <CardContent>
               <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
                  Hubble Telescope
               </Typography>
               <Box
                  display="flex"
                  justifyContent="space-around"
                  sx={{ textAlign: "left", fontSize: "30px" }}>
                  <Box display="flex" flexDirection="column">
                     <ul>
                        <li>Launched on April 24, 1990</li>
                        <li>Provided detailed images of distant galaxies</li>
                        <li>Allowed humans to study see how the universe is changing</li>
                     </ul>
                  </Box>
                  <img id="firstImg" src={pic}></img>
               </Box>
               <Box display="flex" justifyContent="center">
                  <Button
                     sx={{ fontWeight: "bold" }}
                     onClick={() => {
                        setShowMore(true);
                     }}>
                     Read More
                  </Button>
               </Box>
            </CardContent>
         </Card>
      </>
   );
}
