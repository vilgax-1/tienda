import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { productStartAddNew, productStartUpload ,productoClearSetActive } from '../../actions/productos';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)', 
    }
};

Modal.setAppElement('#root');

const initProduct = {
  nombre: '',
  precio: '',
  tamano: '',
  link: '',
}

export const ProductoModal = () => {
    const dispatch = useDispatch();

    const { modalOpen } = useSelector(state => state.ui);
    const { activeProduct } = useSelector(state => state.products);
    
    const [formValues, setFormValue ] = useState(initProduct);
    const { nombre, precio, tamano, link  } = formValues;
    
    useEffect(() => {
      if(activeProduct){
        setFormValue(activeProduct)
      }
    }, [activeProduct, setFormValue])

    const closeModal = () =>{
        dispatch(uiCloseModal());
        dispatch(productoClearSetActive())
        setFormValue(initProduct);
    }
    
    const handleInputChange = ({target}) =>{
      setFormValue({
        ...formValues,
        [target.name]: target.value 
      })
    }

    const handleSubmitForm = (e) => {
      e.preventDefault();
      if(!activeProduct){
        dispatch(productStartAddNew(formValues));
      }else{
        dispatch(productStartUpload(formValues));
      }
      closeModal();
    } 

    return (
        <Modal
          isOpen={ modalOpen }
          onRequestClose={ closeModal }
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1 className="u-text-center">
            {
              (!activeProduct && 'Nuevo producto') ||
              (activeProduct && 'Actualizar Producto') 
            }
            </h1>
          <form onSubmit={ handleSubmitForm }>
            <div className="form-box">
              <label className="text-control">Nombre</label>
              <input className="form-control" name="nombre"  value={nombre} onChange={ handleInputChange }/>
            </div>
            <div className="form-box">
              <label className="text-control">Precio</label>
              <input className="form-control" name="precio" value={precio} onChange={ handleInputChange }/>
            </div>
            <div className="form-box">
              <label className="text-control">Tamaño</label>
              <select className="form-control" name="tamano" value={tamano}  onChange={ handleInputChange }>
                <option disabled defaultValue value="">Selecciona una opcion</option>
                <option value="G">G</option>
                <option value="M">M</option>
                <option value="C">C</option>
              </select>
            </div>
            <div className="form-box">
              <label className="text-control">Link</label>
              <input className="form-control" name="link" value={link} onChange={ handleInputChange }/>
            </div>
            <button type="submit" className="btn btn-modal">
            {
              (!activeProduct && 'Crear') ||
              (activeProduct && 'Actualizar') 
            }
            </button>
          </form>
        </Modal>
    )
}
