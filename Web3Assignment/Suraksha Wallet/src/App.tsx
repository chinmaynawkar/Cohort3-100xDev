// src/App.tsx

import React, { useState } from 'react';
import CustomDropdownMenu from './components/CustomeDropDown';
import InboxIcon from '@mui/icons-material/Inbox';
import ErrorIcon from '@mui/icons-material/Error';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PaidIcon from '@mui/icons-material/Paid';
import { SelectChangeEvent } from '@mui/material';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('outstanding');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string);
  };

  const options = [
    {
      label: 'All Invoices',
      value: 'all',
      icon: <InboxIcon />,
    },
    {
      label: 'Outstanding invoices',
      value: 'outstanding',
      icon: <ErrorIcon />,
      style: { backgroundColor: '#ffe6e6', color: '#ff0000' },
    },
    {
      label: 'Overdue',
      value: 'overdue',
      icon: <ErrorIcon />,
    },
    {
      label: 'Scheduled',
      value: 'scheduled',
      icon: <ScheduleIcon />,
    },
    {
      label: 'Paid',
      value: 'paid',
      icon: <PaidIcon />,
    },
  ];

  return (
    <><div>
      <Navbar />
      {/* <CustomDropdownMenu
      value={selectedValue}
      onChange={handleChange}
      options={options}
      label="Invoices"
    /> */}
    </div><Footer /></>
  );
};

export default App;