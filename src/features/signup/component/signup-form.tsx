"use client";

import { ISignupForm } from "@/definition";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { SignupSchema } from "../form-schema";
import { useRouter } from "next/navigation";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  mobile: "",
  password: "",
} satisfies ISignupForm;

export default function SignupForm({ doSignup }) {
  const router = useRouter();

  const handleSubmit = async (values: ISignupForm, { setSubmitting }) => {
    try {
      const response = await doSignup(values);
      if (response.status === "success") {
        router.replace("/login");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact_section section_space_lg pb-0">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6 offset-md-3 mb-5">
            <div className="section_title">
              <h2 className="title_text">
                <span className="sub_title">SignUp</span> User SignUp
              </h2>
              <p className="mb-0">
                Massa enim nec dui nunc mattis enim ut tellus. Auctor augue
                mauris augue neque gravida in fermentum.
              </p>
            </div>
            <div className="contact_form">
              <Formik
                initialValues={initialValues}
                validationSchema={toFormikValidationSchema(SignupSchema)}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form noValidate>
                    <div className="row">
                      {/* First Name */}
                      <div className="col col-md-6 col-sm-6">
                        <div className="form_item mb-3">
                          <label htmlFor="fname" className="input_title">
                            First Name<sup>*</sup>
                          </label>
                          <Field
                            type="text"
                            name="fname"
                            id="fname"
                            placeholder="First Name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="fname"
                            component="div"
                            className="invalid-feedback d-block"
                          />
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="col col-md-6 col-sm-6">
                        <div className="form_item mb-3">
                          <label htmlFor="lname" className="input_title">
                            Last Name<sup>*</sup>
                          </label>
                          <Field
                            type="text"
                            name="lname"
                            id="lname"
                            placeholder="Last Name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="lname"
                            component="div"
                            className="invalid-feedback d-block"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col col-md-6 col-sm-6">
                        <div className="form_item mb-3">
                          <label htmlFor="email" className="input_title">
                            Email<sup>*</sup>
                          </label>
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback d-block"
                          />
                        </div>
                      </div>

                      {/* Mobile */}
                      <div className="col col-md-6 col-sm-6">
                        <div className="form_item mb-3">
                          <label htmlFor="mobile" className="input_title">
                            Mobile No<sup>*</sup>
                          </label>
                          <Field
                            type="text"
                            name="mobile"
                            id="mobile"
                            placeholder="Mobile Number"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="mobile"
                            component="div"
                            className="invalid-feedback d-block"
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div className="col col-md-6 col-sm-6">
                        <div className="form_item mb-3">
                          <label htmlFor="password" className="input_title">
                            Password<sup>*</sup>
                          </label>
                          <Field
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="invalid-feedback d-block"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col col-md-6 col-sm-6 mt-4">
                        <button
                          type="submit"
                          className="btn btn_primary w-100"
                          disabled={isSubmitting}
                        >
                          <i className="fas fa-paw" /> SignUp
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
