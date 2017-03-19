module.exports = {
  servers: {
    one: {
      host: '103.253.147.55',
      username: 'root',
      // pem: '/home/user/.ssh/id_rsa',
      password: 'taras!@#$90-=',
      // or leave blank to authenticate using ssh-agent
    }
  },

  meteor: {
    name: 'TARAS',
    path: '../',
    servers: {
      one: {},  // list of servers to deploy, from the 'servers' list
    },
    env: {
      PORT: 80,
      ROOT_URL: 'http://www.projecttaras.org', // If you are using ssl, this needs to start with https
      MONGO_URL: 'mongodb://localhost/meteor'
    },
    buildOptions: {
      serverOnly: true, // skip building mobile apps, but still build the web.cordova architecture
      debug: true,
      cleanAfterBuild: true, // default

      //set serverOnly: false if want to build mobile apps when deploying

      // Remove this property for mobileSettings to use your settings.json. (optional)
      
    },
    deployCheckWaitTime: 60,// default 10
  },
  mongo: {
      port: 27017,
      version: '3.4.1',
      servers: {
        one: {}
      }
    }
};