module.exports = {
  apps: [
    {
      name: 'Remix',
      script: 'remix watch',
      autorestart: false,
      ignore_watch: ['.']
    },
    {
      name: 'Tailwind CSS',
      script: 'postcss styles/**/*.css --base styles --dir app/styles --w',
      autorestart: false,
      ignore_watch: ['.']
    },
    {
      name: 'Cloudflare Wrangler',
      script: 'wrangler pages dev ./public --watch ./build --kv CONTENTS',
      autorestart: false,
      ignore_watch: ['.']
    }
  ]
};
