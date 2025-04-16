'use client';
import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from '@mui/material';
import { CheckCircle,SignIn,CalendarCheck,Target     } from 'phosphor-react';



const activities = [
  {
    icon: <CheckCircle color="black" />,
    title: 'Task Completed',
    description: 'Finished sourcing candidates for Job ID 1234.',
    time: '2 hours ago',
  },
  {
    icon: <SignIn color="black" />,
    title: 'Checked In',
    description: 'Started the day at 9:00 AM.',
    time: 'Today at 9:00 AM',
  },
  {
    icon: <CalendarCheck   color="black" />,
    title: 'Meeting Scheduled',
    description: 'Client meeting scheduled for 3 PM.',
    time: 'Today at 3:00 PM',
  },
  {
    icon: <Target  color="black" />,
    title: 'Goal Achieved',
    description: 'Reached weekly placement goal.',
    time: 'Yesterday',
  },
];

export default function ActivitiesPage() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Recent Activities
      </Typography>

      <Paper elevation={3} sx={{ borderRadius: 3, p: 2 }}>
        <List>
          {activities.map((activity, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'transparent' }}>
                    {activity.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={activity.title}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {activity.description}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="caption"
                        color="text.secondary"
                      >
                        {activity.time}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < activities.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
