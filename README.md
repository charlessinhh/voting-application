# voting_application
This is a simple voting app built with Javascript & HTML+CSS .

## Requirements
1. Node.js
2. Docker
3. Nginx

## Installation
1. Clone the repository
```
git clone https://github.com/charlessinhh/voting_application.git
```

2. Build the app
```
docker build -t vote-app .
```

3. Run the app
```
docker run -d -p 8000:8000 vote-app:latest
```

## Nginx

Install Nginx reverse proxy to make this application available.

`sudo apt-get update`
`sudo apt install nginx`

Update the server in nginx.conf file present in /etc/nginx/ directory [Cent OS or Amazon Linux]
```
server {
        listen       80;
        listen       [::]:80;
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;
        
        location /api {
                proxy_pass http://localhost:5000/poll;
        }
    }
```
