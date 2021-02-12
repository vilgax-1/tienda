import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Productoscreen } from '../components/productos/ProductoScreen'
import { Usuarioscreen } from '../components/usuarios/UsuarioScreen'
import { Ventascreen } from '../components/ventas/VentasScreen'

export const Storerouter = (props) => {
    
    return (
            <Switch>
                    <Route exact path="/usuarios" component={ Usuarioscreen }/>
                    <Route exact path="/productos" component={ Productoscreen } />
                    <Route exact path="/ventas" component={ Ventascreen } />
                    <Redirect to="/productos"/>
            </Switch>
    )
}
