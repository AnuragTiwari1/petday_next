"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function LoginForm({ doLogin }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = formRef.current;

    if (form && !form.checkValidity()) {
      form.classList.add("was-validated");
      setIsSubmitting(false);
      return;
    }

    // Collecting form data
    const formData = new FormData(form);
    const values = {
      email: formData.get("user_email") as string,
      password: formData.get("user_password") as string,
    };

    try {
      const response = await doLogin(values);
      if (response.status === "success") {
        router.replace("/customer");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact_section section_space_lg pb-0">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6 offset-md-3 mb-5">
            <div className="section_title">
              <h2 className="title_text">
                <span className="sub_title">Login</span> User Login
              </h2>
              <p className="mb-0">
                Massa enim nec dui nunc mattis enim ut tellus. Auctor augue
                mauris augue neque gravida in fermentum
              </p>
            </div>
            <div className="contact_form">
              <form
                className="needs-validation"
                noValidate
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col col-md-6 col-sm-6">
                    <div className="form_item mb-0">
                      <label className="input_title" htmlFor="input_email">
                        Email<sup>*</sup>
                      </label>
                      <input
                        id="input_email"
                        type="email"
                        name="user_email"
                        required
                        placeholder="Type Your Email"
                      />
                      <div className="invalid-feedback">Required</div>
                    </div>
                  </div>
                  <div className="col col-md-6 col-sm-6">
                    <div className="form_item mb-0">
                      <label className="input_title" htmlFor="input_email">
                        Password<sup>*</sup>
                      </label>
                      <input
                        id="input_email"
                        type="password"
                        name="user_password"
                        required
                        placeholder="Type Your Password"
                      />
                      <div className="invalid-feedback">Required</div>
                    </div>
                  </div>
                  <div className="col">
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn_primary"
                      disabled={isSubmitting}
                    >
                      <i className="fas fa-paw" /> Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
