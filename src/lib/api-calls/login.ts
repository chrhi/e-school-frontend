import { removeCookie, setCookie } from "../utils";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const url = "http://api.craftednext.com/api/v1/auth/login";
  const credentials = {
    email,
    password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    console.log("this is the response:", data);

    setCookie({ cname: "jwt", cvalue: data?.token, exdays: 1 });

    if (!data?.token) {
      return {
        sucess: false,
        message: data?.message,
      };
    }

    return {
      sucess: true,
      message: data?.message,
    };
  } catch (error) {
    console.error("Login Failed:", error);
  }
}

//"rami4@email.com"
//"test123"

export async function logout() {
  removeCookie("jwt");
}
