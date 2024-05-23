function configuration() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return developmentENV;
  } else {
    return productionENV;
  }
}

const developmentENV = {
  api: {
    url: "https://localhost:44377",
  },
};

const productionENV = {
  api: {
    url: "https://mck-phpdev-02.teleperformanceusa.com:2021/CTSS-Survey-api",
  },
};

export default configuration;
