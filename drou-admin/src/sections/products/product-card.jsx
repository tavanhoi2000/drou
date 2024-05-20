import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';

import { fCurrency } from 'src/utils/format-number';

import Label from 'src/components/label';
import ModalDelete from 'src/components/modal/modalDelete';
import { useDispatch } from 'react-redux';
import * as actions from './redux/productAction';
import { toast } from 'react-toastify';
import { option } from 'src/configs/toastOption';
import ModalEditProduct from './view/modal-edit-product';

// import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

export default function ShopProductCard({ product, loadProducts, uploadImage, editProductImage }) {
  const [open, setOpen] = useState(null);
  const [openModalDelete, setModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const dispatch = useDispatch();

  const handleCloseModalEdit = () => {
    setOpenModalEdit(null);
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(true);
  };

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleClose = () => {
    setModalDelete(null);
  };

  const handleOpenModalDelete = () => {
    setModalDelete(true);
  };

  const deleteProduct = () => {
    dispatch(actions.deleteProductAction(product.id)).then((res) => {
      if (res.status === 200) {
        setModalDelete(false);
        toast.success('delete product successfully', option);
        loadProducts();
      }
    });
  };

  const updateProduct = (values) => {
    const currentFromValues = {
      name: values.name,
      slug: values.slug,
      description: values.description,
      price: values.price,
      quantity: values.quantity,
      status: values.status,
      category_id: values.category_id,
      images: editProductImage,
      id: product.id
    }
    dispatch(actions.updateProductAction(currentFromValues)).then((res) => {
      if(res.status === 200) {
        setOpenModalEdit(false);
        toast.success('product updated successfully', option);
        loadProducts()
      }
    })
  }

  const renderStatus = (
    <Label
      variant="filled"
      color={(product.status === 'sale' && 'error') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {product.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.images}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
        }}
      >
        {product.priceSale && fCurrency(product.priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(product.price)}
    </Typography>
  );

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {product.status && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name}
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={product.colors} /> */}
          {renderPrice}
          <TableRow>
            <TableCell align="right">
              <IconButton onClick={handleOpenMenu}>
                <Iconify icon="eva:more-vertical-fill" />
              </IconButton>
            </TableCell>
          </TableRow>
        </Stack>

        <Popover
          open={!!open}
          anchorEl={open}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: { width: 140 },
          }}
        >
          <MenuItem onClick={handleOpenModalEdit}>
            <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
            Edit
          </MenuItem>

          <MenuItem onClick={handleOpenModalDelete} sx={{ color: 'error.main' }}>
            <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
            Delete
          </MenuItem>
        </Popover>
      </Stack>

      <ModalDelete open={openModalDelete} handleClose={handleClose} deleteName={deleteProduct} />
      <ModalEditProduct open={openModalEdit} handleClose={handleCloseModalEdit} product={product} updateProduct={updateProduct} uploadImage={uploadImage}/>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
  loadProducts: PropTypes.any,
  editProductImage: PropTypes.any,
  uploadImage: PropTypes.any
};
