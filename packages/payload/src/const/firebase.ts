export const FIRE_BASE_CONFIG:{[key:string]:any} = {
    "hosting": {
      "public": "dist",
      "ignore": [
        "firebase.json",
        "**/.*"
      ],
      "trailingSlash": false,
      "headers": [
        {
          "source": "**/*.@(js|eot|otf|ttf|ttc|woff|font|css)",
          "headers": [
            {
              "key": "cache-control",
              "value": "max-age=31536000"
            }
          ]
        },
        {
          "source": "**",
          "headers": [
            {
              "key": "X-Content-Type-Options",
              "value": "nosniff"
            },
            {
              "key": "X-Frame-Options",
              "value": "SAMEORIGIN"
            },
            {
              "key": "X-Permitted-Cross-Domain-Policies",
              "value": "none"
            },
            {
              "key": "Referrer-Policy",
              "value": "no-referrer"
            },
            {
              "key": "Strict-Transport-Security",
              "value": "max-age=15552000; includeSubDomains"
            },
            {
              "key": "X-Download-Options",
              "value": "noopen"
            },
            {
              "key": "X-UA-Compatible",
              "value": "ie=edge"
            },
            {
              "key": "X-XSS-Protection",
              "value": "1; mode=block"
            }
          ]
        }
      ],
      "redirects": [],
      "rewrites": []
    }
  }