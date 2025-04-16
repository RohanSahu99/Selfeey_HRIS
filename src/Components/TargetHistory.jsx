
'use client'
import React from "react";
import {
  Card,
  Typography,
  Box,
  LinearProgress,
  Chip,
} from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CalendarMonth, TrackChanges } from "@mui/icons-material";

const TargetHistory = ({ recruiterTarget}) => {

  const statusColorMap = {
    Poor: "#EF4444", // Red
    Average: "#F59E0B", // Amber
    Good: "#10B981", // Green
  };





  // Get data for the selected stage
  const stageData = recruiterTarget?.targetHistory?.joining || {};

  // Format the status
  const formattedStatus =
    stageData?.performanceStatus?.charAt(0).toUpperCase() +
    stageData?.performanceStatus?.slice(1).toLowerCase() || "Not Updated";

  // Get the color for the status
  const color = statusColorMap[formattedStatus] || "#6B7280"; // Default gray

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        p: 3,
        height: "180px", // Increased height to accommodate dropdown
        width: "100% ",
        background: "white",
        display: "flex",
        transition: "transform 0.3s, box-shadow 0.3s",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        "&:hover": {
        
          boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
        },
        gap: 4,
        backgroundImage: `
          linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.6)),
          radial-gradient(circle at top left, ${color}20, transparent 50%)
        `,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ width: 120, height: 120 }}>
        <CircularProgressbar
          value={stageData?.percentage || 0}
          text={`${stageData?.percentage || 0}%`}
          styles={buildStyles({
            textColor: "#111827",
            pathColor: color,
            trailColor: "#E5E7EB",
          })}
        />
      </Box>

      <Box sx={{ flex: 1, minWidth: 250 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mr: 2 }}>
            Target Achievement 
          </Typography>
         
        </Box>

        <Typography variant="body1" sx={{ my: 1 }}>
          Achieved <strong>{stageData?.totalAchieved || 0}</strong> out of{" "}
          <strong>{stageData?.totalTarget || 0}</strong> candidates.
        </Typography>

        <LinearProgress
          variant="determinate"
          value={stageData?.percentage || 0}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#F3F4F6",
            "& .MuiLinearProgress-bar": {
              backgroundColor: color,
            },
          }}
        />

        <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
          <Chip
            icon={<CalendarMonth sx={{ color: "inherit" }} />}
            label={`${stageData?.daysRemaining || 0} days remaining`}
            sx={{ backgroundColor: "#E0F2FE", color: "#0369A1" }}
          />

          <Chip
            icon={<TrackChanges sx={{ color: "inherit" }} />}
            label={`Status: ${stageData?.targetStatus || "Not Updated"}`}
            sx={{ backgroundColor: "#FEF3C7", color: "#92400E" }}
          />

          <Chip
            label={`Performance: ${formattedStatus || "N/A"}`}
            sx={{ backgroundColor: `${color}20`, color: color }}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default TargetHistory;