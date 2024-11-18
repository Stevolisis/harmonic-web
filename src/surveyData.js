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
                type: "radio",
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
                type: "radio",
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
                name:"programming_languages",
                type: "check",
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
                type: "radio",
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
                type: "check",
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
                    "Linkedin PDF Slides",
                    "Linkedin PDF Slides with Code Explanations",
                    "Code Snippets",
                    "Social Media Posts",
                    "Infographics",
                    "Other",
                ]
            },
            {
                name:"content_idea_source",
                type: "check",
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














export const CurrentPractices = {
    name: "CurrentPractices",
    surveys: [
        {
            name: "create_visuals",
            type: "check",
            question: "How do you currently create visuals for LinkedIn posts related to your work or code?",
            options: [
                "I design them from scratch (Photoshop, Illustrator, Figma, etc.)",
                "I use pre-made templates (e.g., Canva, PowerPoint)",
                "I pay a freelancer or use a paid service",
                "I don’t use visuals; I post text-based content only",
                "Other",
            ]
        },
        {
            name: "time_spent_creating",
            type: "radio",
            question: "How much time do you spend creating visuals or content posts for LinkedIn?",
            options: [
                "Less than 1 hour",
                "1-3 hours",
                "3-5 hours",
                "More than 5 hours"
            ]
        },
        {
            name: "documentation_tools",
            type: "check",
            question: "What tools do you currently use to document your code or create presentations?",
            options: [
                "GitHub/Bitbucket READMEs",
                "Markdown",
                "Google Docs",
                "Microsoft Word/PowerPoint",
                "Jupyter Notebooks",
                "Notion",
                "Carbon",
                "Snappify",
                "Other"
            ]
        },
        {
            name: "content_challenges",
            type: "check",
            question: "What challenges do you face in creating LinkedIn content?",
            options: [
                "Keeping documentation up-to-date",
                "Making content visually appealing",
                "Creating slides to present my work",
                "Finding or designing visual templates for code/content",
                "Writing engaging descriptions for code snippets",
                "Consistently creating high-quality content",
                "Finding time to create and post regularly",
                "Feeling confident in sharing progress or technical knowledge",
                "I don’t know where to start",
                "Other"
            ]
        },
        {
            name: "consider_paid_services",
            type: "radio",
            question: "Have you ever paid for or considered paying for design services or tools (e.g., Canva) to improve your LinkedIn content?",
            options: [
                "Yes, frequently",
                "Yes, occasionally",
                "No, I do it all myself",
                "No, I haven’t needed to"
            ]
        },
        {
            name: "satisfaction_level",
            type: "radio",
            question: "How satisfied are you with your current method for creating LinkedIn content?",
            options: [
                "Very satisfied",
                "Somewhat satisfied",
                "Neutral",
                "Somewhat dissatisfied",
                "Very dissatisfied"
            ]
        },
    ]
};









export const GitHubUsage = {
    name: "GitHubUsage",
    surveys: [
        {
            name: "commit_frequency",
            type: "radio",
            question: "How often do you commit code to GitHub or other version control platforms?",
            options: [
                "Daily",
                "Weekly",
                "Monthly",
                "Rarely",
                "Never"
            ]
        },
        {
            name: "importance_of_showcasing",
            type: "radio",
            question: "How important is it for you to share or showcase your work on GitHub or platforms like LinkedIn?",
            options: [
                "Very important",
                "Somewhat important",
                "Not important"
            ]
        }
    ]
};










export const InterestInFeatures = {
    name: "InterestInFeatures",
    surveys: [
        {
            name: "interest_in_templates",
            type: "radio",
            question: "Would you be interested in a tool that provides ready-made, customizable templates specifically designed for developers to showcase code and project updates?",
            options: [
                "Yes, definitely",
                "Possibly",
                "Not sure",
                "Probably not",
                "No, not interested"
            ]
        },
        {
            name: "helpfulness_of_auto_tracking",
            type: "radio",
            question: "How helpful would it be to have HarmonicSlide automatically track your GitHub commits or project updates and suggest content ideas?",
            options: [
                "Very helpful",
                "Somewhat helpful",
                "Neutral",
                "Not very helpful",
                "Not helpful at all"
            ]
        },
        {
            name: "likelihood_of_use",
            type: "radio",
            question: "How likely are you to use HarmonicSlide if it significantly reduced the time needed to create LinkedIn posts?",
            options: [
                "Very likely",
                "Somewhat likely",
                "Neutral",
                "Not very likely",
                "Not likely at all"
            ]
        },
        {
            name: "valuable_features",
            type: "check",
            question: "Which features would be most valuable to you in HarmonicSlide?",
            options: [
                "Access to ready-made, editable templates for code visuals",
                "Customizable slide templates",
                "AI-assisted content ideas or topic generation",
                "Automatic slide generation with code explanations",
                "Content planning and tracking for consistency",
                "Easy sharing to LinkedIn",
                "Regular reminders to post and engage on LinkedIn",
                "Confidence-building quotes to encourage sharing work",
                "Integration with GitHub/GitLab/Bitbucket",
                "Auto-detecting major changes and documenting them",
                "Easy formatting for code snippets and explanations",
                "Other"
            ]
        },
        {
            name: "payment_amount",
            type: "radio",
            question: "What is the maximum monthly amount you would consider paying for HarmonicSlide’s full suite of tools (content tracking, reminders, customizable templates, and AI suggestions)?",
            options: [
                "$0 (I would only use a free version)",
                "$5-10",
                "$10-20",
                "$20-30",
                "More than $30"
            ]
        }
    ]
};














export const Feedback = {
    name: "Feedback",
    surveys: [
        {
            name: "feature_improvements",
            type: "singleInputNotRequired:textarea",
            question: "What other features or improvements would you like to see in a tool designed to help developers showcase their work on LinkedIn?",
        },
        {
            name: "automated_tool_help",
            type: "singleInput:textarea",
            question: "Do you think an automated tool like HarmonicSlide could help improve your workflow or showcase your work? If yes, how? If no, why not?",
        },
        {
            name: "beta_test_interest",
            type: "radio",
            question: "Would you be interested in participating in a beta test for HarmonicSlide when it's ready?",
            options: [
                "Yes",
                "No",
                "Maybe"
            ]
        },
        {
            name: "additional_feedback",
            type: "singleInputNotRequired:textarea",
            question: "Any additional feedback or suggestions for the HarmonicSlide project?",
        }
    ]
};
