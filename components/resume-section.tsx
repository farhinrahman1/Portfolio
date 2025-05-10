"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState("experience");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            My professional journey, experience, and qualifications that make me
            the perfect fit for your team.
          </p>
          <Button className="mt-6 group" variant="default" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <Tabs
          defaultValue="experience"
          className="w-full max-w-4xl mx-auto"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="experience">
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </TabsTrigger>
            <TabsTrigger value="certifications">
              <Award className="mr-2 h-4 w-4" />
              Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <motion.div
              variants={container}
              initial="hidden"
              animate={activeTab === "experience" ? "show" : "hidden"}
              className="grid gap-6 md:grid-cols-2"
            >
              <motion.div variants={item}>
                <ResumeCard
                  title="Senior Developer"
                  company="Tech Solutions Inc."
                  period="2020 - Present"
                  description="Led development of enterprise applications, managed team of 5 developers, and implemented CI/CD pipelines that reduced deployment time by 40%."
                />
              </motion.div>
              <motion.div variants={item}>
                <ResumeCard
                  title="Web Developer"
                  company="Digital Creations"
                  period="2018 - 2020"
                  description="Developed responsive websites and web applications for clients across various industries, utilizing React, Node.js, and MongoDB."
                />
              </motion.div>
              <motion.div variants={item}>
                <ResumeCard
                  title="Junior Developer"
                  company="StartUp Innovations"
                  period="2016 - 2018"
                  description="Assisted in the development of mobile applications, fixed bugs, and implemented new features based on user feedback."
                />
              </motion.div>
              <motion.div variants={item}>
                <ResumeCard
                  title="Intern"
                  company="Tech Academy"
                  period="2015 - 2016"
                  description="Gained hands-on experience in web development, participated in code reviews, and contributed to open-source projects."
                />
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="education">
            <motion.div
              variants={container}
              initial="hidden"
              animate={activeTab === "education" ? "show" : "hidden"}
              className="grid gap-6 md:grid-cols-2"
            >
              <motion.div variants={item}>
                <ResumeCard
                  title="Master's in Computer Science"
                  company="Tech University"
                  period="2014 - 2016"
                  description="Specialized in software engineering with focus on distributed systems. Graduated with honors."
                />
              </motion.div>
              <motion.div variants={item}>
                <ResumeCard
                  title="Bachelor's in Computer Science"
                  company="State University"
                  period="2010 - 2014"
                  description="Focused on programming fundamentals, data structures, and algorithms. Participated in coding competitions."
                />
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="certifications">
            <motion.div
              variants={container}
              initial="hidden"
              animate={activeTab === "certifications" ? "show" : "hidden"}
              className="grid gap-6 md:grid-cols-2"
            >
              <motion.div variants={item}>
                <ResumeCard
                  title="AWS Certified Solutions Architect"
                  company="Amazon Web Services"
                  period="2022"
                  description="Demonstrated expertise in designing distributed systems on AWS."
                />
              </motion.div>
              <motion.div variants={item}>
                <ResumeCard
                  title="Google Cloud Professional Developer"
                  company="Google"
                  period="2021"
                  description="Validated skills in building scalable applications using Google Cloud Platform."
                />
              </motion.div>
              <motion.div variants={item}>
                <ResumeCard
                  title="Microsoft Certified: Azure Developer Associate"
                  company="Microsoft"
                  period="2020"
                  description="Certified in developing solutions for Microsoft Azure."
                />
              </motion.div>
              <motion.div variants={item}>
                <ResumeCard
                  title="React Developer Certification"
                  company="Meta"
                  period="2019"
                  description="Demonstrated proficiency in building applications with React."
                />
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ResumeCard({ title, company, period, description }) {
  return (
    <Card className="h-full overflow-hidden border-l-4 border-primary hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="flex justify-between items-center">
          <span className="font-medium">{company}</span>
          <span className="text-sm bg-muted px-2 py-1 rounded-full">
            {period}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
