import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Cloud, Shield, Server } from "lucide-react";
import { SecuritySection } from "@/components/security-section";

export default function TerraformPortfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Cloud className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                Terraform AWS
              </span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <p className="text-lg font-semibold">
                Chaitanya Harish - 12201754
              </p>
            </div>
            <nav className="flex items-center">
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/GouravSittam/Terraform-Task-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container max-w-screen-2xl mx-auto py-8 px-4 md:px-6 lg:px-8">
        {/* Project Title */}
        <section className="text-center my-8">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Secure Ubuntu EC2 Instance Deployment with Terraform
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            An Infrastructure as Code (IaC) project to automate the deployment
            of a secure EC2 instance on AWS.
          </p>
        </section>

        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8 space-y-8">
            {/* Main Content Tabs */}
            <Tabs defaultValue="code" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="code">Terraform Code</TabsTrigger>
                <TabsTrigger value="execution">Execution</TabsTrigger>
                <TabsTrigger value="aws-console">AWS Console</TabsTrigger>
                <TabsTrigger value="cleanup">Cleanup</TabsTrigger>
              </TabsList>

              <TabsContent value="code" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Terraform Configuration</CardTitle>
                    <CardDescription>
                      The heart of the project, defining the entire
                      infrastructure.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-white">
                        <code>
                          {`# AWS Provider Configuration
provider "aws" {
  region = "us-east-1"
}

# Get Latest Ubuntu AMI
data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
  owners = ["099720109477"] # Canonical
}

# EC2 Instance
resource "aws_instance" "Sample_demo" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  key_name      = var.key_name
  tags = {
    Name    = "EC2_Without_AMI"
    Project = "Terraform-Demo"
    Owner   = "Chaitanya Harish"
  }
}

# Variable for Key Pair
variable "key_name" {
  description = "Name of the AWS key pair"
  type        = string
  default     = "your-key-pair-name"
}

# Output Public IP
output "instance_public_ip" {
  value = aws_instance.Sample_demo.public_ip
}`}
                        </code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent
                value="execution"
                className="mt-4 grid gap-4 md:grid-cols-2"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>terraform init</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/images/terraform-init.png"
                      alt="terraform init"
                      width={600}
                      height={400}
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>terraform plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/images/terraform-plan.png"
                      alt="terraform plan"
                      width={600}
                      height={400}
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>terraform apply</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/images/terraform-apply.png"
                      alt="terraform apply"
                      width={600}
                      height={400}
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>terraform validate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/images/terraform-validate.png"
                      alt="terraform validate"
                      width={600}
                      height={400}
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent
                value="aws-console"
                className="mt-4 grid gap-4 md:grid-cols-2"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>EC2 Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/images/aws-console.png"
                      alt="aws console"
                      width={600}
                      height={400}
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Instance Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/images/aws-instance-details.png"
                      alt="instance details"
                      width={600}
                      height={400}
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent
                value="cleanup"
                className="mt-4 grid gap-4 md:grid-cols-2"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>terraform destroy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/images/terraform-destroy.png"
                      alt="terraform destroy"
                      width={600}
                      height={400}
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Destroy Confirmation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/images/terraform-destroy-confirm.png"
                      alt="destroy confirmation"
                      width={600}
                      height={400}
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <SecuritySection />
          </div>

          <div className="md:col-span-4 space-y-8">
            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Student</span>
                  <span className="font-medium">Chaitanya Harish</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reg. No</span>
                  <span className="font-medium">12201754</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Live Demo</span>
                  <a
                    href="https://terraform-task-2.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    View Live
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle>Technologies</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {[
                  "Terraform",
                  "AWS EC2",
                  "Ubuntu",
                  "Security Groups",
                  "VPC",
                  "SSH",
                ].map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Automated AMI Selection</p>
                <p>✓ Secure SSH/HTTPS Access</p>
                <p>✓ Default VPC Integration</p>
                <p>✓ Public IP Assignment</p>
                <p>✓ Configurable SSH Key</p>
                <p>✓ Resource Tagging</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Project Workflow */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Project Workflow
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
            <div className="space-y-8">
              {[
                {
                  title: "Initialize",
                  command: "terraform init",
                  description: "Prepare the working directory",
                },
                {
                  title: "Validate",
                  command: "terraform validate",
                  description: "Check configuration syntax",
                },
                {
                  title: "Plan",
                  command: "terraform plan",
                  description: "Preview infrastructure changes",
                },
                {
                  title: "Apply",
                  command: "terraform apply",
                  description: "Deploy the infrastructure",
                },
                {
                  title: "Destroy",
                  command: "terraform destroy",
                  description: "Clean up all resources",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-center ${
                    index % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <Card
                      className={`w-1/2 ${
                        index % 2 === 1 ? "ml-auto" : "mr-auto"
                      }`}
                    >
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <code className="font-mono text-sm bg-muted px-2 py-1 rounded">
                          {item.command}
                        </code>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container max-w-screen-2xl py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Terraform AWS Project by Chaitanya Harish (12201754).</p>
        </div>
      </footer>
    </div>
  );
}
