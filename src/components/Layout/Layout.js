import  React  from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css'

const Layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <div className={classes.Container}>{props.children}</div>
    </Aux>
)


export default Layout