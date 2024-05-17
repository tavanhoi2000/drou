import axios from 'axios';
import { toast } from 'react-toastify';
import { useState,useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { option } from 'src/configs/toastOption';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Input, Modal } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';

// import { categories } from 'src/_mock/categories';
import Iconify from 'src/components/iconify';

import ProductSort from '../product-sort';
import CategoryCard from '../category-card';
import ProductFilters from '../product-filters';
import * as actions from '../redux/categoryAction'

// import ProductCard from '../product-card';


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


export default function CategoryView() {
  const dispatch = useDispatch();
  const [openFilter, setOpenFilter] = useState(false);
  const [openModalAddNewCategory, setOpenModalAddNewCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategorySlug, setNewCategorySlug] = useState('');
  const [newCategoryDescription, setNewCategoryDescription] = useState('')
  const [newCategoryImage, setNewCategoryImage] = useState('');
  const [editCategoryImage,setEditCategoryImage] = useState('')

  const categories = useSelector((state) => state.category.categories)

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const loadCategories = () => {
    dispatch(actions.fetchCategoriesAction())
  }

  const handleCloseModalAddNewCategory = () => {
    setOpenModalAddNewCategory(false)
  }

  const uploadImage = (e) => {
    const bodyFormData = new FormData();
    bodyFormData.append('file',e.target.files[0])
    axios.post('http://127.0.0.1:8000/api/upload-file',bodyFormData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    }).then((res) => {
      setNewCategoryImage(res.data)
      setEditCategoryImage(res.data)
    })
  }

  const addCategory = () => {
    const requestParams = {
      name: newCategoryName,
      slug: newCategorySlug,
      description: newCategoryDescription,
      image: newCategoryImage
    }

    dispatch(actions.addNewCategoryAction(requestParams)).then((res) => {
      if(res.status === 200 || res.status === 201) {
        toast.success('Category added successfully', option)
        setOpenModalAddNewCategory(false);
        loadCategories();
      } else {
        toast.error(`Error: ${res.data.message}`)
      }
    })
  }

  useEffect(() => {
    loadCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch]);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Categories
      </Typography>

      <Button onClick={() => setOpenModalAddNewCategory(true)} variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Category
        </Button>

        <Modal
        open={openModalAddNewCategory}
        onClose={handleCloseModalAddNewCategory}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h4">
            Add new category
          </Typography>

          <Input style={{width: '500px'}} onChange={(e) => setNewCategoryName(e.target.value)}  id="modal-modal-description" placeholder='Name' sx={{ mt: 2 }}>
          <OutlinedInput placeholder="Name"/>
          </Input>

          <Input style={{width: '500px'}} onChange={(e) => setNewCategorySlug(e.target.value)} placeholder='Slug'  id="modal-modal-description" sx={{ mt: 4 }}>
          <OutlinedInput placeholder="Name"/>
          </Input>

          <Input style={{width:'500px'}} onChange={(e) => setNewCategoryDescription(e.target.value)} placeholder='Description ...' id="modal-modal-description" sx={{ mt: 4 }}>
          <OutlinedInput
          placeholder="Name"
          
        />        
          </Input>

          <Input type='file' style={{width: '500px'}}  onChange={uploadImage} id="modal-modal-description" sx={{ mt:4}}/>

          <Button onClick={() => addCategory()} variant="contained" color="inherit" sx={{ml: 65, mt: 5}}> Add</Button>
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
        {categories.map((category) => (
          <Grid key={category.id} xs={12} sm={6} md={3}>
            <CategoryCard category={category} loadCategories={loadCategories} uploadImage={uploadImage} editCategoryImage={editCategoryImage}/>
          </Grid>
        ))}
      </Grid>

      

      {/* <ProductCartWidget /> */}
    </Container>
  );
}
