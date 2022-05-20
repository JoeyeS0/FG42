import React from 'react';
import { Box } from '@material-ui/core';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import NoteRoundedIcon from '@material-ui/icons/NoteRounded';

export const getSeverityBadge = (severityLevel: string, numberOfIssues?: number) => {
  switch(severityLevel) {
    case 'warning':
      return (
        <Box display="flex" alignItems="center" fontWeight="fontWeightLight" mr={2} style={{ color: '#f57c00'}}>
          <WarningRoundedIcon fontSize="small"/>&nbsp; { numberOfIssues } Warning
        </Box>
    );
    case 'error':
      return (
        <Box display="flex" alignItems="center" fontWeight="fontWeightLight" mr={2} style={{ color: '#d32f2f'}}>
          <ErrorRoundedIcon fontSize="small"/>&nbsp; { numberOfIssues } Error
        </Box>
    );
    case 'note':
      return (
        <Box display="flex" alignItems="center" fontWeight="fontWeightLight" mr={2} style={{ color: '#1976d2'}}>
          <NoteRoundedIcon fontSize="small"/>&nbsp; { numberOfIssues } Note
        </Box>
    );
    default: return 'Unknown';
  }
}