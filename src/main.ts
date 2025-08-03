import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// Install docker
// https://docs.docker.com/get-docker/

// Create a Dockerfile in the root of your project
// https://docs.docker.com/engine/reference/builder/

// Create a .dockerignore file in the root of your project and add the following line to ignore node_modules
// node_modules/
// https://docs.docker.com/engine/reference/builder/#dockerignore-file

// Build the Docker image
// docker build -t cf-deployment .

// Download and install the AWS CLI
// https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

// Install the lightsailctl plugin on macOS
// https://docs.aws.amazon.com/en_us/lightsail/latest/userguide/amazon-lightsail-install-software.html#install-lightsailctl-on-macos

// Push container images from your local machine to your container service
// https://docs.aws.amazon.com/en_us/lightsail/latest/userguide/amazon-lightsail-pushing-container-images.html

// Visit my security credentials (IAM) on AWS console
// https://console.aws.amazon.com/iam/home?#/security_credentials

// AWS_ACCESS_KEY_ID=your_access_key_id AWS_SECRET_ACCESS_KEY=your_secret_access_key aws lightsail push-container-image --region us-east-2 --service-name container-service-1 --label cf-deployment-1 --image cf-deployment:latest
// --service-name: The name of your Lightsail container service. You can find this in the AWS Lightsail console.

// Set actions repository secrets in GitHub for AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY

// Create a GitHub Actions workflow file in .github/workflows/deploy.yml
// https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github
