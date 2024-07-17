import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './cal.css';

const WeekDayHeader = styled(Box)(({ theme }) => ({
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.grey[200],
  fontWeight: "600",
  borderRight: `1px solid ${theme.palette.divider}`,
}));

const CalendarDay = styled(Box)(({ theme }) => ({
  // minHeight: "120px",
  // maxHeight: '120px',
  height: 'max-content',
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  borderRight: `1px solid ${theme.palette.grey[300]}`,
  borderLeft: `1px solid ${theme.palette.grey[300]}`,
  borderTop: `1px solid ${theme.palette.grey[300]}`,
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  overflow: "hidden",
  position: "relative",
  "&:hover .hover-content": {
    display: "flex",
    // height: '120px'
  },
}));

const DayNumber = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  fontWeight: "600",
  marginBottom: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const HoverContent = styled(Box)(({ theme }) => ({
  display: "none",
  flexDirection: "column",
  gap: theme.spacing(1),
  paddingTop: theme.spacing(1),
}));

const SocialMediaCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [scheduledPosts, setScheduledPosts] = useState({});
  const [view, setView] = useState("month");

  useEffect(() => {
    fetchScheduledPosts();
  }, [currentDate, view]);

  const fetchScheduledPosts = async () => {
    // Implement API call to fetch scheduled posts
    const dummyData = {
      "7/14/2024": [{ title: "Post 1", content: "Content 1" }],
      "7/20/2024": [
        { title: "Post 2", content: "Content 2" },
        { title: "Post 3", content: "Content 3" },
        // { title: "Post 4", content: "Content 2" },
        // { title: "Post 5", content: "Content 3" },
      ],
    };
    setScheduledPosts(dummyData);
  };

  const renderCalendarDay = ({ date, postsForDay }) => {
    const dateString = date ? date.toLocaleDateString("en-US") : "";
    return (
      <CalendarDay>
        {date && (
          <>
            <DayNumber>{date.getDate()}</DayNumber>
            <Box sx={{ flex: 1, overflowY: "auto" }} className='hide-scrollbar'>
              {postsForDay.map((post, index) => (
                <Box
                  key={index}
                  sx={{
                    bgcolor: "primary.light",
                    borderRadius: 1,
                    p: 0.5,
                    mb: 0.5,
                    fontSize: "0.8rem",
                    cursor:"pointer"
                  }}
                >
                  <Typography variant="caption" noWrap>
                    {post.title}
                  </Typography>
                </Box>
              ))}
              <HoverContent className="hover-content">
                <Button
                  fullWidth
                  variant="outlined"
                  size="small"
                >
                  Schedule Post
                </Button>
                <Button fullWidth variant="contained" size="small">
                  Start a Draft
                </Button>
              </HoverContent>
            </Box>
          </>
        )}
      </CalendarDay>
    );
  };

  const renderWeekView = () => {
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDate.getDay());
    const days = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      const dateString = date.toLocaleDateString("en-US");
      const postsForDay = scheduledPosts[dateString] || [];

      days.push(
        <Grid item xs key={i}>
          {renderCalendarDay({ date, postsForDay })}
        </Grid>
      );
    }

    return (
      <Box
        sx={{
          border: "1px solid",
          borderColor: "grey.300",
          borderBottom: "none",
        }}
      >
        <Grid
          container
          sx={{ borderBottom: "1px solid", borderColor: "grey.300" }}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <Grid item xs key={day}>
                <WeekDayHeader
                  sx={{ borderRight: index === 6 ? "none" : undefined }}
                >
                  {day}
                </WeekDayHeader>
              </Grid>
            )
          )}
        </Grid>
        <Grid container>{days}</Grid>
      </Box>
    );
  };

  const renderMonthView = () => {
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    const totalCells = 42; // 6 rows * 7 days
    const weeks = [];
    let days = [];

    for (let i = 0; i < totalCells; i++) {
      const dayIndex = i - firstDay + 1;
      if (dayIndex > 0 && dayIndex <= daysInMonth) {
        const date = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          dayIndex
        );
        const dateString = date.toLocaleDateString("en-US");
        const postsForDay = scheduledPosts[dateString] || [];

        days.push(
          <Grid item xs key={i}>
            {renderCalendarDay({ date, postsForDay })}
          </Grid>
        );
      } else {
        days.push(
          <Grid item xs key={i}>
            {renderCalendarDay({ date: null, postsForDay: [] })}
          </Grid>
        );
      }

      if ((i + 1) % 7 === 0) {
        weeks.push(
          <Grid container item xs={12} key={i / 7}>
            {days}
          </Grid>
        );
        days = [];
      }
    }

    return (
      <Box
        sx={{
          border: "1px solid",
          borderColor: "grey.300",
          borderBottom: "none",
        }}
      >
        <Grid
          container
          sx={{ borderBottom: "1px solid", borderColor: "grey.300" }}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <Grid item xs key={day}>
                <WeekDayHeader
                  sx={{ borderRight: index === 6 ? "none" : undefined }}
                >
                  {day}
                </WeekDayHeader>
              </Grid>
            )
          )}
        </Grid>
        <Grid container>{weeks}</Grid>
      </Box>
    );
  };

  const renderListView = () => (
    <Box>
      {Object.entries(scheduledPosts).map(([date, posts]) => (
        <Paper key={date} sx={{ mb: 2, p: 2 }}>
          <Typography variant="h6">{new Date(date).toDateString()}</Typography>
          {posts.map((post, index) => (
            <Box
              key={index}
              sx={{ bgcolor: "primary.light", borderRadius: 1, p: 1, mt: 1 }}
            >
              <Typography>{post.title}</Typography>
            </Box>
          ))}
        </Paper>
      ))}
    </Box>
  );

  const renderView = () => {
    switch (view) {
      case "week":
        return renderWeekView();
      case "month":
        return renderMonthView();
      case "list":
        return renderListView();
      default:
        return renderMonthView();
    }
  };

  const nextPeriod = () => {
    if (view === "week") {
      setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
    } else if (view === "month") {
      setCurrentDate(
        new Date(currentDate.setMonth(currentDate.getMonth() + 1))
      );
    }
  };

  const prevPeriod = () => {
    if (view === "week") {
      setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
    } else if (view === "month") {
      setCurrentDate(
        new Date(currentDate.setMonth(currentDate.getMonth() - 1))
      );
    }
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", p: 3 }}>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={(e, newView) => newView && setView(newView)}
        sx={{ mb: 2, display: "flex", justifyContent: "center" }}
      >
        <ToggleButton value="week">Week</ToggleButton>
        <ToggleButton value="month">Month</ToggleButton>
        <ToggleButton value="list">List</ToggleButton>
      </ToggleButtonGroup>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <IconButton onClick={prevPeriod}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h5">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </Typography>
        <IconButton onClick={nextPeriod}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Paper elevation={3}>{renderView()}</Paper>
    </Box>
  );
};

export default SocialMediaCalendar;
