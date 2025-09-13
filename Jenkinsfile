pipeline {
    agent any // any agent can run this job

    stages {
        stage('Echo Hello World') {
            steps {
                echo 'Hello World - Second trigger for jenkins to test!'
            }
        }
    }
    post {
        always {
            cleanWs() // clean workspace when done
        }
    }
}

