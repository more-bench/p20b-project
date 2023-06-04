import { ThemeProvider, Typography, createTheme } from "@mui/material";
import PageContainer from "./components/PageContainer";

/* website summarizing recent NASA missions that have improved our understanding of
the Universe, such as on cosmic microwave background radiation or CMB or CMBR and
how you think future probes of the early universe should look like. (in this case you will
submit the URL and also a copy of the website saved as a PDF file)

123456Cosmoo
*/
 
function App() {
   return (
      <>
         <Typography textAlign="center" marginBottom="5rem" variant="h1">NASA Missions</Typography>
         <PageContainer />
      </>
   );
}

export default App;
