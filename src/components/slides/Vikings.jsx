import { Box, Button, Card, CardContent, List, ListItem, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import pic from "../../assets/Vikings.png"

export default function Vikings({ setShowMore }) {
   return (
      <>
         <Card>
            <CardContent>
               <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
                  Vikings
               </Typography>
               <Box
                  display="flex"
                  justifyContent="space-around"
                  sx={{ textAlign: "left", fontSize: "30px" }}>
                  <Box display="flex" flexDirection="column">
                     <ul>
                        <li>
                           Viking 1 launched on August 20, 1975. Viking 2 launched on September 9,
                           1975
                        </li>
                        <li>First spacecraft to land and operate on Mars</li>
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
