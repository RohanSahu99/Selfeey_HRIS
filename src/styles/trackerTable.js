import {
    styled,
    Paper,
    TextField,
    Button,
    Typography,
    Container,
    alpha,
    Box,
    Select,
    MenuItem,
    Card,
    CardContent
  } from "@mui/material";
  import { DataGrid } from "@mui/x-data-grid";
  
   export const SearchContainer = styled(Box)(({ theme }) => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "stretch",
        gap: theme.spacing(2),
      },
    }))
  
  
   export const NoRowsMessage = styled(Typography)(({ theme }) => ({
      textAlign: "center",
      padding: theme.spacing(4),
      color: theme.palette.text.secondary,
      fontWeight: 500,
    }))
  
  export const ParentContainer = styled(Container)(({ theme }) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      width:"100%",
  
      padding: theme.spacing(1),
    
    }))
    export const StyledPaper = styled(Paper)(({ theme }) => ({
      padding: theme.spacing(3), 
      borderRadius: theme.spacing(1),
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
      width: "100%",
      overflow: "hidden",
      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
      transition: "box-shadow 0.3s ease",
      "&:hover": {
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.08)",
      },
    }))
  
   export const SearchField = styled(TextField)(({ theme }) => ({
      "& .MuiOutlinedInput-root": {
        borderRadius: theme.spacing(1.5),
        transition: "all 0.2s ease",
        backgroundColor: alpha(theme.palette.common.white, 0.9),
        "&:hover": {
          backgroundColor: theme.palette.common.white,
        },
        "&.Mui-focused": {
          backgroundColor: theme.palette.common.white,
          boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
        },
      },
    }))
  
    export const FilterSelect = styled(Select)(({ theme }) => ({
      minWidth: 180,
      height: 40,
      borderRadius: '12px',
      backgroundColor: theme.palette.background.paper,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '&:hover': {
        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
        transform: 'translateY(-1px)',
        transition: 'all 0.2s ease',
      },
      '& .MuiSelect-select': {
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
      },
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
      },
    }));
  
    export const FilterMenuItem = styled(MenuItem)(({ theme }) => ({
      padding: '12px 24px',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&.Mui-selected': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      },
    }));
  
    export const FilterItemContent = styled(Box)({
      display: 'flex',
      alignItems: 'center',
    });
  
    export const FilterMenuIcon = styled(Box)(({ theme }) => ({
      marginRight: '12px',
      color: theme.palette.primary.main,
    }));
  
    export const ExportButton = styled(Button)(({ theme }) => ({
      borderRadius: theme.spacing(1.5),
      padding: theme.spacing(1, 2),
      textTransform:"none",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      transition: "all 0.2s ease",
      "&:hover": {
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
        transform: "translateY(-1px)",
      },
    }))
  
   export const OrgCard = styled(Card)(({ theme }) => ({
      borderRadius: '16px',
      background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      position: 'relative',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #3f51b5, #2196f3)'
      }
    }));
  
    export const OrgCardContent = styled(CardContent)({
      padding: '24px'
    })
  
  
   export  const OrgCardHeader = styled(Typography)(({ theme }) => ({
      fontWeight: 600,
      color: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px'
    }))
  
   export const AccentBar = styled(Box)(({ theme }) => ({
      width: '8px',
      height: '24px',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '4px',
      marginRight: '16px'
    }));
  
   export const OrgDetailsBox = styled(Box)({
      display: 'grid',
      gap: '16px'
    });
  
    
  
   export const DetailLabel = styled(Typography)(({ theme }) => ({
      minWidth: '80px',
      color: theme.palette.text.secondary,
      display: 'flex',
      alignItems: 'center'
    }));
    
    // Styled Detail Value
   export const DetailValue = styled(Typography)({
      fontWeight: 500,
      marginLeft: '8px',
      flex: 1
    });
    
    // Styled Icon
   export const DetailIcon = styled(Box)({
      marginRight: '8px'
    });
    
    export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
      border: "none",
      "& .MuiDataGrid-main": {
        borderRadius: theme.spacing(1),
        overflow: "hidden",
      },
      "& .MuiDataGrid-columnHeader": {
        fontWeight: "bold",
        fontSize: "14px",
        padding: "14px 6px",
        borderBottom: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        backgroundColor: alpha(theme.palette.primary.main, 0.04),
        color: theme.palette.primary.dark,
      },
      "& .MuiDataGrid-cell": {
        color: theme.palette.text.primary,
        textOverflow: "clip",
        whiteSpace: "normal",
        lineHeight: "1.5",
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
      },
      "& .MuiDataGrid-columnHeaderTitle": {
        fontWeight: "bold",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      },
      "& .MuiDataGrid-columnHeaders": {
        textAlign: "center",
        fontWeight: "bold",
      },
      "& .MuiDataGrid-columnHeader .MuiDataGrid-menuIcon": {
        visibility: "visible",
        width: "24px",
        height: "24px",
        marginLeft: "8px",
        display: "inline-block",
        opacity: 1,
      },
      "& .MuiDataGrid-columnHeader:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
      },
      "& .MuiDataGrid-row:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.04),
      },
      "& .MuiDataGrid-row.Mui-selected": {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, 0.12),
        },
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
        backgroundColor: alpha(theme.palette.primary.main, 0.02),
      },
      "& .MuiTablePagination-root": {
        color: theme.palette.text.secondary,
      },
      "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },
      "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
        background: alpha(theme.palette.divider, 0.3),
        borderRadius: "10px",
      },
      "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
        backgroundColor: alpha(theme.palette.primary.main, 0.3),
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, 0.5),
        },
      },
    }))