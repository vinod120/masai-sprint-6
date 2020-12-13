import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { userLogin } from '../Redux/Auth/authAction';

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:10
    }
}))
const Login = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleClick = ()=>{
        let payload = {
            email: email,
            password: password
        }
        dispatch(userLogin(payload))
    }
    const isAuth = useSelector(state=>state.login.isAuth)
    const isLoading = useSelector(state=>state.login.isLoading)
    const error = useSelector(state=>state.login.error)
    if(isAuth){
        return(
            <Redirect to='/dashboard' />
        )
    }
    else{
        return (
            <Container>
                <Grid>
                    <form  noValidate autoComplete="off">
                        <TextField id="standard-basic" label="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <br />
                        <TextField id="standard-basic" label="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <br />
                        <Button variant="contained" color="secondary" className={classes.root} onClick={handleClick}>
                            Login
                        </Button>
                    </form>
                </Grid>
                <Grid>
                    {isLoading && <div><span style={{color:'#f50057', marginLeft: 5}}>Loading...</span> <CircularProgress color="secondary"/></div>}
                    {error && error}
                </Grid>
            </Container>

        )
    }
}

export default Login