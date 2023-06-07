import { useEffect, useState } from "react";
import "./PageContainer.css";
import { Box, Button, Slider, ThemeProvider, Typography, createTheme } from "@mui/material";
import Vikings from "./slides/Vikings";
import Apollo from "./slides/Apollo";
import MoreVikings from "./moreSlides/MoreVikings";
import MoreApollo from "./moreSlides/MoreApollo";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import MoreHubble from "./moreSlides/MoreHubble";
import Curiosity from "./slides/Curiosity";
import MoreCuriosity from "./moreSlides/MoreCuriosity";
import Hubble from "./slides/Hubble";
import Cobe from "./slides/Cobe";
import MoreCobe from "./moreSlides/moreCobe";

const theme = createTheme({
   palette: {
      background: {
         default: "transparent",
      },

      text: {
         primary: "#FFFFFF",
      },
   },
   components: {
      MuiCard: {
         styleOverrides: {
            root: {
               width: "60rem",
               height: "40rem",
               backgroundColor: "#003366",
               boxShadow: "0px 0px 40px rgba(255, 255, 255, 1)",
               borderRadius: "30px",
            },
         },
      },
      MuiCardContent: {
         styleOverrides: {
            root: {
               height: "inherit",
               display: "flex",
               justifyContent: "space-around",
               alignItems: "center",
               flexDirection: "column",
            },
         },
      },
      MuiButton: {
         styleOverrides: {
            root: {
               fontWeight: "bold",
            },
         },
      },
   },
});

const moreTheme = createTheme({
   palette: {
      background: {
         default: "transparent",
      },
   },
   components: {
      MuiCard: {
         styleOverrides: {
            root: {
               margin: "5rem",
               width: "60rem",
               backgroundColor: "#87CEEB",
            },
         },
      },
      MuiTypography: {
         styleOverrides: {
            root: {
               marginBottom: "1rem",
            },
         },
      },
   },
});

const PageContainer = () => {
   const [currentPage, setCurrentPage] = useState(0);
   const totalPages = 5; // Total number of pages
   const [showMore, setShowMore] = useState(false);

   const marks = [
      {
         value: 0,

         label: "1969",
      },
      {
         value: 1,
         label: "1975",
      },
      { value: 2, label: "1989" },
      {
         value: 3,
         label: "1990",
      },
      {
         value: 4,
         label: "2011",
      },
   ];

   const pages = [
      <Apollo setShowMore={setShowMore} />,
      <Vikings setShowMore={setShowMore} />,
      <Cobe setShowMore={setShowMore} />,
      <Hubble setShowMore={setShowMore} />,
      <Curiosity setShowMore={setShowMore} />,
   ];

   const moreContent = [
      <MoreApollo />,
      <MoreVikings />,
      <MoreCobe />,
      <MoreHubble />,
      <MoreCuriosity />,
   ];
   const goToPreviousPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
   };

   const goToNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
   };

   const handleChange = (event, newValue) => {
      setCurrentPage(newValue);
   };

   useEffect(() => {
      if (showMore) {
         document.getElementById("more").scrollIntoView({ behavior: "smooth" });
      }
   }, [showMore]);

   useEffect(() => {
      setShowMore(false);
   }, [currentPage]);

   return (
      <div className="bg">
         <Typography textAlign="center" marginBottom="5rem" variant="h1">
            NASA Missions
         </Typography>
         <div className="page-container">
            <div className="page-content">
               <div className="navigation-button-left">
                  <Button onClick={goToPreviousPage} disabled={currentPage === 0}>
                     <ArrowBackIos sx={{ fontSize: "5rem", fontWeight: "bolder" }} />
                  </Button>
               </div>
               <div>
                  <ThemeProvider theme={theme}>{pages[currentPage]}</ThemeProvider>
                  <Slider
                     sx={{ marginTop: "5%", "& .MuiSlider-markLabel": { color: "#FFFFFF" } }}
                     getAriaValueText={(value) => value + 2}
                     value={currentPage}
                     onChange={handleChange}
                     valueLabelDisplay="off"
                     max={totalPages - 1}
                     marks={marks}
                     step={null}
                  />
               </div>
               <div className="navigation-button-right">
                  <Button onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
                     <ArrowForwardIos sx={{ fontSize: "5rem" }} />
                  </Button>
               </div>
            </div>
            <div id="more">
               <ThemeProvider theme={moreTheme}>
                  {showMore && moreContent[currentPage]}
               </ThemeProvider>
            </div>
         </div>
      </div>
   );
};

export default PageContainer;
