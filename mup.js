module.exports = {
  servers: {
    one: {
      host: '103.253.147.55',
      username: 'root',
      // pem: '/home/user/.ssh/id_rsa',
      password: 'taras!@#$90',
      // or leave blank to authenticate using ssh-agent
      opts: {
          port: 22,
      },
    }
  },

  meteor: {
    name: 'TARAS',
    path: '../TARASmeteor',
    servers: {
      one: {},  // list of servers to deploy, from the 'servers' list
    },
    buildOptions: {
      serverOnly: true, // skip building mobile apps, but still build the web.cordova architecture
      debug: true,
      cleanAfterBuild: true, // default

      //set serverOnly: false if want to build mobile apps when deploying

      // Remove this property for mobileSettings to use your settings.json. (optional)
      
    },
    deployCheckWaitTime: 60, // default 10
  },
};