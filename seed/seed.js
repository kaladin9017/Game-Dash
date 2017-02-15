const User = require('../models').User;
const Company = require('../models').Company;
const Comment = require('../models').Comment;
const db = require('../models').sequelize;

let users = [
  {name: 'Bryan', zipcode: 11210, karmapoints: 500, bio: 'I joined Access Code to further my knowledge in software development. I hope to first acquire the skill set to land a job in the tech industry then ultimately pursue my own entrepreneurial endeavors. One fun fact about me is that on some nights when I fall asleep alone, I wake up with a 60lb pitbull snoring on my chest. Another fun fact is that I am originally from North Carolina and I moved to NYC to pursue music.'},
  {name: 'Carlos', zipcode: 11016, karmapoints: 1000, bio: 'My name is Carlos Martinez. I live in Bed-Stuy Brooklyn. I joined Access Code because I believe it is an amazing opportunity to get into the tech world. My goal is to obtain a job with a tech company. Whether is is for a small start-up or a large tech company. I tend to read a lot of non-fiction books as I think it is a great way to learn information and lessons from different people. I also love talking about the Universe! You like Carl Sagan? Let’s chat it up.'},
  {name: 'Jon', zipcode: 10002, karmapoints: 400, bio:"I have been searching for a program to learn more about programming in general and came across C4Q. I love the pay it forward structure that encourages learning first unlike most other programs I’ve come across. I applied in hopes of learning web development and by the end have an up and running retail webpage. Two fun facts are I am an amateur photographer and I’m also a recovering sneakerhead."},
  {name: 'Jung', zipcode: 11102, karmapoints: 400, bio:"I joined access code because I wanted a change of pace from what I was studying, which was biochemistry. I felt that I can do more with programming than through biochemistry where I will have to go through multiple years of academia in order to get to where I want to be. My hobbies right now are reading, playing video games, and hanging out with friends."}
]

let comments = [
  {UserId:1, CompanyId:1, comments: 'Bryan is an exceptional worker, who strives to be the very best that no one ever was.', date: 2016-12-06, task: 'designated food caterer', hours: 8},
  {UserId:2, CompanyId:1, comments: 'Carlos has exceptional communication skills with customers of diverse backgrounds', date: 2016-10-06, task: 'food transporter', hours: 6},
  {UserId:3, CompanyId:2, comments: 'Jon is exceptionally helpful and dedicated to our cause', date: 2016-07-15, task: 'food server', hours: 2},
  {UserId:4, CompanyId:3, comments: 'Jung is a hard worker and is dedicated to our cause', date: 2015-12-12, task:'storage operations', hours: 5}
]

let company = [
  {name: 'The Cecil' , address: '243 West 30th street, 2nd Floor', latitude: 40.749336, longitude: -73.993914},
  {name: 'Food Pantries Program', address: '450 7Th Avenue', latitude: 40.7514675, longitude:-73.9905644},
  {name: 'The Sylvia Rivera Food Pantry', address: '446 West 36th Street', latitude:40.75533, longitude:-73.997514}
]

db.sync({force: true})
.then(() => User.bulkCreate(users))
.then(() => Company.bulkCreate(company))
.then(() => Comment.bulkCreate(comments))
