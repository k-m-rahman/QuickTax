export const getAuthToken = (user) => {
  const currentUser = { email: user.email };
  fetch(`https://quick-tax-server-side.vercel.app/jwt`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("quickTax-token", data.token);
    });
};
