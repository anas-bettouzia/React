pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
<<<<<<< HEAD
                echo 'Hello World'
=======
                git branch: 'master', 
                    url: 'https://github.com/anas-bettouzia/jenkins.git',
                    credentialsId: 'git-token'
            }
        }
        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('Deploy') {
            steps {
                echo "Déploiement en cours..."
>>>>>>> bf17f3ad542e1f889c12390e7cfb03f947954e14
            }
        }
    }
}
