import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import {useDispatch} from  "react-redux"
import { useForm } from "react-hook-form";
import { regexEmail, regexPassword } from "../../../components/regex";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../../../redux/auth/apiRequest";
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createUser = (data) => {
        const newUser = {
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
          address: data.address
        }
        registerUser(newUser, dispatch, navigate)
  }
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="offset-xl-1 col-xl-10">
            <div className="register-form login-form clearfix">
              <div className="login-text">
                <h2>Register</h2>
                <p>Please Register using account detail bellow.</p>
                <p>
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
              </div>
              <form>
                <div className="form-group row">
                  <label
                    htmlFor="Name"
                    className="col-lg-3 col-md-3 col-form-label"
                  >
                    Name
                  </label>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="Name"
                      className="form-control"
                      placeholder="First Name"
                      {...register("name", {
                        required: true,
                        minLength: 3,
                        maxLength: 10,
                      })}
                    />

                    {errors.name && (
                      <p className="text-danger">
                        {errors.name.type === "maxLength" ||
                        errors.name.type === "minLength"
                          ? "Vui lòng nhập tên từ 3 - 10 ký tự"
                          : "Không được để trống name "}
                      </p>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="Email"
                    className="col-lg-3 col-md-3 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="email"
                      id="Email"
                      className="form-control "
                      placeholder="Email"
                      {...register("email", {
                        required: true,
                        pattern: regexEmail,
                      })}
                    />
                    {errors.email && (
                      <p className="text-danger">
                        {errors.email.type === "pattern"
                          ? "Email không đúng định dạng"
                          : "Không được để trống email"}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="CreatePassword"
                    className="col-lg-3 col-md-3 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="password"
                      id="CreatePassword"
                      className="form-control"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        pattern: regexPassword,
                      })}
                    />
                    {errors.password && (
                      <p className="text-danger">
                        {errors.password.type === "pattern"
                          ? "Mật khẩu 8-30 ký tự, yêu cầu 1 số , 1 chứ in hoa, 1 ký tự đặc biệt"
                          : "Không được để trống mật khẩu"}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="Phone"
                    className="col-lg-3 col-md-3 col-form-label"
                  >
                    Phone
                  </label>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="Phone"
                      className="form-control"
                      placeholder="Your Phone Number"
                      {...register("phone", {
                        required: true,
                        minLength: 10,
                        maxLength: 11,
                      })}
                    />

                    
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="address"
                    className="col-lg-3 col-md-3 col-form-label"
                  >
                    Address
                  </label>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                      placeholder="Your Address"
                      {...register("address", {
                        required: true,
                        minLength: 1,
                        maxLength: 11,
                      })}
                    />
                  </div>
                </div>

                <div className="mt-40 text-center">
                  <button
                    className="login-btn"
                    onClick={handleSubmit(createUser)}
                  >
                    Create
                  </button>
                </div>
              </form>

              <div className="text-center">
                <Link to="/">Back to home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Register;
