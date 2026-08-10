const mongoose = require('mongoose');
const { User, Application } = require('../db');
const bcrypt = require('bcrypt');

const setupAdminJS = async (app) => {
  // Use dynamic imports because adminjs v7+ is ESM
  const { default: AdminJS } = await import('adminjs');
  const AdminJSExpress = await import('@adminjs/express');
  const AdminJSMongoose = await import('@adminjs/mongoose');

  // Register the Mongoose adapter
  AdminJS.registerAdapter({
    Database: AdminJSMongoose.Database,
    Resource: AdminJSMongoose.Resource,
  });

  const adminJs = new AdminJS({
    databases: [mongoose], // Connect all Mongoose models
    rootPath: '/admin',
    branding: {
      companyName: 'Universitas Admin',
      withMadeWithLove: false,
    },
    resources: [
      {
        resource: User,
        options: {
          properties: {
            password: { isVisible: { list: false, filter: false, show: false, edit: true } },
          },
        },
      },
      {
        resource: Application,
      }
    ]
  });

  // Build and use a router which will handle all AdminJS routes
  const router = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
      authenticate: async (email, password) => {
        // Authenticate the admin using your existing User model
        const user = await User.findOne({ username: email, role: 'admin' });
        if (user) {
          const matched = await bcrypt.compare(password, user.password);
          if (matched) {
            return user;
          }
        }
        return false;
      },
      cookieName: 'adminjs',
      cookiePassword: 'some-super-secret-password-which-should-be-long-enough', 
    },
    null,
    {
      resave: false,
      saveUninitialized: true,
    }
  );

  app.use(adminJs.options.rootPath, router);
};

module.exports = setupAdminJS;
