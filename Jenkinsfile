pipeline {
    agent any
    stages {
        stage("Docker version"){
            steps{
                sh "docker --version"
                sh "pwd"
                sh "ls"
            }
        }
        stage("Build the App"){
          steps{
            echo "Building the images"
            sh "docker build -t vote-app ."
          }
        }

        stage("Run the app"){
          steps{
            echo "running the container"
            sh "docker run -d -p 5000:5000 vote-app:latest"
          }
        }

        stage("Copy Html file into nginx directory"){
          steps{
            echo "copy file to nginx directory /usr/share/nginx/html"
            sh "cp -rf index.html main.js main.css /usr/share/nginx/html"
          }
        }
    }
}


