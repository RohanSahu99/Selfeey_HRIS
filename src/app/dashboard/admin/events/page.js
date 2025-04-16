'use client';

import {
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  IconButton,
  Divider,
  Stack,
  Paper
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { 
  Delete as DeleteIcon,
  Cake as CakeIcon,
  Celebration as CelebrationIcon,
  Work as WorkIcon,
  Event as EventIcon 
} from '@mui/icons-material';

const EventPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  // States for Holiday
  const [holidayName, setHolidayName] = useState('');
  const [holidayDate, setHolidayDate] = useState(null);
  const [holidays, setHolidays] = useState([
    { id: 1, name: 'New Year', date: '2024-01-01', type: 'public' },
    { id: 2, name: 'Diwali', date: '2024-11-12', type: 'public' }
  ]);

  // States for Birthday
  const [birthdayName, setBirthdayName] = useState('');
  const [birthdayDate, setBirthdayDate] = useState(null);
  const [birthdays, setBirthdays] = useState([
    { id: 1, name: 'John Doe', date: '1990-05-15', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', date: '1988-11-22', department: 'HR' }
  ]);

  // States for Anniversary
  const [annivName, setAnnivName] = useState('');
  const [annivDate, setAnnivDate] = useState(null);
  const [anniversaries, setAnniversaries] = useState([
    { id: 1, name: 'Michael Johnson', date: '2015-03-10', years: 8, department: 'Sales' },
    { id: 2, name: 'Sarah Williams', date: '2018-06-15', years: 5, department: 'Marketing' }
  ]);

  const handleAddHoliday = () => {
    if (!holidayName || !holidayDate) return;
    const newHoliday = { 
      id: Date.now(), 
      name: holidayName, 
      date: holidayDate.format('YYYY-MM-DD'),
      type: 'company'
    };
    setHolidays([...holidays, newHoliday]);
    setHolidayName('');
    setHolidayDate(null);
  };

  const handleAddBirthday = () => {
    if (!birthdayName || !birthdayDate) return;
    const newBirthday = { 
      id: Date.now(), 
      name: birthdayName, 
      date: birthdayDate.format('YYYY-MM-DD'),
      department: 'General'
    };
    setBirthdays([...birthdays, newBirthday]);
    setBirthdayName('');
    setBirthdayDate(null);
  };

  const handleAddAnniversary = () => {
    if (!annivName || !annivDate) return;
    const years = dayjs().diff(dayjs(annivDate), 'year');
    const newAnniversary = { 
      id: Date.now(), 
      name: annivName, 
      date: annivDate.format('YYYY-MM-DD'),
      years,
      department: 'General'
    };
    setAnniversaries([...anniversaries, newAnniversary]);
    setAnnivName('');
    setAnnivDate(null);
  };

  const handleDelete = (type, id) => {
    if (type === 'holiday') {
      setHolidays(holidays.filter(h => h.id !== id));
    } else if (type === 'birthday') {
      setBirthdays(birthdays.filter(b => b.id !== id));
    } else if (type === 'anniversary') {
      setAnniversaries(anniversaries.filter(a => a.id !== id));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 1   , maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
          Events & Holidays
        </Typography>

        <Paper sx={{ mb: 3, borderRadius: 2 }}>
          <Tabs 
            value={tabIndex} 
            onChange={(e, newVal) => setTabIndex(newVal)}
            variant="fullWidth"
          >
            <Tab label="Holidays" icon={<EventIcon />} iconPosition="start" />
            <Tab label="Birthdays" icon={<CakeIcon />} iconPosition="start" />
            <Tab label="Anniversaries" icon={<WorkIcon />} iconPosition="start" />
          </Tabs>
        </Paper>

        {/* Holidays Tab */}
        {tabIndex === 0 && (
          <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Add New Holiday
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                <TextField
                  label="Holiday Name"
                  value={holidayName}
                  onChange={(e) => setHolidayName(e.target.value)}
                  fullWidth
                />
                <DatePicker
                  label="Date"
                  value={holidayDate}
                  onChange={(newVal) => setHolidayDate(newVal)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
                <Button 
                  variant="contained" 
                  onClick={handleAddHoliday}
                  sx={{ height: 56 }}
                >
                  Add Holiday
                </Button>
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Typography variant="h6" fontWeight={600} gutterBottom>
                Upcoming Holidays
              </Typography>
              <List>
                {holidays.map((h) => (
                  <ListItem 
                    key={h.id}
                    secondaryAction={
                      <IconButton edge="end" onClick={() => handleDelete('holiday', h.id)}>
                        <DeleteIcon color="error" />
                      </IconButton>
                    }
                    sx={{ py: 2 }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        <CelebrationIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={h.name}
                      secondary={dayjs(h.date).format('ddd, MMM D, YYYY')}
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                    <Chip 
                      label={h.type === 'public' ? 'Public Holiday' : 'Company Holiday'} 
                      color={h.type === 'public' ? 'primary' : 'secondary'} 
                      size="small"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        )}

        {/* Birthdays Tab */}
        {tabIndex === 1 && (
          <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Add Birthday
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                <TextField
                  label="Employee Name"
                  value={birthdayName}
                  onChange={(e) => setBirthdayName(e.target.value)}
                  fullWidth
                />
                <DatePicker
                  label="Birth Date"
                  value={birthdayDate}
                  onChange={(newVal) => setBirthdayDate(newVal)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
                <Button 
                  variant="contained" 
                  onClick={handleAddBirthday}
                  sx={{ height: 56 }}
                >
                  Add Birthday
                </Button>
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Typography variant="h6" fontWeight={600} gutterBottom>
                Upcoming Birthdays
              </Typography>
              <List>
                {birthdays.map((b) => (
                  <ListItem 
                    key={b.id}
                    secondaryAction={
                      <IconButton edge="end" onClick={() => handleDelete('birthday', b.id)}>
                        <DeleteIcon color="error" />
                      </IconButton>
                    }
                    sx={{ py: 2 }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'secondary.main' }}>
                        <CakeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={b.name}
                      secondary={
                        <>
                          {dayjs(b.date).format('MMM D')} • {b.department}
                        </>
                      }
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        )}

        {/* Anniversaries Tab */}
        {tabIndex === 2 && (
          <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Add Work Anniversary
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                <TextField
                  label="Employee Name"
                  value={annivName}
                  onChange={(e) => setAnnivName(e.target.value)}
                  fullWidth
                />
                <DatePicker
                  label="Joining Date"
                  value={annivDate}
                  onChange={(newVal) => setAnnivDate(newVal)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
                <Button 
                  variant="contained" 
                  onClick={handleAddAnniversary}
                  sx={{ height: 56 }}
                >
                  Add Anniversary
                </Button>
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Typography variant="h6" fontWeight={600} gutterBottom>
                Upcoming Anniversaries
              </Typography>
              <List>
                {anniversaries.map((a) => (
                  <ListItem 
                    key={a.id}
                    secondaryAction={
                      <IconButton edge="end" onClick={() => handleDelete('anniversary', a.id)}>
                        <DeleteIcon color="error" />
                      </IconButton>
                    }
                    sx={{ py: 2 }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'success.main' }}>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={a.name}
                      secondary={
                        <>
                          {dayjs(a.date).format('MMM D, YYYY')} • {a.department} • {a.years} years
                        </>
                      }
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                    <Chip 
                      label={`${a.years} years`} 
                      color="success" 
                      size="small"
                      variant="outlined"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default EventPage;