import { Link } from 'react-router-dom'; /*este é usado para o Log In!*/
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
const firebase = require("firebase");

class SignupComponent extends React.Component {

    constructor() {
        super();
        this.state = {
        email: null,
        password: null,
        passwordConfirmation: null,
        signupError: ''
    };
  }

  render() {

    const { classes } = this.props;

    return (
        <main className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign Up!
                </Typography>
                <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-email-input'>Escreva seu Email</InputLabel>
                        <Input autoComplete='email' autoFocus onChange={(e) => this.userTyping('email', e)} id='signup-email-input'></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-password-input'>Crie uma Senha</InputLabel>
                        <Input type="password" onChange={(e) => this.userTyping('password', e)} id='signup-password-input'></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-password-confirmation-input'>Confirm Your Password</InputLabel>
                        <Input type="password" onChange={(e) => this.userTyping('passwordConfirmation', e)} id='signup-password-confirmation-input'></Input>
                    </FormControl>
                    <Button type='submit' fullWidth variant='contained' color='Info' className={classes.submit}>ENTRAR</Button>
                </form>
                { 
                this.state.signupError ? 
                <Typography className={classes.errorText} component='h5' variant='h6'>
                    {this.state.signupError}
                </Typography> :
                null
                }
                <h5 className={classes.hasAccountHeader}>Ainda não possui uma conta??</h5>
                <Link className={classes.logInLink} to='/login'>Log In!</Link>
                </Paper>
        </main>
    );
  }

  //os eventos de colocar email, senha e a confirmação da senha, caso o email ou senha não for valido, apareceça uma mensagem de erro
    userTyping = (whichInput, event) => {
    switch (whichInput) {
        case 'email':
        this.setState({ email: event.target.value });
        break;

        case 'password':
        this.setState({ password: event.target.value });
        break;

        case 'passwordConfirmation':
        this.setState({ passwordConfirmation: event.target.value });
        break;

        default:
        break;
    }
  }

    formIsValid = () => this.state.password === this.state.passwordConfirmation;

    submitSignup = (e) => {
    e.preventDefault(); //Isso evita a atualização automática da página no envio.

    if(!this.formIsValid()) {//quando as senhas não forem iguais
        this.setState({ signupError: 'Senhas não combinadas' });
        return;
    }
//o usuario e senha derão ser "reais", para q o sistema prossiga; senhas fortes e emails fortes
    firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(authRes => {
            const userObj = {
            email: authRes.user.email,
            friends: [],
            messages: []
        };
        //quando der tudo certo, o usuario vai ser direcionado a pasta dashboard
        firebase
            .firestore()
            .collection('users')//o user do usuario vai estar gravado no banco de dados do firebase
            .doc(this.state.email)
            .set(userObj)
            .then(() => {
            this.props.history.push('/dashboard');
        }, dbErr => {
            console.log('Failed to add user to the database: ', dbErr);
            this.setState({ signupError: 'Falha ao adicionar usuário' });
        });
    }, authErr => {
        console.log('Failed to create user: ', authErr);
        this.setState({ signupError: 'Falha em criar um user' });
    });
  };
}

export default withStyles(styles)(SignupComponent);