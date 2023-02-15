import React from "react";
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'

const Login = () => {

    return(
        <div>
            <Button color="success"><Link to="/CreateApprovalDocument">로그인</Link></Button>
        </div>
    )
}
export default Login;