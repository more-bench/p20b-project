import { Box, Button, Card, CardContent, List, ListItem, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import pic from "../../assets/cobe.png";

export default function Cobe({ setShowMore }) {
   return (
      <>
         <Card>
            <CardContent>
               <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
                  COBE
               </Typography>
               <Box
                  display="flex"
                  justifyContent="space-around"
                  sx={{ textAlign: "left", fontSize: "30px" }}>
                  <Box display="flex" flexDirection="column">
                     <ul>
                        <li>Launched on November 18, 1989 and operated until 1993</li>
                        <li>Stands for Cosmic Background Explorer</li>
                        <li>
                           Objective was to study the cosmic microwave background radiation from &nbsp; the
                           early universe
                        </li>
                     </ul>
                  </Box>
                  <img id="firstImg" src={pic}></img>
               </Box>
               <Box display="flex" justifyContent="center">
                  <Button
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
