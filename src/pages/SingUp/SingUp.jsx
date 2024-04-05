import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

import Navbar from '../shared/Navbar/Navbar';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Provider";
import { updateProfile } from "firebase/auth";

const SingUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSingUp = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
            })
            .catch(error => console.log(error))

    }

    return (
        <div >
            <Navbar></Navbar>
            <div className="flex mt-20 items-center justify-center">
                <Card color="transparent" shadow={false}>
                    <Typography className="text-center border-b pb-10" variant="h4" color="blue-gray">
                        Register your account
                    </Typography>

                    <form onSubmit={handleSingUp} className="mt-8 w-80 max-w-screen-lg mb-16 sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter your name"
                                required

                                name="name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{ className: "bg-gray-200 rounded-md" }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Photo URL
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter Photo URL"
                                name="photo"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{ className: "bg-gray-200 rounded-md" }}
                            />
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
                                required
                                size="lg"
                                name="password"
                                placeholder="Enter your password"
                                className=" !border-t-blue-gray-200  focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{ className: "bg-gray-200 rounded-md" }}
                            />
                        </div>
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <Button type="submit" className="mt-6 py-5 capitalize text-base" fullWidth>
                            Register
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <Link to="/login" className="font-medium text-blue-700">
                                Login
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>

        </div>
    );
};

export default SingUp;