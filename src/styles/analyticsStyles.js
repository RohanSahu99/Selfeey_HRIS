import { Paper, styled } from "@mui/material";

export const ParentPaper = styled(Paper)(({ theme, color = "#6557FF" }) => ({
  padding: theme.spacing(2),
  borderRadius: 20,
  width: 220,
  height: 180,
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "#FFFFFF", // Changed background to white
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  border: `1px solid ${color}40`,
  backdropFilter: "blur(6px)",

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    width: "180%",
    height: "180%",
    top: "-40%",
    left: "-40%",
    background: `radial-gradient(circle at top left, ${color}22, transparent 70%)`,
    zIndex: 0,
    transform: "rotate(25deg)",
  },

  "& *": {
    zIndex: 1, // Ensure children stay above backgrounds
  },
}));

export const ParentBox = styled(Paper)(({ color = "#6557FF" }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  width: 120,
  height: 120,
  borderRadius: "50%",
  background: `radial-gradient(circle, ${color}30, transparent 70%)`,
  transform: "translate(40%, -40%)",
  zIndex: 0,
}));
