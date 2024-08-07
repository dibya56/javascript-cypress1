pipeline {
    agent { label 'linux-agent-pool' }
    options {
        timeout(time: 30, unit: 'MINUTES')
    }
    stages {
        stage('Package Installation') {
            steps {
                sh "npm install"
            }
        }

        stage('Cypress Tests') {
            steps {
                sh "npx cypress run --headed"
            }
        }
    }
}