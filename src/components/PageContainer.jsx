import { useEffect, useState } from "react";
import "./PageContainer.css";
import { Box, Button, Slider, ThemeProvider, Typography, createTheme } from "@mui/material";
import Curiosity from "./slides/Curiosity";
import Vikings from "./slides/Vikings";
import Apollo from "./slides/Apollo";
import MoreCuriosity from "./moreSlides/MoreCuriosity";
import MoreVikings from "./moreSlides/MoreVikings";
import MoreApollo from "./moreSlides/MoreApollo";

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
               boxShadow: "0px 0px 40px rgba(255, 255, 255, 1)",
               borderRadius: "30px",
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
   const totalPages = 3; // Total number of pages
   const [showMore, setShowMore] = useState(false);

   const pages = [
      <Vikings setShowMore={setShowMore} />,
      <Apollo setShowMore={setShowMore} />,
      <Curiosity setShowMore={setShowMore} />,
   ];

   const moreContent = [<MoreVikings />, <MoreApollo />, <MoreCuriosity />];
   const goToPreviousPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
   };

   const goToNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
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
      <div className="page-container">
         <div className="page-content">
            <div className="navigation-button-left">
               <Button onClick={goToPreviousPage} disabled={currentPage === 0}>
                  {"<"}
               </Button>
            </div>
            <div>
               <ThemeProvider theme={theme}>{pages[currentPage]}</ThemeProvider>
               <Slider sx={{ marginTop: "5%" }} value={currentPage} max={totalPages - 1} />
            </div>
            <div className="navigation-button-right">
               <Button onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
                  {">"}
               </Button>
            </div>
         </div>
         <div id="more">
            <ThemeProvider theme={moreTheme}>{showMore && moreContent[currentPage]}</ThemeProvider>
         </div>
      </div>
   );
};

export default PageContainer;
