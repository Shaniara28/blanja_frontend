import axios from 'axios';
import swal from 'sweetalert2';

// Read ( GET )
export const getProduct = (setProducts) => async (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_BACKEND}/products`).then((response) => {
      console.log(response.data);
      setProducts(response.data.data);
    });
    dispatch({ type: 'GET_ALL_PRODUCT', payload: 'success' });
  } catch (error) {
    swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

// Create
export const createProduct = (data, saveImage) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.stock);
    formData.append('stock', data.price);
    formData.append('rating', data.rating);
    formData.append('color', data.color);
    formData.append('size', data.stock);
    formData.append('photo', saveImage);
    formData.append('deskripsi', data.deskripsi);
    formData.append('id_category', data.id_category);
    formData.append('id_seller', data.id_seller);
    axios
      .post(process.env.REACT_APP_BACKEND + '/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        swal.fire({
          title: 'Product Added',
          text: `New product have been added`,
          icon: 'success',
        });
      });
    dispatch({ type: 'CREATE_PRODUCT', payload: 'success' });
  } catch (err) {
    swal.fire({
      text: err.response.data.message,
      icon: 'warning',
    });
  }
};

// Update
export const updateProduct = (data, photo) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('id_produk', data.id);
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('deskripsi', data.deskripsi);
    formData.append('stock', data.stock);
    formData.append('rating', data.rating);
    formData.append('color', data.color);
    formData.append('size', data.size);
    formData.append('photo', photo);
    formData.append('id_category', '1');
    formData.append('id_seller', 'ff016947-df2e-49f3-9ec1-63dadcd7bdc0');

    const res = await axios
      .put(`${process.env.REACT_APP_BACKEND}/products/${data.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        swal.fire({
          title: 'Product Update',
          text: `Update Product Success`,
          icon: 'success',
        });
        dispatch({
          type: 'UPDATE_PRODUCT',
          payload: res.data,
        });
      })
      .catch((err) => {
        swal.fire({
          text: 'error',
          icon: 'error',
        });
      });
  } catch (error) {
    console.log(error);
  }
};

// Delete
export const deleteProducts = (id) => async (dispatch) => {
  try {
    axios.delete(process.env.REACT_APP_BACKEND + '/products/' + id).then((res) => {
      console.log(res);
      swal.fire({
        title: 'Product Delete',
        text: `Delete Product Success`,
        icon: 'success',
      });
      window.location.reload();
    });
    dispatch({ type: 'DELETE_PRODUCT', payload: 'success' });
  } catch (error) {
    swal.fire({
      text: 'success delete product',
      icon: 'warning',
    });
  }
};
