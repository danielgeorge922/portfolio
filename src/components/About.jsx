import React from 'react';
import aboutImg from '../assets/about4.jpeg';

// Project Card Component with Background Image
const ProjectCard = ({ title, description, link, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow h-[300px] flex flex-col justify-end text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

const SkillCard = ({ skill, imgSrc }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={imgSrc} alt={skill} className="h-20 w-20 mb-3" />
      <p>{skill}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-12 gap-10 px-10 max-w-6xl mx-auto">
        
        {/* Image Section */}
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutImg}
              alt="About"
              className="object-cover rounded-xl h-[300px] filter grayscale brightness-50"
            />
          </div>
        </div>

        {/* Text Section */}
        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span className="primary-text">Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hi I'm Daniel, a CS major with a minor in public health at the University of Florida. I work as a Full-Stack Developer at our College of Medicine and am a part of several research labs on campus. I specialize in building web applications and creating/fine-tuning machine learning models, with a focus on healthcare. I have solid experience developing data visualization dashboards, optimized data pipelines, and fine-tuned AI models for early detection of hypertensive disorders. Skilled in React, Node.js, PyTorch, and Keras, I am passionate about leveraging technology to drive impactful solutions in healthcare.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="mt-10 px-10 max-w-6xl mx-auto">
  <h3 className="text-4xl font-semibold mb-8">
    <span className="primary-text">Experience</span>
  </h3>
  
  {/* Full-Stack Technical Specialist */}
  <div className="mb-8">
    <h4 className="text-2xl font-semibold text-white">Full-Stack Technical Specialist</h4>
    <p className="text-gray-400 mb-2">University of Florida College of Medicine | Jun. 2024 - Present</p>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Developed and deployed 6+ full-stack web applications and data visualization dashboards using HiperGator, React JS, and Node JS, improving UI/UX by 30%.</li>
      <li>Engineered and optimized data pipelines, automating SQL queries to extract and preprocess critical data from an Oracle SQL DB, improving data retrieval times by over 20%.</li>
    </ul>
  </div>

  {/* Undergraduate Research Data Analyst */}
  <div className="mb-8">
    <h4 className="text-2xl font-semibold text-white">Undergraduate Research Data Analyst</h4>
    <p className="text-gray-400 mb-2">University of Florida Department of Health Outcomes and Biomedical Informatics | Mar. 2024 - Present</p>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Trained a deep learning neural network with PyTorch for early detection of hypertensive disorders in pregnant women, achieving 96.5% accuracy.</li>
      <li>Conducted data analysis on over 600,000 electronic health records (EHR) from UF Health, creating a data dictionary to study the effects of obesity and hypertension.</li>
      <li>Developed an NLP model using spaCy to detect feeding methods in over 3,000 clinical notes, achieving 93% accuracy, reducing physician documentation time by 40%.</li>
    </ul>
  </div>

  {/* Undergraduate AI Research Assistant */}
  <div className="mb-8">
    <h4 className="text-2xl font-semibold text-white">Undergraduate AI Research Assistant</h4>
    <p className="text-gray-400 mb-2">University of Florida Department of Health Outcomes and Biomedical Informatics | Dec. 2023 - Present</p>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Reprogrammed and fine-tuned the CAMP AI model using Keras, improving accuracy by 2%.</li>
      <li>Streamlined the CAMP data pipelining process with Nextflow on UF’s supercomputer, enhancing efficiency by over 100%.</li>
      <li>Utilized the refined model to study the effects of the GLP-1 (Ozempic) peptide on pregnant women.</li>
    </ul>
  </div>

  {/* Undergraduate Research Intern */}
  <div className="mb-8">
    <h4 className="text-2xl font-semibold text-white">Undergraduate Research Intern</h4>
    <p className="text-gray-400 mb-2">University of Florida Department of Plant Pathology | Aug. 2024 - Present</p>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Developed and optimized network analysis models to track the source of frosty disease in cacao pods using R, aiming to reduce the disease prevalence in the Caribbean.</li>
      <li>Integrated epidemiological model results into visuals using ggplot2, enhancing scientific publications.</li>
    </ul>
  </div>

  {/* CT-GAN Developer */}
  <div className="mb-8">
    <h4 className="text-2xl font-semibold text-white">CT-GAN Developer</h4>
    <p className="text-gray-400 mb-2">Dream Team Engineering | Sep. 2024 - Present</p>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Implemented fine-tuning techniques for Wasserstein and Progressive GANs, reducing loss in GAN-generated CT scans by 11%.</li>
      <li>Investigated methods such as noise injection, learning rate schedules, and attention mechanisms to improve model convergence and realism of CT scans.</li>
    </ul>
  </div>
</div>


      {/* Projects Section */}
      <div className="mt-10 px-10 max-w-6xl mx-auto">
        <h3 className="text-4xl font-semibold mb-8">
          <span className="primary-text">Projects</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <ProjectCard
            title="Lumbar Disease Classifier"
            description="A machine learning tool for classifying degenerative lumbar diseases from MRI scans using PyTorch and OpenCV."
            link="https://github.com/danielgeorge922/lumbar-disease-classifier"
            backgroundImage="https://media.post.rvohealth.io/wp-content/uploads/2020/08/lumbar-spine-ct-scan_thumb-1-732x549.jpg"  // Replace with your image URL
          />

          {/* Project Card 2 */}
          <ProjectCard
            title="Sign Language Translator"
            description="A full-stack web application that translates sign language into text using OpenCV, PyTorch, and AWS."
            link="https://github.com/danielgeorge922/sign-language-translator"
            backgroundImage="https://media.istockphoto.com/id/1388451454/vector/sign-language-tutor-isolated-cartoon-vector-illustration.jpg?s=612x612&w=0&k=20&c=OwWBLnuy8PtfDG5GVESTVDkJG8Lw5p2iWxpV8Idb7qI="  // Replace with your image URL
          />

          <ProjectCard  
            title="Disney+ App"
            description="A full-stack web application that mimics the Disney+ homepage by utilizing the IMDB API."
            link="https://danielgeorge922.github.io/disneyplus/"
            backgroundImage="https://lumiere-a.akamaihd.net/v1/images/disney_originals_web_c4e4ba17.jpeg?region=0%2C0%2C3458%2C1948"  // Replace with your image URL
          />

          {/* Project Card 3 */}
          <ProjectCard
            title="Automated Class Scheduler"
            description="A Python-based tool using OCR and NLP to parse and schedule university classes from screenshots."
            link="https://github.com/danielgeorge922/automated-class-scheduler"
            backgroundImage="data:image/jpeg;base64,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"  // Replace with your image URL
          />

          <ProjectCard
            title="Feeding Type Classification Model"
            description="A machine learning tool utilized by UF Shands Physicians to automatically classify feeding types based off clinical notes."
            link="https://github.com/danielgeorge922/Classifying-Feeding-Types-NLP"
            backgroundImage="https://media.istockphoto.com/id/1192962720/vector/medical-record-flat-design-claim-form-application-prescription-healthcare-documents-patient.jpg?s=612x612&w=0&k=20&c=1maFb_FfRwranyH3DKVGq5q9XKRIz4p3WzkeYQJ2mMc="  // Replace with your image URL
          />

          <ProjectCard
            title="Finance Application"
            description="This product serves as a finance applcaition that detects credit card fraud, predicts stock prices, and classifies spending purchases all with the power of Tensorflow, React, and Tailwind."
            link="https://github.com/danielgeorge922/CreditCard_Fraud"
            backgroundImage="https://media.istockphoto.com/id/1211384881/vector/budget-management-app-personal-financial-control-cash-flow-tiny-woman-manages-the-personal.jpg?s=1024x1024&w=is&k=20&c=sA6Jq3mP8Q38n4dYW6TXNo0cwOADbqlT2DIRJyASVX8="  // Replace with your image URL
          />


          <ProjectCard
            title="NET-UF"
            description="An AI powered chat box that seeks to answer students potential questions aimed to TA's or Professors through the power of the BERT-QUESTION-ANSWERING model and syllabus information extraction using pdfplumber."
            link="https://github.com/ASLaskin/NetUF"
            backgroundImage="https://static.vecteezy.com/system/resources/previews/002/746/151/original/mobile-education-flat-color-icon-remote-internet-school-online-training-classes-elearning-policy-student-holding-smartphone-cartoon-style-clip-art-for-mobile-app-isolated-rgb-illustration-vector.jpg"  // Replace with your image URL
          />
          
        </div>
      </div>
      <div className="mt-10 px-10 max-w-6xl mx-auto">
        <h3 className="text-4xl font-semibold mb-8">
          <span className="primary-text">Skills</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <SkillCard skill="Python" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          <SkillCard skill="React" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <SkillCard skill="Node.js" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <SkillCard skill="Keras" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />
          <SkillCard skill="AWS" imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" />
          <SkillCard skill="SQL" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
        </div>
      </div>
    </div>

    
  );
};

export default About;
