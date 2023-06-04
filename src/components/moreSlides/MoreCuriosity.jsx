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
            </CardContent>
         </Card>
      </>
   );
}
