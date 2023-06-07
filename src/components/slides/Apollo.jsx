import { Box, Button, Card, CardContent, List, ListItem, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import pic from "../../assets/Apollo.jpeg";

export default function Apollo({ setShowMore }) {
   return (
      <>
         <Card>
            <CardContent>
               <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
                  Apollo 11
               </Typography>
               <Box
                  display="flex"
                  justifyContent="space-around"
                  sx={{ textAlign: "left", fontSize: "30px" }}>
                  <Box display="flex" flexDirection="column">
                     <ul>
                        <li>
                           Historic space missions that resulted in the first humans landing on the
                           moon
                        </li>
                        <li>Launched on July 16, 1969</li>
                        <li>
                           The crew comprised of Neil Armstrong, Edwin "Buzz" Aldrin, and Michael
                           Collins
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
