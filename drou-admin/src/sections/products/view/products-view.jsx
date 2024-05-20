import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import { Input, Modal } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Pagination from '@mui/material/Pagination';
import { option } from 'src/configs/toastOption';
import axios from 'axios';
import Iconify from 'src/components/iconify/iconify';

import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import * as actions from '../redux/productAction'
import ProductCartWidget from '../product-cart-widget';




// ----------------------------------------------------------------------

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

export default function ProductsView() {
  const dispatch = useDispatch()
  const [newProductName, setNewProductName] = useState('')
  const [newProductSlug, setNewProductSlug] = useState('')
  const [newProductDescription, setNewProductDescription] = useState('')
  const [newProductPrice, setNewProductPrice] = useState(0)
  const [newProductQuatity, setNewProductQuantity] = useState(0)
  const [newProductImage, setNewProductImage] = useState('')
  const [newProductStatus, setNewProductStatus] = useState('')
  const [newProductCategory, setNewProductCategory] = useState(1)
  const [editProductImage, setEditProductImage] = useState('')

  const [openFilter, setOpenFilter] = useState(false);
  const [openModalAddNewProducts, setOpenModalAddNewProducts] = useState(false);
  const {products, totalPages} = useSelector((state) => ({
    products: state.products.products,
    totalPages: state.products.totalPages
  }))

  const paginateProducts = {
    page: 1
  }

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const loadProducts = () => { 
    dispatch(actions.fetchProductsAction(paginateProducts));
  }
  const handleCloseModalAddNewProduct = () => {
    setOpenModalAddNewProducts(false)
  }

  function uploadImages(e) {
    let arrayImages = [];

    for(let i = 0; i < e.target.files.length; i++) {
      const bodyFormData = new FormData();
      bodyFormData.append("file", e.target.files[i])
      axios.post('http://127.0.0.1:8000/api/upload-file',bodyFormData, {
        headers: {
          'Content-Type' : 'multipart/form-data'
        }
      }).then((res) => {
        arrayImages.push(res.data)
      })
    }

    setNewProductImage(arrayImages);
    setEditProductImage(arrayImages);
}

  const addProduct = () => {
    const requestParams = {
      name: newProductName,
      slug: newProductSlug,
      description: newProductDescription,
      price: newProductPrice,
      quantity: newProductQuatity,
      images: newProductImage,
      status: newProductStatus,
      category_id: newProductCategory
    }

    dispatch(actions.addNewProductAction(requestParams)).then((res) => {
      if(res.status === 200) {
        toast.success('Product added successfully', option)
        setOpenModalAddNewProducts(false);
        loadProducts();
      } else {
        toast.error(`Error : ${res.data.message}`)
      }
    })
  }

  const nextPageProducts = (e,page) => {
    paginateProducts.page = page
    dispatch(actions.fetchProductsAction(paginateProducts))
  }
  


  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch])

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>

      <Button onClick={() => setOpenModalAddNewProducts(true) } variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Product
        </Button>


      <Modal
        open={openModalAddNewProducts}
        onClose={handleCloseModalAddNewProduct}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h4">
            Add new product
          </Typography>

          <Input style={{width: '500px'}} onChange={(e) => setNewProductName(e.target.value)}  id="modal-modal-description" placeholder='Name' sx={{ mt: 2 }}>
          <OutlinedInput placeholder="Name"/>
          </Input>

          <Input style={{width: '500px'}} placeholder='Slug' onChange={(e) => setNewProductSlug(e.target.value)} id="modal-modal-description" sx={{ mt: 4 }}>
          <OutlinedInput placeholder="Name"/>
          </Input>

          <Input style={{width:'500px'}} placeholder='Description ...' onChange={(e) => setNewProductDescription(e.target.value)} id="modal-modal-description" sx={{ mt: 4 }}>
          <OutlinedInput
          placeholder="Name"
          
        />
          </Input>
          <Input style={{width: '500px'}} placeholder='Price' onChange={(e) => setNewProductPrice(e.target.value)} id="modal-modal-description" sx={{ mt: 4 }}>
          <OutlinedInput
          placeholder="Name"
          
        />
          </Input>
          <Input style={{width: '500px'}} defaultValue={1} placeholder='Quantity' onChange={(e) => setNewProductQuantity(e.target.value)} id="modal-modal-description" sx={{ mt: 4 }}>
          <OutlinedInput
          placeholder="Quatity"
          
        />
          </Input>

          <input type='file' style={{width: '500px'}} multiple onChange={uploadImages} id="modal-modal-description" />
          <OutlinedInput />

          <Input style={{width: '500px'}} defaultValue="active" placeholder='Status' onChange={(e) => setNewProductStatus(e.target.value)} id="modal-modal-description" sx={{ mt: 4 }}>
          <OutlinedInput placeholder="Name"/>
          </Input>

          <Input style={{width: '500px'}} defaultValue={1} placeholder='Category' onChange={(e) => setNewProductCategory(e.target.value)} id="modal-modal-description" sx={{ mt: 4 }}>
          <OutlinedInput placeholder="Name"/>
          </Input>

          <Button onClick={() => addProduct()} variant="contained" color="inherit" sx={{ml: 65, mt: 5}}> Add</Button>
        </Box>
      </Modal>


      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} loadProducts={loadProducts} uploadImage={uploadImages} editProductImage={editProductImage}/>
          </Grid>
        ))}
      </Grid>

      <Stack alignItems='center' sx={{ mt:5}} spacing={2} >
      <Pagination count={totalPages} onChange={nextPageProducts}/>
      </Stack>
    </Container>
  );
}
