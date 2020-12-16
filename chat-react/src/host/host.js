import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import logo from './img/apple-logo-clip-art-png-clip-art.png'


const firebase = require("firebase");

class HostComponent extends React.Component {


    render() {

    const { classes } = this.props;
    return (
        <main className={classes.main}>
            <div className={classes.button}>
                <a href="./login" >
                    <p>Clique em mim <br></br>
                    para ir ao Login</p>
                </a>
            </div>
            {/*
            <form>
                <div className={classes.texto}>
                    <h3>Aperte o botão a cima e espere <br></br>o Login a direita</h3>
                </div>
            </form>
            */}
        </main>

    );
    }
}
export default withStyles(styles)(HostComponent);