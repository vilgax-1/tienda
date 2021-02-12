import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Usuariocard } from './UsuarioCard';

export const Usuarioscreen = (props) => {
    const { users } = useSelector(data => data.users);

    return (
        <>
        <div className="container-users">
            {
                users.map(value => (
                    <Usuariocard key={ value.id } props={value} />
                ))
            }
        </div>
        </>
    )
}
