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
      script:
        'wrangler pages dev --compatibility-date=2023-06-21  ./public  --kv CONTENTS',
      autorestart: false,
      ignore_watch: ['.']
    }
  ]
};
