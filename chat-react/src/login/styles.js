const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
      backgroundColor: '#79CBCA',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing.unit,
      
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
      backgroundColor: '#ff9472',
      fontWeight: 'bolder',
    },
    noAccountHeader: {
      width: '100%'
    },
    signUpLink: {
      width: '100%',
      textDecoration: 'none',
      color: '#240b36',
      fontWeight: 'bolder'
    },
    errorText: {
      color: 'red',
      textAlign: 'center'
    }
  });
  
  export default styles;