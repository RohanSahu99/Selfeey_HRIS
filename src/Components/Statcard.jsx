'use client';
import { Card, CardContent, Typography } from '@mui/material';

export default function StatCard({ title, value }) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">{value}</Typography>
      </CardContent>
    </Card>
  );
}
