import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useState, Fragment } from 'react';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import ModalDelete from 'src/components/modal/modalDelete';
import * as actions from './redux/orderAction'
import {option} from '../../configs/toastOption'
import ModalEditOrder from './view/modal-edit-order';

// ----------------------------------------------------------------------

export default function OrderTableRow({
  orderId,
  selected,
  name,
  avatarUrl,
  email,
  role,
  loadOrders,
  address,
  phone,
  status,
  handleClick,
  handleOpenModalDelete,
}) {
  const [open, setOpen] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [statusOrder, setStatusOrder] = useState('pending');
  const dispatch = useDispatch()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(true)
  };

  const handleCloseModalDelete = () => {
    setOpen(null);
  };

  const handleCloseModalEdit = () =>{
    setOpenModalEdit(null)
  }

  const deleteOrder = () => {
    dispatch(actions.deleteOrderAction(orderId)).then((res) => {
      if(res.status === 200) {
        setOpen(false);
        toast.success('delete order was successful', option)
        loadOrders();
      }
    } )
  };

  const updateOrder = () => {
    const values = {
      id: orderId,
      status: statusOrder
    }
    dispatch(actions.updateOrderAction(values)).then((res) => {
      console.log(res);
    })
  }



  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={name} src={avatarUrl} />
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{email}</TableCell>

        <TableCell>guest</TableCell>

        <TableCell align="center">{phone ? phone : 'No'}</TableCell>

        <TableCell>{address}</TableCell>

        <TableCell>
          <Label color={(status === 'pending' && 'error') || 'success'}>{status}</Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={() => handleOpenModalEdit()}>
            <Iconify icon="eva:edit-fill" />
          </IconButton>
          <IconButton onClick={() => handleOpen()}>
            <Iconify icon="eva:trash-2-outline" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Fragment>
        <ModalDelete open={open} handleClose={handleCloseModalDelete} deleteName={deleteOrder} />
        <ModalEditOrder open={openModalEdit} handleClose={handleCloseModalEdit} status={statusOrder} setStatus={setStatusOrder} save={updateOrder}/>
      </Fragment>
    </>
  );
}

OrderTableRow.propTypes = {
  orderId: PropTypes.any,
  avatarUrl: PropTypes.any,
  email: PropTypes.any,
  handleClick: PropTypes.func,
  phone: PropTypes.any,
  name: PropTypes.any,
  role: PropTypes.any,
  address: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
  loadOrders:PropTypes.any
};
