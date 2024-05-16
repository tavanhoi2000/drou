import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { TableRow } from '@mui/material';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Iconify from 'src/components/iconify';
import { option } from 'src/configs/toastOption';

import { fCurrency } from 'src/utils/format-number';

import Label from 'src/components/label';
import ModalDelete from 'src/components/modal/modalDelete';
import * as actions from './redux/categoryAction.js';
import { toast } from 'react-toastify';
import ModalEditCategory from './view/modal-edit-category.jsx';
// import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

export default function CategoryCard({ category, loadCategories, uploadImage, editCategoryImage }) {
  const [open, setOpen] = useState(null);
  const [openModalDelete, setModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [editCategoryName, setEditCategoryName] = useState('');
  const [editCategorySlug, setEditCategorySlug] = useState('');
  const [editCategoryDescription, setEditCategoryDescription] = useState('');
  const dispatch = useDispatch();

  console.log(editCategoryName);

  const handleCloseModalEdit = () => {
    setOpenModalEdit(null);
  };
  const handleOpenModalEdit = () => {
    setOpenModalEdit(true);
  };
  const handleCloseModalDelete = () => {
    setModalDelete(null);
  };
  const handleOpenModalDelete = () => {
    setModalDelete(true);
  };
  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpen(null);
  };

  const deleteCategory = () => {
    dispatch(actions.deleteCategoryAction(category.id)).then((res) => {
      if (res.status === 200) {
        setModalDelete(false);
        toast.success('delete category successfully', option);
        loadCategories();
      }
    });
  };

  const updateCategory = () => {
    const currentFormValues = {
      id: category.id,
      name: editCategoryName,
      slug: editCategorySlug,
      description: editCategoryDescription,
      image: editCategoryImage,
    };
    dispatch(actions.updateCategoryAction(currentFormValues)).then((res) => {
      console.log(res);
    });
  };

  const renderStatus = (
    <Label
      variant="filled"
      color={(category.status === 'sale' && 'error') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {category.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={category.name}
      src={category.image}
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
        {/* {fCurrency(category.description)} */}
      </Typography>
      {/* &nbsp; */}
      {fCurrency(category.description)}
    </Typography>
  );

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {category.status && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {category.name}
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={product.colors} /> */}
          Action
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
      <ModalEditCategory
        open={openModalEdit}
        handleClose={handleCloseModalEdit}
        category={category}
        uploadImage={uploadImage}
        updateCategory={updateCategory}
        setEditCategoryName={setEditCategoryName}
        setEditCategorySlug={setEditCategorySlug}
        setEditCategoryDescription={setEditCategoryDescription}
      />
      <ModalDelete
        open={openModalDelete}
        handleClose={handleCloseModalDelete}
        deleteName={deleteCategory}
      />
    </Card>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.object,
  loadCategories: PropTypes.any,
  uploadImage: PropTypes.any,
  editCategoryImage: PropTypes.any,
};
