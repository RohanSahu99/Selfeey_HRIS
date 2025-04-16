'use client'
import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  useTheme,
  Button,
  LinearProgress,
  Grow,
  Menu,
  MenuItem,
  Chip,
  ThemeProvider,
} from "@mui/material";
import {
  MagnifyingGlass,
  CheckCircle,
  XCircle,
  TrendUp,
  FileText,
  User,
  Funnel,
  CaretDown,
  CurrencyInr
} from "phosphor-react";
import TargetHistory from "@/Components/TargetHistory";
import theme from "@/utils/theme";
import { ParentPaper } from "@/styles/analyticsStyles";

const SummaryCard = ({
  title,
  value,
  icon,
  color = "#6366F1",
  secondaryValue,
  progress,
}) => {
  return (
    <Grow in={true} timeout={1000}>
      <ParentPaper elevation={0}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${color}20, transparent 70%)`,
            transform: "translate(30%, -30%)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -20,
            left: -20,
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${color}10, transparent 70%)`,
            zIndex: 0,
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1, flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "text.secondary",
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.5px",
              }}
            >
              {title}
            </Typography>
            <Box
              sx={{
                backgroundColor: `${color}15`,
                borderRadius: "12px",
                p: 1.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              {React.cloneElement(icon, { color: color, size: 22 })}
            </Box>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              mb: 0.5,
              background: `linear-gradient(90deg, ${color}, ${color}AA)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {value}
          </Typography>

          {secondaryValue && (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontWeight: 500,
                mt: 1,
                fontSize: "0.8rem",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {secondaryValue}
            </Typography>
          )}

          {progress !== undefined && (
            <Box sx={{ mt: 2 }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: `${color}15`,
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 4,
                    background: `linear-gradient(90deg, ${color}, ${color}AA)`,
                    boxShadow: `0 0 8px ${color}80`,
                  },
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 0.5 }}>
                <Chip
                  label={`${progress}%`}
                  size="small"
                  sx={{
                    backgroundColor: `${color}20`,
                    color,
                    fontWeight: 600,
                    fontSize: "0.7rem",
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </ParentPaper>
    </Grow>
  );
};

const SummaryCards = ({ stats, target, recruiterTarget, setFilter }) => {
  const cardtheme = useTheme();
  const [timeFilter, setTimeFilter] = useState("Today");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTimeFilter = (value, label) => {
    setTimeFilter(label);
    setFilter(value);
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color:'black',
              display: "flex",
              alignItems: "center",
            }}
          >
            Analytics
            {recruiterTarget?.recruiterName}
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<Funnel size={20} />}
              endIcon={<CaretDown size={20} />}
              onClick={handleClick}
              sx={{
                borderRadius: "12px",
                px: 3,
                py: 1,
                mr: 10,
                textTransform: "none",
                fontWeight: 600,
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(0,0,0,0.1)",
                color: "text.primary",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                "&:hover": {
                  background: "rgba(255,255,255,0.9)",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {timeFilter}
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  borderRadius: "12px",
                  mt: 1,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0,0,0,0.05)",
                },
              }}
            >
              {[
                { value: "today", label: "Today" },
                { value: "last7Days", label: "Last 7 Days" },
                { value: "last15Days", label: "Last 15 Days" },
                { value: "last30Days", label: "Last 30 Days" },
                { value: "last3Months", label: "Last 3 Months" },
              ].map((option) => (
                <MenuItem
                  key={option.value}
                  onClick={() => handleTimeFilter(option.value, option.label)}
                  sx={{
                    minWidth: "160px",
                    "&:hover": {
                      background: "rgba(0,0,0,0.03)",
                    },
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
            <SummaryCard
              title="Total Candidates"
              value={recruiterTarget?.totalSourced}
              icon={<MagnifyingGlass weight="duotone" />}
              color="#6366F1"
              secondaryValue={timeFilter}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
            <SummaryCard
              title="Selected Candidates"
              value={recruiterTarget?.selected}
              icon={<CheckCircle weight="duotone" />}
              color="#10B981"
              secondaryValue={`${recruiterTarget?.selectionPercentage}% selection rate`}
              progress={recruiterTarget?.selectionPercentage}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
            <SummaryCard
              title="Rejected Candidates"
              value={recruiterTarget?.rejected}
              icon={<XCircle weight="duotone" />}
              color="#F43F5E"
              secondaryValue={`${recruiterTarget?.rejectionPercentage}% rejection rate`}
              progress={recruiterTarget?.rejectionPercentage}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
            <SummaryCard
              title="Avg Candidates/Day"
              value={recruiterTarget?.avgSourcedPerDay}
              icon={<TrendUp weight="duotone" />}
              color="#8B5CF6"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
            <SummaryCard
              title="Total Billable CTC In LPA"
              value={`₹${recruiterTarget?.totalBillableCTC.toFixed(2)}`}
              icon={<CurrencyInr weight="duotone" />}
              color="#059669"
              secondaryValue="Annual value"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
            <SummaryCard
              title="Documentation"
              value={recruiterTarget?.stageBreakdown?.documentation}
              icon={<FileText weight="duotone" />}
              color="#F59E0B"
              secondaryValue={`${recruiterTarget?.stagePercentages?.joiningPercentage}% completion`}
              progress={recruiterTarget?.stagePercentages?.joiningPercentage}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
            <SummaryCard
              title="Joined Candidates"
              value={recruiterTarget?.stageBreakdown?.joining}
              icon={<User weight="duotone" />}
              color="#14B8A6"
              secondaryValue={`${recruiterTarget?.stagePercentages?.joiningPercentage}% joining rate`}
              progress={recruiterTarget?.stagePercentages?.joiningPercentage}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
            <SummaryCard
              title="Offer Letters Issued"
              value={recruiterTarget?.stageBreakdown?.offer_letter}
              icon={<FileText weight="duotone" />}
              color="#0EA5E9"
              secondaryValue={timeFilter}
            />
          </Grid>

          <Grid item xs={12}>
            <TargetHistory target={target} recruiterTarget={recruiterTarget} />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default SummaryCards;
