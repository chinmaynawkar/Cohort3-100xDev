import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onConfirm: () => void;
}

const AlertDialog = ({
  open,
  onClose,
  title,
  description,
  onConfirm,
}: AlertDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography variant='body1'>{description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary' variant='outlined' size='small'>
          Cancel
        </Button>
        <Button onClick={onConfirm} color='primary' variant='contained' size='small'>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;