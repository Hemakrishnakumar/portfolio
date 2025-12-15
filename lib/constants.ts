import { Prociono } from "next/font/google";

export const WELCOME_GREET = "Hi, I'm";

export const PERSONAL_INFO = {
    first_name : 'Hemakrishna',
    last_name : 'Jayavarapu',
    email: 'krish.jayavarapu@gmail.com',
    address: 'Hyderabad, Telangana' 
};

export const MY_URLS = {
    linked_in : process.env.LINKEDIN_PROFILE_URL || "https://www.linkedin.com/in/hemakrishna-kumar-jayavarapu-392b49197/",
    github: process.env.GITHUB_PROFILE_URL || "https://github.com/Hemakrishnakumar"
};