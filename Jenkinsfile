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

        stage("Copy Html file into nginx directory"){
          steps{
            echo "copy file to nginx directory /usr/share/nginx/html"
            sh "cp -af index.html main.js main.css /usr/share/nginx/html"
          }
        }
    }
}


