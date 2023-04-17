import React from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { deleteProducts } from '../../redux/action/ProductAction';

const ModalDelete = ({ id, name }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProducts(id));
    // axios
    //   .delete(process.env.REACT_APP_BACKEND + '/products/' + id)
    //   .then((res) => {
    //     console.log(res);
    //     Swal('Deleted!', 'Product Delete Succes!', 'Success');
    //     setShow(false);
    //     window.location.reload();
    //   })
    //   .catch((err) => {
    //     Swal('Failed!', 'Product Delete Failed!', 'Error');
    //     setShow(false);
    //   });
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <i className="bi bi-trash3-fill"></i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are sure want to delete product? {name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;
