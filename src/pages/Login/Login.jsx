import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

import Navbar from '../shared/Navbar/Navbar';

const Login = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="flex mt-20 items-center justify-center">
                <Card color="transparent" shadow={false}>
                    <Typography className="text-center border-b pb-10" variant="h4" color="blue-gray">
                        Register your account
                    </Typography>

                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter your name"
                                name="name"
                                className=" !border-t-blue-gray-200 border-none focus:!border-t-gray-900"
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
                                name="name"
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
                        <Button className="mt-6 py-5 capitalize text-base" fullWidth>
                            Register
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <a href="#" className="font-medium text-gray-900">
                                Sign In
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>

        </div>
    );
};

export default Login;