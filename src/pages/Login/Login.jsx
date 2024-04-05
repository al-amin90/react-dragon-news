import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

import Navbar from '../shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Provider";

const Login = () => {
    const { userLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        userLogin(email, password)
            .then(result => {
                console.log(result.user);

                //navigate to where it should be
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => console.log(error))
    }

    return (
        <div >
            <Navbar></Navbar>
            <div className="flex mt-20 items-center justify-center">
                <Card color="transparent" shadow={false}>
                    <Typography className="text-center border-b pb-10" variant="h4" color="blue-gray">
                        Login your account
                    </Typography>

                    <form onSubmit={handleLogin} className="mt-8 mb-16 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Email address
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter your email address"
                                name="email"
                                required
                                type="email"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{ className: "bg-gray-200 rounded-md" }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                required
                                name="password"
                                placeholder="Enter your password"
                                className=" !border-t-blue-gray-200  focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{ className: "bg-gray-200 rounded-md" }}
                            />
                        </div>

                        <Button type="submit" className="mt-6 py-5 capitalize text-base" fullWidth>
                            Login
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Don't have an account?{" "}
                            <Link to="/singup" className="font-medium text-red-600">
                                Register
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>

        </div>
    );
};

export default Login;