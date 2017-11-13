const meta = require("./package.json")
const connection = require("./config/connection")
const database = require("./config/database")
const credential = require("./config/credential")

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration
   */
  apps: [
    {
      name: meta.name,
      script: meta.main,
      node_args: "--harmony",
      watch: [meta.main, "server.js", "config", "auth", "api"],
      ignore_watch: ["node_modules"],
      watch_options: {
        followSymlinks: false
      },
      env: {
        COMMON_VARIABLE: "true",
        // APP
        NAME: meta.name,
        HOST: connection.SERVER.HOST,
        PORT: connection.SERVER.PORT,
        URL: connection.URL.SERVER,
        // DATABASE
        MONGODB_URI: database.MONGODB_URI,
        // SECRET
        JWT_SECRET: credential.SECRET.JWT,
        SESSION_SECRET: credential.SECRET.SESSION,
        // SENDGRID
        SENDGRID_API_KEY: credential.MAIL.SENDGRID.API_KEY,
        SENDGRID_DOMAIN: credential.MAIL.SENDGRID.DOMAIN,
        SENDGRID_SENDER: credential.MAIL.SENDGRID.SENDER
      },
      env_dev: {
        NODE_ENV: "dev"
      },
      env_staging: {
        NODE_ENV: "staging"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment
   */
  deploy: {
    dev: {
      user: "node",
      host: "0.0.0.0",
      ref: "origin/master",
      repo: meta.repository.url,
      path: "~/www/super-workshop-js/dev",
      "post-deploy":
        "cd servers/server-express && npm install && pm2 startOrRestart ecosystem.js --env dev",
      env: {
        NODE_ENV: "dev"
      }
    },
    staging: {
      user: "node",
      host: "0.0.0.0",
      ref: "origin/master",
      repo: meta.repository.url,
      path: "~/www/super-workshop-js/staging",
      "post-deploy":
        "cd servers/server-express && npm install && pm2 startOrRestart ecosystem.js --env staging",
      env: {
        NODE_ENV: "dev"
      }
    },
    production: {
      user: "node",
      host: "0.0.0.0",
      ref: "origin/master",
      repo: meta.repository.url,
      path: "~/www/super-workshop-js/production",
      "post-deploy":
        "cd servers/server-express && npm install && pm2 startOrRestart ecosystem.js --env production",
      env: {
        NODE_ENV: "production"
      }
    }
  }
}
