module.exports = {
  apps: [
    {
      name: "POC_PM2_00",
      script: "./app.js",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        PORT: 3000,
        NODE_ENV: "development",
        Autor: "Rafael"
      },
      env_production: {
        NODE_ENV: "production"
      },
      error_file: "./log/err/err.log",
      out_file: "./log/out/out.log",
      log_file: "./log/info/info.log",
      time: true
    }
  ],

  deploy: {
    production: {
      user: "node",
      host: "212.83.163.1",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/production",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production"
    }
  }
};
