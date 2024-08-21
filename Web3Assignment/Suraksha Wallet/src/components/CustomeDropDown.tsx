// src/components/CustomDropdownMenu.tsx

import React from 'react';
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  ListItemIcon,
  ListItemText,
  FormControl,
  InputLabel,
} from '@mui/material';

interface Option {
  label: string;
  value: string;
  icon: React.ReactNode;
  style?: React.CSSProperties;
}

interface CustomDropdownMenuProps {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  options: Option[];
  label: string;
}

const CustomDropdownMenu: React.FC<CustomDropdownMenuProps> = ({
  value,
  onChange,
  options,
  label,
}) => {
  return (
    <FormControl fullWidth variant="outlined" sx={{ minWidth: 200 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
        sx={{
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} style={option.style}>
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropdownMenu;