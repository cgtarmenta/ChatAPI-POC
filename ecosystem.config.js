{

}
module.exports = {
    apps: [
        {
            "name":               "VAYYUP:DEVICES:API",
            "script":             "server.js",
            "ignore_watch":       ["node_modules","logs"],
            "exec_mode":          "cluster_mode",
            "instances":          2,
            "watch":              true,
            "merge_logs":         true,
            "env": {
                "NODE_ENV":         "production",
                "UV_THREADPOOL_SIZE":"10"
            }
        }
    ],
    deploy: {
        production: {
            key  : 'C:\\Users\\tad30\\Downloads\\ubuntu-ec2.pem',
            user: 'ubuntu',
            host: 'vayyup.tadeoarmenta.com',
            ref: 'origin/master',
            repo: 'git@github.com:TadeoArmenta/Vayyup.git',
            path: '/home/ubuntu/Vayyup',
            'post-deploy':
                "yarn && pm2 reload ecosystem.config.js --env production && pm2 save"
        }
    }
};
