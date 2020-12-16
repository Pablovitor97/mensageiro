const styles = threme => ({
    root: {
        backgroundColor: threme.palette.background.paper,
        height: 'calc(100% - 35px)',
        position: 'absolute',
        left: '0',
        width: '300px',
        boxShadow:'0px 0px 2px black',
        backgroundColor:'#ddd6f3', //a parte aonde fica os contatos para enviar a mensagem

    },
    listItem: {
        cursor: 'pointer'
        
    },
    newChatBtn: {
        borderRadius: '0px'
    },
    unreadMessage: {
        color: 'read',
        position: 'absolute',
        top: '0',
        right: '5px'
    }
});

export default styles;