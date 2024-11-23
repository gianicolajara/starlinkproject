import { validateEmail } from "../lib/email";
//newsletter events
export const newsletterEvents = (toast) => {
  const form = document.getElementById("form-newsletter");

  const buildEvents = () => {
    //we get the input data, validate it and send a toast to notify the person
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      //getting data from form
      const email = e.target.email.value;

      const isValidEmail = validateEmail(email);

      //validate email
      if (isValidEmail) {
        toast.infoToast(`Thank you for registering your account ${email}`);
      } else {
        toast.errorToast(`Your email is not valid`);
      }

      form.reset();
    });
  };

  return {
    buildEvents,
  };
};
