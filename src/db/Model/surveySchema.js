const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  // Basic Information
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { 
    type: String, 
    enum: [
      "Software Developer/Engineer", "Web Developer", "Mobile App Developer", 
      "Data Scientist", "DevOps Engineer", "Student", "Other"
    ] 
  },
  years_of_experience: { 
    type: String, 
    enum: ["Less than 1 year", "1-3 years", "3-5 years", "5-10 years", "More than 10 years"] 
  },
  programming_languages: { 
    type: [String],
  },
  share_code_frequency: { 
    type: String, 
    enum: ["Weekly", "Monthly", "Occasionally", "Rarely/Never"] 
  },
  type_of_content: { type: [String] },
  type_of_visuals: { type: [String] },
  content_idea_source: { type: [String] },

  // Current Practices
  create_visuals: { type: [String] },
  time_spent_creating: { 
    type: String, 
    enum: ["Less than 1 hour", "1-3 hours", "3-5 hours", "More than 5 hours"] 
  },
  documentation_tools: { type: [String] },
  content_challenges: { type: [String] },
  consider_paid_services: { 
    type: String, 
    enum: ["Yes, frequently", "Yes, occasionally", "No, I do it all myself", "No, I haven’t needed to"] 
  },
  satisfaction_level: { 
    type: String, 
    enum: ["Very satisfied", "Somewhat satisfied", "Neutral", "Somewhat dissatisfied", "Very dissatisfied"] 
  },

  // GitHub Usage
  commit_frequency: { 
    type: String, 
    enum: ["Daily", "Weekly", "Monthly", "Rarely", "Never"] 
  },
  importance_of_showcasing: { 
    type: String, 
    enum: ["Very important", "Somewhat important", "Not important"] 
  },

  // Interest in Features
  interest_in_templates: { 
    type: String, 
    enum: ["Yes, definitely", "Possibly", "Not sure", "Probably not", "No, not interested"] 
  },
  helpfulness_of_auto_tracking: { 
    type: String, 
    enum: ["Very helpful", "Somewhat helpful", "Neutral", "Not very helpful", "Not helpful at all"] 
  },
  likelihood_of_use: { 
    type: String, 
    enum: ["Very likely", "Somewhat likely", "Neutral", "Not very likely", "Not likely at all"] 
  },
  valuable_features: { type: [String] },
  payment_amount: { 
    type: String, 
    enum: ["$0 (I would only use a free version)", "$5-10", "$10-20", "$20-30", "More than $30"] 
  },

  // Feedback
  feature_improvements: { type: String },
  automated_tool_help: { type: String },
  beta_test_interest: { 
    type: String, 
    enum: ["Yes", "No", "Maybe"] 
  },
  additional_feedback: { type: String },
  day:{
    type:String,
    required:true,
    immutable:true
  },
  month:{
    type:String,
    required:true,
    immutable:true
  },
  year:{
    type:String,
    required:true,
    immutable:true
  },
},{
    timestamps: true
});


module.exports = mongoose.models.Survey || mongoose.model('Survey', surveySchema);;

