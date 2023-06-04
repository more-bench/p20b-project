import { Box, Button, Card, CardContent, List, ListItem, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import pic from "../../assets/Curiosity.png";

export default function Curiosity({ setShowMore }) {
   return (
      <>
         <Card>
            <CardContent>
               <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
                  Curiosity
               </Typography>
               <Box
                  display="flex"
                  justifyContent="space-around"
                  sx={{ textAlign: "left", fontSize: "30px" }}>
                  <Box display="flex" flexDirection="column">
                     <ul>
                        <li>Launched on November 26, 2011</li>
                        <li>Launched on November 26, 20222</li>
                        <li>Purpose is to determine whether Mars was ever able to support life</li>
                        <li>Found evidence of water on Mars</li>
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
