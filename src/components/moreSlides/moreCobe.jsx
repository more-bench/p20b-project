import { Box, Button, Card, CardContent, Typography } from "@mui/material";

export default function MoreCobe() {
   return (
      <>
         <Card>
            <CardContent>
               <Typography variant="p" component="div">
                  COBE is a space-based observatory launched by NASA on November 18, 1989 and
                  operated until 1993. It was launched using a Delta II rocket then it was deployed
                  in an orbit around Earth.
               </Typography>
               <Typography variant="p" component="div">
                  COBE has three main scientifc instruments.
                  <ul>
                     <li>
                        Differential Microwave Radiometer which measured temperature variations of
                        the CMB
                     </li>
                     <li>
                        Far Infrared Absolute Spectrophotometer which measured the spectrum of the
                        CMB
                     </li>
                     <li>
                        Diffuse Infrared Background Experiment which measured the diffuse infrared
                        radiation in the universe.
                     </li>
                  </ul>
               </Typography>
               <Typography variant="p">
                  COBE has improved our understanding of the early universe and provided evidence
                  for the Big Bang theory. It has provided data that the CMB radiation closely
                  resembles a blackbody spectrum which provides evidence for the Big Bang. It has
                  revealed tiny temperature fluctuations in the CMB which is aligned with
                  inflationary predictions of the universe. It has provided important data on the
                  distribution of dust and interstellar material.
               </Typography>
            </CardContent>
         </Card>
      </>
   );
}
