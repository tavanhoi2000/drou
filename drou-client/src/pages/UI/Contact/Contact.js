import { useForm } from "react-hook-form";
import { regexEmail } from "../../../components/regex";
import "./contact.css";
import { lazy, Suspense } from "react";
const Breadcrumb = lazy(() => import("../../../components/Breadcrumb"));
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function sendMessage(data) {
    alert(`Thank you ${data.name} for responding`);
  }
  return (
    <main>
      <Suspense>
        <Breadcrumb />
      </Suspense>

      <div
        id="shopify-section-template--14772521992279__contact_details"
        className="shopify-section"
      >
        <div
          id="section-template--14772521992279__contact_details"
          className="contact-us-area pt-65 pb-55"
        >
          <div className="container">
            <div className="section-title-2 mb-45 wow tmFadeInUp">
              <h2>We're always eager to hear from you!</h2>

              <p>
                You can call us in working time or visit our office. All mails
                will get the response within 24 hours. Love to hear from you!
              </p>
            </div>

            <div className="contact-info-wrap-2 mt-5">
              <div className="row">
                <div className="col-lg-4 col-md-4 wow tmFadeInUp">
                  <div className="single-contact-info3-wrap">
                    <div className="single-contact-info3-content ">
                      <div className="single-contact-info3-icon">
                        <i
                          className="fa-solid fa-location-dot text-danger"
                          style={{ fontSize: 30 }}
                        ></i>
                        <h3>ADDRESS</h3>
                      </div>
                      <p className="width-1">
                        1800 Abbot Kinney Blvd. Unit D & E Venice
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 wow tmFadeInUp">
                  <div className="single-contact-info3-wrap">
                    <div className="single-contact-info3-icon">
                      <i
                        className="fa-solid fa-phone text-danger"
                        style={{ fontSize: 30 }}
                      ></i>
                      <h3>Contact</h3>
                    </div>
                    <div className="single-contact-info3-content">
                      <p>
                        Mobile: <span> (+88) – 1990 – 6886 </span>
                      </p>
                      <p>
                        Hotline: <span>1800 – 1102 </span>
                      </p>
                      <p>
                        {" "}
                        Mail: <span>contact@drou.com</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 wow tmFadeInUp">
                  <div className="single-contact-info3-wrap">
                    <div className="single-contact-info3-content">
                      <div className="single-contact-info3-icon">
                        <i
                          className="fa-regular fa-clock text-danger"
                          style={{ fontSize: 30 }}
                        ></i>
                        <h3>HOUR OF OPERATION</h3>
                      </div>
                      <p> Monday – Friday : 09:00 – 20:00 </p>{" "}
                      <p> Sunday & Saturday: 10:30 – 22:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119077.55732640954!2d105.73302747566231!3d21.1454859241021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455a311380161%3A0xebdc7c84b7794d4d!2zQ8O0bmcgVHkgR2nDoW8gROG7pWMgVGjDtG5nIE1pbmggVmlldEVE!5e0!3m2!1svi!2s!4v1689562915691!5m2!1svi!2s"
          width="100%"
          height="100%"
          title="map"
          className="absolute inset-0"
        ></iframe>

        <div className="contact-from-area  padding-20-row-col wow tmFadeInUp">
          <div className="section-title-container">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h3>Ask us anything here</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-areas">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="drou-form contact-form">
                    <form id="contact_form" className="contact-form">
                      <input type="hidden" name="form_type" />
                      <input type="hidden" name="utf8" />
                      <div className="row contact-form-style text-center flex-column">
                        <div className="col-12"></div>
                        <div
                          className="d-flex mb-3"
                          style={{ margin: 0, padding: 0 }}
                        >
                          <div className="col-md-6 ">
                            <input
                              type="text"
                              placeholder="Name *"
                              className=" input-style "
                              id="ContactFormName"
                              {...register("name", { required: true })}
                            />

                            {errors.name && errors.name.type === "required" ? (
                              <p className="text-danger text-start mb-1">
                                Không được để trống trường này!
                              </p>
                            ) : null}
                          </div>
                          <div className="col-md-6">
                            <input
                              type="email"
                              required=""
                              placeholder="Email *"
                              className=" input-style "
                              name="contact[email]"
                              id="ContactFormEmail"
                              {...register("email", {
                                required: true,
                                pattern: regexEmail,
                              })}
                            />
                            {errors.email && (
                              <p className="text-danger text-start">
                                {errors.email.type === "pattern"
                                  ? "Email không đúng định dạng"
                                  : "Không được để trống email"}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <input
                            className=" input-style "
                            type="text"
                            id="ContactFormSubject"
                            name="contact[subject]"
                            placeholder="Subject *"
                          />
                        </div>
                        <div className="col-lg-12">
                          <textarea
                            placeholder="Message *"
                            className="textarea-style"
                            name="contact[body]"
                            id="ContactFormMessage"
                          ></textarea>
                        </div>
                        <div className="col-lg-12 text-center">
                          <button
                            className="submit submit-auto-width"
                            onClick={handleSubmit(sendMessage)}
                          >
                            Send message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
