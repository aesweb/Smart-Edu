exports.getIndexPage = (req, res) => {
  res.status(200).render("index", {
    page_name: "index",
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render("Register", {
    page_name: "Register",
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render("Login", {
    page_name: "Login",
  });
};
