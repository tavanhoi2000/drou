import { useState,useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import { categories } from 'src/_mock/categories';
import Iconify from 'src/components/iconify';

import { useDispatch, useSelector } from 'react-redux';
// import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import CategoryCard from '../category-card';
import ProductFilters from '../product-filters';
import * as actions from '../redux/categoryAction'




// import ProductCartWidget from '../product-cart-widget';

// ----------------------------------------------------------------------

export default function CategoryView() {
  const dispatch = useDispatch();
  const [openFilter, setOpenFilter] = useState(false);

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

  useEffect(() => {
    loadCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch]);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Categories
      </Typography>

      <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Category
        </Button>

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
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>

      {/* <ProductCartWidget /> */}
    </Container>
  );
}
