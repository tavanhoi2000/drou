import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Input, Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function ModalEditCategory({
  open,
  handleClose,
  category,
  uploadImage,
  updateCategory,
}) {


  const [categoryEditing, setCategoryEditing] = useState({})
  const [editCategoryName, setEditCategoryName] = useState(category ? category.name : '');
  const [editCategorySlug, setEditCategorySlug] = useState(category ? category.slug : '');
  const [editCategoryDescription, setEditCategoryDescription] = useState(category ? category.description : '');

  useEffect(() => {
    if(!category) return
    setCategoryEditing(category)
  },[category])

  const valuesSaveEdit = {
    name: editCategoryName,
    slug: editCategorySlug,
    description: editCategoryDescription
  }



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h4">
          Edit category
        </Typography>

        <Input
          style={{ width: '500px' }}
          onChange={(e) => setEditCategoryName(e.target.value)}
          defaultValue={categoryEditing.name}
          id="modal-modal-description"
          placeholder="Name"
          name='name'
          sx={{ mt: 2 }}
        >
          <OutlinedInput placeholder="Name" />
        </Input>

        <Input
          style={{ width: '500px' }}
          onChange={(e) => setEditCategorySlug(e.target.value)}
          defaultValue={categoryEditing.slug}
          placeholder="Slug"
          id="modal-modal-description"
          name='slug'
          sx={{ mt: 4 }}
        >
          <OutlinedInput placeholder="Name" />
        </Input>

        <Input
          style={{ width: '500px' }}
          onChange={(e) => setEditCategoryDescription(e.target.value)}
          defaultValue={categoryEditing.description}
          name='description'
          placeholder="Description ..."
          id="modal-modal-description"
          sx={{ mt: 4 }}
        >
          <OutlinedInput placeholder="Name" />
        </Input>

        <Input
          type="file"
          style={{ width: '500px' }}
          onChange={uploadImage}
          id="modal-modal-description"
          sx={{ mt: 4 }}
        />

        <Button onClick={() => updateCategory(valuesSaveEdit)} variant="contained" color="inherit" sx={{ ml: 65, mt: 5 }}>
          {' '}
          Save
        </Button>
      </Box>
    </Modal>
  );
}
