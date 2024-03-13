import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { regexEmail, regexPassword } from "../../../components/regex";
import { auth } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { option } from "../../../config/toastOption";
function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const createUser = async (data) => {
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(createUser.user, {
        displayName: data.name,
      });
      toast.success("You have successfully registered", option);
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error(`Email đã tồn tại !`, option);
      }
    }
  };
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
