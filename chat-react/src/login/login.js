import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HostComponent from '../host/host'

const firebase = require("firebase");

class LoginComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      serverError: false
    };
  }

  render() {

    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline/>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">{/*criação do taper*/}
          Conecte-se!
          </Typography>
          <form onSubmit={(e) => this.submitLogin(e)} className={classes.form}>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='login-email-input'>Entrar com o Email</InputLabel>
              <Input autoComplete='email' autoFocus onChange={(e) => this.userTyping('email', e)} id='login-email-input'></Input>
            </FormControl>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='login-password-input'>Entrar com a sua Senha</InputLabel>
              <Input autoComplete="current-password" type="password" onChange={(e) => this.userTyping('password', e)} id='login-password-input'></Input>
            </FormControl>
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Log In</Button>
          </form>
          { this.state.serverError ? 
            <Typography className={classes.errorText} component='h5' variant='h6'>
              Incorrect Login Information
            </Typography> :
            null
          }
          <h5 className={classes.noAccountHeader}>Ainda não possui uma conta?</h5>
          <Link className={classes.signUpLink} to='/signup'>Inscrever-se!</Link> {/*caso o usuario n tiver uma conta, este link o direcionará para a criação de usuario*/}
        </Paper>
      </main>
    );
  }
//evento do login e email; o value é o valor que eles representam
  userTyping = (whichInput, event) => {
    switch (whichInput) {
      case 'email':
        this.setState({ email: event.target.value });
        break;

      case 'password':
        this.setState({ password: event.target.value });
        break;

      default:
        break;
    }
  }
//de certa forma é autentificar o login no banco de dados do firebase, se for certo, ele entra, caso contrario não
  submitLogin = async (e) => {
    e.preventDefault(); // This is to prevent the automatic refreshing of the page on submit.

    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {//function
        this.props.history.push('/dashboard'); //vai entregar para o dash
      }, err => {
        this.setState({ serverError: true });
        console.log('Error logging in: ', err);
      });
  };
  //lembrando que a senha tem q ser forte e o email "aceitavel", caso contrario surgirá uma mensagem de erro!!

}

export default withStyles(styles)(LoginComponent);