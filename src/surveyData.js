import { survey } from "./assets";

export const BasicInformation = {
        name: "BasicInformation",
        surveys:[
            {
                name:"name",
                type: "singleInput:text",
                question: "Name",
            },
            {
                name:"email",
                type: "singleInput:email",
                question: "Email",
            },
            {
                name:"role",
                type: "radioBtn",
                question: "What is your primary role?",
                options:[
                    "Software Developer/Engineer",  
                    "Web Developer",
                    "Mobile App Developer",
                    "Data Scientist",
                    "DevOps Engineer",
                    "Student",
                    "Other",
                ]
            },
            {
                name:"years_of_experience",
                type: "radioBtn",
                question: "How many years of coding experience do you have?",
                options:[
                    "Less than 1 year",
                    "1-3 years",
                    "3-5 years",
                    "5-10 years",
                    "More than 10 years",
                ]
            },
            {
                name:"programming_language",
                type: "radioBtn",
                question: "Which programming languages or frameworks do you primarily use?",
                options:[
                    "JavaScript",
                    "Python",  
                    "Java", 
                    "C++/C#", 
                    "Ruby",  
                    "PHP",  
                    "Go",  
                    "Swift",  
                    "Kotlin",  
                    "Solidity",
                    "Rust",
                    "Other",
                ]
            },
            {
                name:"share_code_frequency",
                type: "select",
                question: "How often do you share coding or project-related content on LinkedIn?",
                options:[
                    "Weekly",
                    "Monthly",
                    "Occasionally",
                    "Rarely/Never",
                ]
            },
            {
                name:"type_of_content",
                type: "select",
                question: "What types of content do you typically share on LinkedIn? (Select all that apply)",
                options:[
                    "Code snippets and technical explanations",
                    "Project updates and progress",
                    "Solutions to problems or challenges faced",
                    "Learning updates (e.g., new languages, tools)",
                    "Industry insights or tips",
                    "Other",
                ]
            },
            {
                name:"type_of_visuals",
                type: "images",
                question: "Which of this visuals do you usually use",
                options:[
                    survey,
                ]
            },
            {
                name:"share_code_frequency",
                type: "select",
                question: "How do you get Ideas on what to post on Linkedin to put yourself out there?",
                options:[
                    "Browsing Content from Others (e.g., looking at posts from connections, influencers, or popular LinkedIn profiles)",
                    "Reflecting on Personal Projects and Progress (e.g., sharing recent projects, accomplishments, or challenges)",
                    "Following Industry News and Trends (e.g., new tech developments, programming languages, or tools)",
                    "Engaging in Discussions or Communities (e.g., developer forums, LinkedIn groups, Twitter)",
                    "Repurposing Past Content or Achievements (e.g., projects from GitHub, old blog posts, or previous presentations)",
                    "Using Content Idea Generators or Tools (e.g., AI-based tools or content suggestions)",
                    "Not Sure / Often Struggle to Find Ideas"
                ]  
            },
            
        ]
    }