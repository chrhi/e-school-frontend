export async function getCurrentUser() {
  const url =
    "https://elearning-api-alpha.vercel.app/api/v1/auth/isAuthenticated";

  try {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];

    if (!token) {
      return null;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    console.log("Authentication response:", data);

    return data?.data?.user;
  } catch (error) {
    console.error("Authentication check failed:", error);
    return {
      authenticated: false,
      user: null,
      message: "Authentication check failed",
    };
  }
}
