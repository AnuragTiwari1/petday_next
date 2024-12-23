const AppConstant = {
  AUTH: {
    SESSION_COOKIE_NAME: "petday_session",
    SECRET_KEY: process.env.AUTH_SECRET!,
    EXPIRY_IN_DAYS: 7,
    ALGORITHM: "HS256",
  },
};

export default AppConstant;
