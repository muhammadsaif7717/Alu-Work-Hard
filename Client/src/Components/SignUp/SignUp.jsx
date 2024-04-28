import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { cerateUser, setRelaod } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [registerError, setRegisterError] = useState();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters long.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setRegisterError("Password must contain at least one lowercase letter.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must contain at least one uppercase letter.");
      return;
    }

    //create user
    cerateUser(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);

        // post user to database
        const user = { name, email, password };
        fetch("https://triptrax-server.vercel.app/users/", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User  has been created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        ///

        setSuccess("Use Created Successfully");
        e.target.reset();
        return updateProfile(newUser, {
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        toast.success("User created ! Redirecting to home page....", {
          autoClose: 2000,
        });
        setTimeout(() => {
          // Navigate after a delay of 1900ms (adjust the delay time as needed)
          navigate(location?.state ? location.state : "/");
        }, 2100);
      })
      .then(() => {
        setRelaod(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>Template | Sign Up</title>
      </Helmet>

      <div className="mb-5">
        <div
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="hero min-h-screen bg-base-200 rounded-xl"
        >
          <div className="card shrink-0 w-[320px] md:w-[400px]  shadow-2xl bg-base-100 animate__animated animate__pulse">
            <h1 className="text-3xl font-bold text-center mt-5">
              Please Sign Up
            </h1>
            <form onSubmit={handleFormSubmit} className="card-body py-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL here"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative flex items-center justify-end">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                    required
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute mr-5"
                  >
                    {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                  </div>
                </div>
                <label className="label mt-3">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary bg-[#F97316] border-none text-white">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center mb-7 mt-2">
              {registerError && (
                <p className="text-red-500 text-sm px-5 mb-2">
                  {registerError}
                </p>
              )}
              {success && (
                <p className="text-green-600 text-sm px-5 mb-2">{success}</p>
              )}
              <p>
                Already have an account? Please &nbsp;
                <Link to="/sign-in" className="text-blue-500">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
