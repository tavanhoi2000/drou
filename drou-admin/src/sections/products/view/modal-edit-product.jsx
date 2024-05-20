import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Input, Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function ModalEditProduct({
  open,
  handleClose,
  product,
  uploadImage,
  updateProduct,
}) {


  const [productEditing, setProductEditing] = useState({})
  const [editProductName, setEditProductName] = useState(product ? product.name : '');
  const [editProductSlug, setEditProductSlug] = useState(product ? product.slug : '');
  const [editProductDescription, setEditProductDescription] = useState(product ? product.description : '');
  const [editProductPrice, setEditProductPrice] = useState(product ? product.price : '');
  const [editProductQuantity, setEditProductQuantity] = useState(product ? product.quantity : '');
  const [editProductStatus, setEditProductStatus] = useState(product ? product.status : '');
  const [editProductCategory, setEditProductCategory] = useState(product ? product.category_id : '');




  useEffect(() => {
    if(!product) return
    setProductEditing(product)
  },[product])

  const valuesSaveEdit = {
    name: editProductName,
    slug: editProductSlug,
    description: editProductDescription,
    price: editProductPrice,
    quantity: editProductQuantity,
    status: editProductStatus,
    category_id: editProductCategory
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
          onChange={(e) => setEditProductName(e.target.value)}
          defaultValue={productEditing.name}
          id="modal-modal-description"
          placeholder="Name"
          name='name'
          sx={{ mt: 2 }}
        >
          <OutlinedInput placeholder="Name" />
        </Input>

        <Input
          style={{ width: '500px' }}
          onChange={(e) => setEditProductSlug(e.target.value)}
          defaultValue={productEditing.slug}
          placeholder="Slug"
          id="modal-modal-description"
          name='slug'
          sx={{ mt: 4 }}
        >
          <OutlinedInput placeholder="Name" />
        </Input>

        <Input
          style={{ width: '500px' }}
          onChange={(e) => setEditProductDescription(e.target.value)}
          defaultValue={productEditing.description}
          name='description'
          placeholder="Description ..."
          id="modal-modal-description"
          sx={{ mt: 4 }}
        >
          <OutlinedInput placeholder="Description" />
        </Input>

        <Input
          style={{ width: '500px' }}
          onChange={(e) => setEditProductPrice(e.target.value)}
          defaultValue={productEditing.price}
          name='price'
          placeholder="Price"
          id="modal-modal-price"
          sx={{ mt: 4 }}
        >
          <OutlinedInput placeholder="Price" />
        </Input>

        <Input
          style={{ width: '500px' }}
          onChange={(e) => setEditProductQuantity(e.target.value)}
          defaultValue={productEditing.quantity}
          name='quantity'
          placeholder="Quantity"
          id="modal-modal-quantity"
          sx={{ mt: 4 }}
        >
          <OutlinedInput placeholder="Quantity" />
        </Input>

        <Input
          style={{ width: '500px' }}
          onChange={(e) => setEditProductStatus(e.target.value)}
          defaultValue={productEditing.status}
          name='status'
          placeholder="Status"
          id="modal-modal-status"
          sx={{ mt: 4 }}
        >
          <OutlinedInput placeholder="Status" />
        </Input>

        <Input
          style={{ width: '500px' }}
          onChange={(e) => setEditProductCategory(e.target.value)}
          defaultValue={productEditing.category_id}
          name='quantity'
          placeholder="Category"
          id="modal-modal-category"
          sx={{ mt: 4 }}
        >
          <OutlinedInput placeholder="Category" />
        </Input>

        <input
          type="file"
          style={{ width: '500px' }}
          onChange={uploadImage}
          id="modal-modal-description"
          style={{ marginTop: '48px'}}
          multiple
          // sx={{ mt: 4 }}
        />
        <hr style={{ width: '80%', marginRight: '20%'}}/>

        <Button onClick={() => updateProduct(valuesSaveEdit)} variant="contained" color="inherit" sx={{ ml: 65, mt: 5 }}>
          {' '}
          Save
        </Button>
      </Box>
    </Modal>
  );
}
