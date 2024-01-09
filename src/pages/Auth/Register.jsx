import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const { createUser, googleSignin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setSignUpError] = useState("");

  // signUp handler.........

  const handleToSignup = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        window.alert("User created successfully");
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  // google signIn
  const handleGoogleSignIn = () => {
    googleSignin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className=" w-full md:w-1/2 mx-auto flex justify-center items-center mt-4">
      <div className="p-10 card-bordered shadow">
        <h1 className="text-2xl font-semibold text-center uppercase">Signup</h1>
        <form onSubmit={handleSubmit(handleToSignup)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-700 font-xs">
                Your name is required
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="email"
              {...register("email", { required: "Email address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p role="alert" className="text-red-700 font-xs">
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
                  message: "Must be 6 characters or longer",
                },
                pattern: {
                  value: /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/,
                  message: "Weak password",
                },
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p role="alert" className="text-red-700 font-xs">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div>
            {signUpError && <p className="text-red-700">{signUpError}</p>}
          </div>

          <div className="form-control w-full my-3">
            <input
              className="btn bg-blue-400 text-white hover:bg-transparent hover:text-black border hover:border-blue-400"
              type="submit"
              value="Signup"
            />
          </div>

          <div>
            <span>
              Already have an account?{" "}
              <Link
                className="text-primary hover:underline text-xs"
                to="/login"
              >
                Go to login
              </Link>
            </span>
          </div>
        </form>
        <div className="form-control w-full my-3">
          <div className="divider">OR</div>

          <button onClick={handleGoogleSignIn} className="btn btn-outline mt-4">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
