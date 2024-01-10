import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { signIn, googleSignin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  console.log(loginEmail);
  // login with email and password
  const handleToLogin = (data) => {
    setLoginError("");
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginEmail(data.email);
        window.alert("Successfully signed in");
      })
      .catch((error) => {
        console.error(error.message);
        if (error) {
          setLoginError(error.message);
        }
      });
  };

  //google signIn

  const handleGoogleSignIn = () => {
    googleSignin()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="h-[900px] md:h-full  w-full md:ww-1/2 mx-auto flex justify-center items-center  md:my-10 my-auto ">
      <div>
        <form
          onSubmit={handleSubmit(handleToLogin)}
          className="card-bordered p-10 rounded-md shadow"
        >
          <h1 className="text-2xl font-semibold text-center  uppercase">
            Login
          </h1>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-700" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p className="text-red-700" role="alert">
                {errors.password?.message}
              </p>
            )}

            <label>
              <Link to="" className="text-xs hover:underline">
                Forget Password?
              </Link>
            </label>
          </div>

          <div>
            {loginError && <p className="text-xs text-red-700">{loginError}</p>}
          </div>

          <div className="form-control w-full my-3">
            <input
              className="btn bg-blue-400 text-white hover:bg-transparent hover:text-black border hover:border-blue-400"
              type="submit"
              value="Login"
            />
          </div>

          <div>
            <span>
              New to Doctor portal?{" "}
              <Link
                className="text-primary hover:underline text-xs"
                to="/register"
              >
                Create an account
              </Link>
            </span>
          </div>
          <div className="form-control w-full my-3">
            <div className="divider">OR</div>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline mt-4"
            >
              Continue with google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
