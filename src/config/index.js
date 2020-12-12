const config = {
  db: process.env.DATABASE_URL || "",
  dbHost: process.env.DB_HOST || "",
  dbUsername: process.env.DB_USERNAME || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dbPort: process.env.DB_PORT || "",
};

export default config;
