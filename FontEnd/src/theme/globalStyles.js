// material
import { useTheme } from "@mui/material/styles";
import { GlobalStyles as GlobalThemeStyles } from "@mui/material";

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const theme = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
          fontFamily: "Helvetica Neue LT Com",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        textarea: {
          "&::-webkit-input-placeholder": {
            color: theme.palette.text.disabled,
          },
          "&::-moz-placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
          "&:-ms-input-placeholder": {
            color: theme.palette.text.disabled,
          },
          "&::placeholder": {
            color: theme.palette.text.disabled,
          },
        },

        img: { display: "block", maxWidth: "100%" },

        // Lazy Load Img
        ".blur-up": {
          WebkitFilter: "blur(5px)",
          filter: "blur(5px)",
          transition: "filter 400ms, -webkit-filter 400ms",
        },
        ".blur-up.lazyloaded ": {
          WebkitFilter: "blur(0)",
          filter: "blur(0)",
        },
        ".logo-text": {
          fontSize: "19px!important",
          lineHeight: "23px!important",
          fontWeight: "500!important",
          position: "absolute",
          top: 0,
          left: "60px",
          width: "170px",
        },
        ".nav-text": {
          fontSize: "16px!important",
          lineHeight: "20px!important",
          fontWeight: "400!important",
          letterSpacing: "0.2px",
        },
        ".svg-sidebar": { fill: "#2D2D2D" },
        ".mulish-font": { fontFamily: "Mulish!important" },
        ".dashboard-header-info": {
          fontSize: "40px!important",
          lineHeight: "34px!important",
          fontWeight: "normal!important",
          fontFamily: "Helvetica Neue!important",
          letterSpacing: "0.3px",
        },
        ".header-bottom-border": {
          borderBottom: "3px solid #E0301E",
          width: "100%",
        },
        ".header-flex": { width: "100%" },
        ".displayname-header": {
          fontWeight: "500!important",
          fontSize: "14px!important",
          lineHeight: "20px!important",
          cursor: "pointer",
          paddingRight: "15px",
          borderRight: "1px solid #2D2D2D",
          letterSpacing: "0.2px",
        },
        ".MuiTab-textColorPrimary": {
          color: "#000000!important",
          opacity: "0.55",
          fontFamily: "Helvetica Neue!important",
          fontSize: "28px!important",
          lineHeight: "28px!important",
          fontWeight: "normal!important",
          padding: "15px 98px!important",
        },
        ".MuiTab-root.Mui-selected": {
          color: "#000000!important",
          opacity: "1",
        },
        ".MuiTabs-indicator": {
          height: "5px!important",
          backgroundColor: "#E0301E!important",
        },
        ".MuiDrawer-paperAnchorLeft": { borderRight: "0!important" },
        ".MuiButton-containedPrimary": { backgroundColor: "#DB536A!important" },
        ".cardDetailsHoverEffect": {
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          zIndex: 1,
        },
        ".cardDetailsHoverText": {
          fontSize: "16px",
          lineHeight: "18px",
          fontFamily: "Arial",
          fontWeight: "700",
          position: "absolute",
          display:"flex",
          top: "50%",
          transform: "translate(0%, -50%)",
          padding: "12px",
          color: "transparent",
        },
        ".cardDetailsHoverEffect:hover": {
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          // backgroundColor: "afd91a",
          opacity: "3",
          backdropFilter: "blur(8px)",
        },
        ".cardDetailsHoverEffect:hover .cardDetailsHoverText": {
          color: "#fff",
          fontWeight: 700,
          fontFamily: "Arial",
          lineHeight: "18px",
        },
        ".highcharts-background": {
          fill: "white",//chart background color
        },
        ".highcharts-yaxis-grid .highcharts-grid-line:nth-child(1)": {
          stroke: "#404040",
        },
        ".highcharts-grid-line": {
          stroke: "transparent",
        },
        ".highcharts-point": {
          fill: "#abdca7",//char point color
          stroke: "transparent",
        },
        ".highcharts-tick": {
          stroke: "transparent",
        },
        ".highcharts-yaxis-labels text": {
          color: "transparent!important",
          fill: "transparent!important",
        },
        ".highcharts-container": {
          width: "1000px!important",
          height: "313px!important",
        },
        ".MuiTableRow-head .MuiTableCell-stickyHeader": {
          backgroundColor: "#248e38",
          fontFamily: "Arial",
          fontSize: "12px",
          lineHeight: "24px",
          fontWeight: 400,
        },
        ".MuiTableCell-body": {
          backgroundColor: "#abdca7",
          fontFamily: "Arial!important",
          fontSize: "13px!important",
          lineHeight: "24px!important",
          fontWeight: "400!important",
          padding: "11px 15px!important",
        },
        ".MuiTableCell-footer": {
          backgroundColor: "#eeeeee",
          fontFamily: "Arial!important",
          fontSize: "12px!important",
          lineHeight: "24px!important",
          fontWeight: "400!important",
          padding: "11px 15px!important",
        },
        ".mulish-font:hover": {
          backgroundColor: "rgba(219, 83, 106, 0.08)!important",
        },
        ".MuiInputBase-formControl fieldset": {
          border: 0,
        },
        ".MuiMenu-list": {
          background: "#FFFFFF",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          padding: "0!important",
        },
        "#draweWrapper .MuiDrawer-paper": {
          top: "128px!important",
          backgroundColor: "#fff",
          boxShadow: "-6px 4px 6px 1px rgba(0, 0, 0, 0.25)",
        },
        ".MuiSelect-select": {
          padding: "2px!important",
        },
        ".MuiListItemButton-root.active": {
          backgroundColor: "#abdca7",
        },
        ".MuiListItemButton-root.active:after": {
          content: "''",
          top: 0,
          left: 0,
          width: 3,
          bottom: 0,
          position: "absolute",
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
          backgroundColor: "#DB5361",
        },
        ".makeStyles-filterFormFieldSelect-24 .MuiSelect-icon": {
          color: "rgba(35, 31, 32, 0.7)!important",
        },
        ".MuiSelect-icon": {
          color: "#fff!important",
        },
        "#free-solo-demo": {
          color: "rgba(0, 0, 0, 0.87)",
          fontFamily: "Arial",
          fontWeight: 400,
          fontSize: "10px",
          lineHeight: "24px",
          padding: 0,
        },
        ".MuiTablePagination-selectLabel": {
          color: "#0000008a",
          fontFamily: "Arial!important",
          fontWeight: "400!important",
          fontSize: "12px!important",
          lineHeight: "14px!important",
        },
        ".MuiTablePagination-toolbar svg": {
          color: "rgba(0, 0, 0, 0.54)!important",
        },
        ".MuiTablePagination-displayedRows": {
          color: "rgba(0, 0, 0, 0.54)",
          fontFamily: "Arial!important",
          fontWeight: "400!important",
          fontSize: "12px!important",
          lineHeight: "14px!important",
        },
        ".MuiDialog-paperFullWidth": {
          maxWidth: "100%!important",
          height: "765px",
          backgroundColor: "#fff!important",
        },
        "#standard-basic-label": {
          color: "#8A8A8A",
          fontSize: "16px",
          fontFamily: "Helvetica Neue",
          lineHeight: "18px",
          fontWeight: 400,
        },
        "#filterArrow svg": {
          color: "#C4C4C4!important",
        },
        "#addNewBtn:hover": {
          backgroundColor: "#fff!important",
          boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)!important",
        },
        ".MuiDataGrid-columnHeader": {
          outline: "transparent!important",
        },
        ".MuiDataGrid-cell:focus": {
          outline: "transparent!important",
        },
        ".MuiDataGrid-cell:focus-within": {
          outline: "transparent!important",
        },
        ".MuiDataGrid-columnHeaders": {
          maxHeight: "61px!important",
          minHeight: "61px!important",
          lineHeight: "61px!important",
          backgroundColor: "#EEEEEE",
          fontFamily: "CharterITC",
          fontWeight: 700,
          fontSize: "12px",
          color: "#000",
        },
        ".MuiDataGrid-row": {
          color: "#000",
          fontFamily: "Helvetica Neue",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "24px",
          maxHeight: "47px!important",
          minHeight: "47px!important",
        },
        ".MuiDataGrid-cellCheckbox": {
          maxHeight: "47px!important",
          minHeight: "47px!important",
          lineHeight: "47px!important",
        },
        ".MuiDataGrid-cell": {
          maxHeight: "47px!important",
          minHeight: "47px!important",
          lineHeight: "47px!important",
          textAlign: "center!important",
        },
        ".MuiDataGrid-footerContainer": {
          backgroundColor: "#F9F9F9",
        },
        ".MuiTablePagination-select": {
          minWidth: "40px!important",
          textAlign: "left!important",
          textAlignLast: "left!important",
          color: "#6D6D6D!important",
          fontFamily: "Arial!important",
          fontWeight: "400!important",
          fontSize: "12px!important",
          lineHeight: "14px!important",
        },
        ".MuiAutocomplete-inputRoot": {
          padding: "6px!important",
        },
        ".MuiDataGrid-columnSeparator": {
          display: "none!important",
        },
        ".editIconAction": {
          cursor: "pointer",
        },
        ".MuiDataGrid-columnHeaderTitleContainer": {
          justifyContent: "center",
        },
        ".MuiDataGrid-cell--withRenderer": {
          justifyContent: "center!important",
        },
        "#continue-btn:hover": {
          backgroundColor: "#E0301E",
        },
        "#addMisButton": {
          backgroundColor: "#F0F0F0",
        },
      }}
    />
  );
}
