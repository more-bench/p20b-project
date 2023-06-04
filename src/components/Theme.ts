import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export default responsiveFontSizes(createTheme({
   palette: {
      primary: {
         main: blue[800],
      },
      secondary: {
         main: red[800],
      },
   },
   components:{
    
   }
}));

