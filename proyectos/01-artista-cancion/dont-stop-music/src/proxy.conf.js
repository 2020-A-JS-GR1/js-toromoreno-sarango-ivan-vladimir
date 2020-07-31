const PROXY_CONFIG = [
  {
      context: [
          "/dsmbcknd"
      ],
      target: "http://localhost:3000/",
      secure: false
  }
]

module.exports = PROXY_CONFIG;
