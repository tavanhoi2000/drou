import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css";
import {
  auth,
  GoogleProvider,
  FacebookProvider,
  GithubProvider,
} from "../../../config/firebase";
import { option } from "../../../config/toastOption";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getToken, setToken } from "../../../hooks";
import { loginUser } from "../../../redux/auth/apiRequest";
import { useDispatch } from "react-redux";
function Login() {
  const [error, setError] = useState(null);
  let [isForgot, setIsForgot] = useState(null);
  const [resetRequested, setResetRequested] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onLogin = async (data) => {
  //   try {
  //     const res = await signInWithEmailAndPassword(
  //       auth,
  //       data.email,
  //       data.password
  //     );
  //     if (res) {
  //       setToken("token", res.user.accessToken);
  //       if (getToken("token") !== null) {
  //         return navigate("/");
  //       } else {
  //         toast.error(`Login fail`, option);
  //       }
  //     }
  //   } catch (error) {
  //     if (error.code === "auth/user-not-found") {
  //       setError("Tài khoản không chính xác!");
  //     } else if (error.code === "auth/wrong-password") {
  //       setError("Mật khẩu không chính xác!");
  //     }
  //   }
  // };

  const onLogin = (data) => {
    const currentUser = {
      email: data.email,
      password: data.password
    }
    loginUser(currentUser, dispatch, navigate)
  }
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setResetRequested(true);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  const loginWithFacebook = () => {
    signInWithPopup(auth, FacebookProvider)
      .then((res) => {
        if (res) {
          setToken("token", res.user.accessToken);
          if (getToken("token") !== null) {
            return navigate("/");
          }
        }
      })
      .catch((error) => {});
  };
  const loginWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider).then((res) => {
      if (res) {
        setToken("token", res.user.accessToken);
        if (getToken("token") !== null) {
          return navigate("/");
        }
      }
    });
  };
  const loginWithGithub = async () => {
    const res = await signInWithPopup(auth, GithubProvider);
    if (res) {
      setToken("token", res.user.accessToken);
      if (getToken("token") !== null) {
        return navigate("/");
      }
    }
  };
  return (
    <main>
      <div className="login theme-default-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
              <div className="login-form">
                {isForgot !== true ? (
                  <div id="CustomerLoginForm">
                    <form id="customer_login" onSubmit={handleSubmit(onLogin)}>
                      <div className="form-container">
                        <div className="login-text">
                          <h3 className="login-header">Login </h3>
                          <p>Please login using account detail bellow.</p>
                          <p className="text-danger">{error}</p>
                        </div>
                        <div className="login-form-wrapper">
                          <div className="form-group row">
                            <label
                              htmlFor="email"
                              className="col-sm-3 col-form-label"
                            >
                              Email
                            </label>
                            <div className="col-sm-7">
                              <input
                                type="email"
                                id="CustomerEmail"
                                className="form-control "
                                placeholder="Email"
                                autoFocus
                                {...register("email", { required: true })}
                              />
                              {errors.email && (
                                <p className="text-danger">
                                  {errors.email.type === "required"
                                    ? "Không được để trống name "
                                    : null}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="inputPassword"
                              className="col-sm-3 col-form-label"
                            >
                              Password
                            </label>
                            <div className="col-sm-7">
                              <input
                                type="password"
                                id="CustomerPassword"
                                className="form-control "
                                placeholder="Password"
                                {...register("password", { required: true })}
                              />
                              {errors.password && (
                                <p className="text-danger">
                                  {errors.password.type === "required"
                                    ? "Không được để trống password "
                                    : null}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="login-toggle-btn">
                            <div className="login-details text-center">
                              <a
                                href=""
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsForgot(true);
                                }}
                                id="RecoverPassword"
                              >
                                Forgot your password?
                              </a>

                              <button className="login-btn">Sign In</button>
                            </div>
                            <div className="login-footer text-center">
                              or
                              <div className="list-login">
                                <i
                                  className="fa-brands fa-facebook-f text-primary"
                                  onClick={loginWithFacebook}
                                ></i>
                                <i
                                  className="fa-brands fa-google text-danger"
                                  onClick={loginWithGoogle}
                                ></i>
                                <i
                                  className="fa-brands fa-github"
                                  onClick={loginWithGithub}
                                ></i>
                              </div>
                              <p>
                                <Link
                                  to="/register"
                                  id="customer_register_link"
                                >
                                  Create account
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div id="RecoverPasswordForm">
                    <form>
                      <div className="form-container">
                        <div className="login-text">
                          <h2>Reset your password</h2>
                          <p>
                            We will send you an email to reset your password.
                          </p>
                        </div>
                        {resetRequested ? (
                          <>
                            <p>
                              Password reset email sent. Please check your email
                            </p>
                            <a
                              href=""
                              onClick={(e) => {
                                e.preventDefault();
                                setIsForgot(null);
                              }}
                            >
                              Back to login
                            </a>
                          </>
                        ) : (
                          <div className="login-form-wrapper">
                            <input
                              type="email"
                              name="email"
                              id="RecoverEmail"
                              className="input-full"
                              placeholder="Email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="login-toggle-btn">
                              <div className="form-action-button">
                                <button
                                  type="submit"
                                  className="login-btn"
                                  onClick={(e) => handleResetPassword(e)}
                                >
                                  Submit
                                </button>
                                <a
                                  href=""
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setIsForgot(null);
                                  }}
                                >
                                  Cancel
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
