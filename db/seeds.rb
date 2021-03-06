# frozen_string_literal: true

##################
# ORGANIZATIONS
#################

organization = Organization.new(
  name: '4Ocean',
  about: "We're here to clean the ocean and coastlines while working to stop the inflow of plastic by changing consumption habits.",
  location: '4 ocean head quarters, Boca Raton, FL 33487',
  contact: 'www.4ocean.com'
)
organization.save

organization = Organization.new(
  name: 'Move for Hunger',
  about: 'Move For Hunger has created a sustainable way for the relocation industry to reduce food waste and fight hunger.',
  location: '4 Hendrickson Ave. Suite #4 Red Bank, NJ 07701',
  contact: 'moveforhunger.org'
)
organization.save

organization = Organization.new(
  name: 'Tropical Audubon Society',
  about: 'Our mission is to conserve and restore South Florida ecosystems, focusing on birds, other wildlife and their habitats.',
  location: '5530 Sunset Dr., Miami, FL 33143',
  contact: '(305) 667-7337'
)
organization.save

organization = Organization.new(
  name: 'Debris Free Oceans',
  about: 'Debris Free Oceans is a Miami-based organization that inspires local communities to responsibly manage the lifecycle of plastics and waste as part of a global initiative to eradicate marine debris from our beaches, reefs, and oceans.',
  location: 'Miami, FL',
  contact: 'www.debrisfreeoceans.com'
)
organization.save

organization = Organization.new(
  name: 'HandsOn Miami',
  about: 'HandsOn Miami inspires, equips and mobilizes people to take action to effect positive change in our Miami-Dade County community. By leveraging the power of people and socially responsible businesses, we transform local communities through meaningful hands-on projects that make a difference.',
  location: 'Miami, FL',
  contact: 'handsonmiami.org'
)
organization.save

organization = Organization.new(
  name: 'United Way Miami',
  about: 'We are on a mission to build a stronger Miami — a Miami where all children have the opportunity to learn and thrive, where families are financially secure and where people can live their lives to the fullest because they have the good health to do so — today and for generations to come. With you by our side, we know we can make this vision a reality. We invite you to join us in this life-changing work.',
  location: 'Miami, FL',
  contact: 'unitedwaymiami.org'
)
organization.save

organization = Organization.new(
  name: 'Paws4You Rescue',
  about: 'PAWS4you Rescue, Inc. is a 501(c)3 non-profit, volunteer, donor-subsidized animal rescue organization based in Miami, Florida. Over the last 11 years, we have served the vital need of sheltering, fostering, and placing dogs in the southern part of Miami-Dade County. We offer life-saving services and employ various strategies to place and keep animals in loving, lifelong homes.',
  location: 'Miami, FL',
  contact: 'paws4you.org'
)
organization.save
###############
# EVENTS
###############
event = Event.new(
  name: '4Ocean Beach Cleanup',
  date: '2020-04-08 11:00:00 -0500',
  displaydate: 'Wednesday, April 8th, 2020 11:00am',
  about: 'Meet us just south of the pier for a beach cleanup featuring the 4ocean Pop-Up Shop & 4ocean Village from 11am -1pm.',
  moreinfo: 'Please a reusable water bottle to help keep single-use plastic off beach. Register today with your Eventbrite ticket! If you have group of 10 or more attending, please email the Volunteer Coordinator at outreach@4ocean.com to ensure proper sign up. Cleanup supplies will be provided for everyone.',
  location: 'Daytona Beach Main Street Pier',
  category: 'Environment',
  city_state: 'Miami',
  instagram: 'https://www.instagram.com/4ocean/?hl=en',
  facebook: 'https://www.facebook.com/4oceanBracelets/',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/Adopt+a+Dog.jpg',
  photo1: 's3://bettertogetherbucket/GettyImages-1145403089.jpg',
  photo2: 's3://bettertogetherbucket/GettyImages-1038239732.jpg',
  photo3: 's3://bettertogetherbucket/GettyImages-1143084022.jpg',
  organization_id: 1
)
# ##############################################
event = Event.new(
  name: 'Food Drive',
  date: '2020-04-06 08:00:00 -0500',
  displaydate: 'Monday, April 6th, 2020 8:00am',
  about: 'Lighthouse Self-Storage has partnered up with Move For Hunger for a spring food drive. Join us to feed the hungry, to raise awareness about hunger, and inspire others to take action.',
  moreinfo: 'Please a reusable water bottle to help keep single-use plastic off beach. Register today with your Eventbrite ticket! If you have group of 10 or more attending, please email the Volunteer Coordinator at outreach@4ocean.com to ensure proper sign up. Cleanup supplies will be provided for everyone.',
  location: 'Lighthouse Self Storage - Cooper City 11060 Griffin Road Cooper City, FL 33328',
  category: 'People',
  city_state: 'Miramar',
  instagram: 'https://www.instagram.com/4ocean/?hl=en',
  facebook: 'https://www.facebook.com/4oceanBracelets/',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/Hands-on-connect.jpeg',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/Hands-on-connect.jpeg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/Hands-on-connect.jpeg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/Hands-on-connect.jpeg',
  organization_id: 2
)
event.save
# ##############################################
event = Event.new(
  name: 'BEE-cause Flea',
  date: Time.new(2020, 4, 12, 2, 2, 2, '+02:00'),
  displaydate: 'Sunday, April 12th, 2020 10:00am',
  about: "BEE-cause Flea MISSION: Raise community awareness of, and on-site support for, increasingly threatened South Florida pollinators. Shop Tropical Audubon Society's 4th Annual BEE-cause Flea and help support the pollinators who feed our planet. Net event proceeds support onsite Steinberg Nature Center Pollinator Habitat Initiatives.",
  location: 'Tropical Audubon Society, 5530 Sunset Drive, Miami, FL 33143',
  category: 'Animals',
  city_state: 'Miami',
  instagram: 'https://www.instagram.com/4ocean/?hl=en',
  facebook: 'https://www.facebook.com/4oceanBracelets/',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/cleanup_main.jpg',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/cleanup_main.jpg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/cleanup_main.jpg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/cleanup_main.jpg',
  organization_id: 3
)
event.save
# ##############################################
event = Event.new(
  name: "Clean-up N' Gro",
  date: '2020-14-04 10:00:00 -0500',
  displaydate: 'Tuesday, April 14th, 2020 10:00am',
  about: "With our mutual mission of thinking global and acting local, Gro and Cerveza Patagonia are proud to team up with local organizations HandsOn Miami and Debris Free Oceans in hosting our fourth Clean Up N' GRO. We must protect what unites us- our common home. Together, we can take a stand against pollution and make an impact on our home.",
  moreinfo: 'Please a reusable water bottle to help keep single-use plastic off beach. Register today with your Eventbrite ticket! If you have group of 10 or more attending, please email the Volunteer Coordinator at outreach@4ocean.com to ensure proper sign up. Cleanup supplies will be provided for everyone.',
  location: 'The Wynwood Marketplace: 2250 NW 2nd Ave, Miami 33127',
  category: 'Environment',
  city_state: 'Miami',
  instagram: 'https://www.instagram.com/4ocean/?hl=en',
  facebook: 'https://www.facebook.com/4oceanBracelets/',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/hands-on-miami.jpg',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/hands-on-miami.jpg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/hands-on-miami.jpg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/hands-on-miami.jpg',
  organization_id: 4
)
event.save
###############################################
event = Event.new(
  name: 'Serve Food: at the Pisgah Pantry',
  date: '2020-25-03 10:30:00 -0500',
  displaydate: 'Wednesday, March 25th, 2020 10:30am',
  about: "The Pisgah Food Pantry is a 'Choice Pantry' and volunteers are needed to help with serving donated foods, stocking the shelves, and helping clients to collect thier food items.  The items supplied to the clients are picked up from partner agencies.   Volunteers are needed to help with final preparations for, and serving pantry clients, on distribution day.",
  moreinfo: ' Closed-toe shoes are required for safety! Please wear long pants or jeans, a t-shirt (no strapless shirts or tank tops), and sneakers are preferred (NO Flip Flops, sandals or slippers). Please plan to arrive a few minutes early for a brief orientation about the volunteer opportunity from the Project Leader.',
  location: 'Miami Gardens, FL',
  category: 'People',
  city_state: 'Doral',
  instagram: 'https://www.instagram.com/handsonmiami/',
  facebook: 'https://www.facebook.com/4oceanBracelets/',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/handson_main.jpg',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/handson_photo1.jpg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/handson_photo2.jpg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/handson_photo3.jpg',
  organization_id: 5
)
event.save
###############################################
event = Event.new(
  name: 'Celebrate Ms.Spring with Older Adults',
  date: '2020-10-04 10:00:00 -0500',
  displaydate: 'Tuesday, April 10th, 2020 10:00am',
  about: "Spring is a particular time; we are reminded of nature's resiliency as everything seems to bloom once again. With Ms. Spring, we celebrate our resident's resiliency with an event that allows them to blossom as well into beautiful misses.  Residential Plaza at Blue Lagoon is the largest assisted living facility in Florida, with 350 residents. We host monthly events to engage our residents socially and give them a sense of purpose. Join us in making the difference in the lives of low-income older adults in our community.",
  moreinfo: 'RSVP ahead of time!',
  location: 'Contact Luisana Hung Salazar (305)267-2700 x219',
  category: 'People',
  city_state: 'Homestead',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/olderadults_main.png',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/olderadults_photo1.jpeg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/olderadults_photo2.jpg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/olderadults_photo3.jpg',
  organization_id: 6
)
event.save
###############################################
event = Event.new(
  name: 'Baynanza: Shake-a-Leg Cleanup Day',
  date: '2020-12-04 09:00:00 -0500',
  displaydate: 'Thursday, April 12th, 2020 9:00am',
  about: "Environmental concerns that affect Biscayne Bay have reached dangerous levels and the health of the marine environment is in a steep decline. Baynanza continues to be an important community-wide effort to save the Bay, and as a Bay Saver sponsor, United Way will host a clean-up through Shake-a-Leg. Shake-a-Leg is a boat-launch location located in Coconut Grove where volunteers will be taking off from the marina in a group in order to clean up the islands in Biscayne Bay. ge as part of United Way of Miami-Dade's yearlong communitywide celebration of volunteerism.",
  moreinfo: 'We highly recommend volunteers to bring the following items: Work gloves, water and snacks, insect repellent, sunscreen, hat, and comfortable closed-toe shoes.',
  location: '2600 S. Bayshore Drive Coconut Grove,FL 33133',
  category: 'Environment',
  city_state: 'Miami',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/handson_main.jpg',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/handson_photo1.jpg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/handson_photo2.jpg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/handson_photo3.jpg',
  organization_id: 6
)
event.save
# ##############################################
event = Event.new(
  name: 'Inspire305 Garden Day Volunteer Project',
  date: '2020-18-04 08:30:00 -0500',
  displaydate: 'April 18th, 2020 8:30am',
  about: "Join Inspire305 and 2019 Grand Innovator Strong Girls Inc. during National Volunteer Week for a Garden Day at Eneida M. Hartner Elementary, part of our 9500 for 95 challenge, United Way of Miami-Dade's yearlong communitywide celebration of volunteerism. You play a key role in shaping our community and your involvement is essential to our mission. Enlist your team, friends, family, neighbors, and colleagues, and join us in our fight for a stronger Miami. Volunteers will help build an edible garden at the school by creating vegetable garden beds, building a micro nursery and seedling station, creating a seating area for students and more!",
  moreinfo: 'Please wear closed-toe, comfortable shoes and outdoor clothing. Street parking is available.',
  location: 'Eneida M. Hartner Elementary School 401 Northwest 29th Street Miami,FL 33127',
  category: 'Environment',
  city_state: 'Miami',
  instagram: 'https://www.instagram.com/4ocean/?hl=en',
  facebook: 'https://www.facebook.com/4oceanBracelets/',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/garden-day.jpeg',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/garden-day.jpeg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/garden-day.jpeg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/garden-day.jpeg',
  organization_id: 6
)
event.save
# ##############################################
event = Event.new(
  name: 'Volunteers ROCK with Branches',
  date: '2020-25-04 09:00:00 -0500',
  displaydate: 'Wednesday, April 25th, 2020 9:00am',
  about: "Branches provides life-changing opportunities to help working families and their children break the cycle of generational poverty. Branches has embarked on developing and implementing programs that address the root causes of poverty and address immediate and critical needs. Today, Branches' menu of services provides a continuum of support to community members to empower them to pursue life changing opportunities. During National Volunteer Week, join our 9500 for 95 challenge as part of United Way of Miami-Dade's yearlong communitywide celebration of volunteerism",
  moreinfo: 'Volunteers will replenish the mulch in the after-school playground and help restore rocking chairs for students at the Branches Florida City campus.',
  location: 'Branches Florida City 129 Southwest 5 Avenue Florida City, FL 33034',
  category: 'People',
  city_state: 'Homestead',
  instagram: 'https://www.instagram.com/4ocean/?hl=en',
  facebook: 'https://www.facebook.com/4oceanBracelets/',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/people-work.jpeg',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/people-work.jpeg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/people-work.jpeg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/people-work.jpeg',
  organization_id: 6
)
event.save
###############################################
event = Event.new(
  name: 'ReadingPals',
  date: '2020-01-05 10:00:00 -0500',
  displaydate: 'Friday, May 1st, 2020 10:00am',
  about: 'Volunteering just 60 minutes of your time a week to read to a child makes a lifelong impact in their life and yours.',
  moreinfo: 'For more information, please visit https://unitedwaymiami.org/what-we-do/our-take-on-education/readingpals/',
  location: 'The Ansin Building 3250 SW 3rd Ave Miami,FL 33129',
  category: 'Youth',
  city_state: 'Miami',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/readingpals_main.jpg',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/readingpals_photo1.jpg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/readingpals_photo2.jpg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/readingpals_photo3.jpg',
  organization_id: 6
)
event.save
###############################################
event = Event.new(
  name: 'Simpson Park Clean Up',
  date: '2020-02-05 10:00:00 -0500',
  displaydate: 'Saturday, May 2nd, 2020 10:00am',
  about: 'Join the City of Miami Parks and Recreation Department during this service learning program mobilizing student to restore the endangered ecosystem! Volunteers will clean up the park and remove debris and exotic invasive plants. Simpson Park contains one of the remnant fragments of historical Brickell Hammock, one the largest and most diverse Rockland hammocks on the South Florida mainland.',
  moreinfo: 'Volunteers under 17 years of age must be accompanied by an adult.',
  location: '5 Southwest 17th Road Miami, FL 33129',
  category: 'Environment',
  city_state: 'Miami',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/park_main.jpg',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/park_photo1.jpg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/park_photo2.jpg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/park_photo3.jpg',
  organization_id: 6
)
event.save
# ##############################################
event = Event.new(
  name: "Celebrate Mother's Day",
  date: '2020-08-05 10:00:00 -0500',
  displaydate: 'Friday, May 8th, 2020 10:00am',
  about: 'During this celebration, we exalt the contribution of all women to society, primarily through their sacrifice and hard work for their families. We make it a special day of beautiful moments to remember. Residential Plaza at Blue Lagoon is the largest assisted living facility in Florida, with 350 residents. We host monthly events to engage our residents socially and give them a sense of purpose. Join us in making a difference in the lives of low-income older adults in our community.',
  location: '5617 NW 7th Street Miami, FL 33126',
  category: 'People',
  city_state: 'Miami',
  instagram: 'https://www.instagram.com/4ocean/?hl=en',
  facebook: 'https://www.facebook.com/4oceanBracelets/',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/women-work.jpeg',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/women-work.jpeg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/women-work.jpeg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/women-work.jpeg',
  organization_id: 6
)
event.save
###############################################
event = Event.new(
  name: 'Alice Wainwright Park Clean Up',
  date: '2020-06-06 10:00:00 -0500',
  displaydate: 'Saturday, June 6th, 2020 10:00am',
  about: 'Join the City of Miami Parks and Recreation Department during this service learning program mobilizing students to restore the endangered ecosystem! Volunteers will clean up the park and remove debris and exotic invasive plants.',
  moreinfo: 'Stay hydrated and be prepared to work outside! Please bring a refillable water bottle. Closed-toe shoes are required and long-sleeved shirts and long pants are recommended. A hat, sun block, and insect repellent are recommended.',
  location: '52845 Brickell Avenue Miami, FL 33129',
  category: 'Environment',
  city_state: 'Miami',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/park_main.jpg',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/park_photo1.jpg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/park_photo2.jpg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/park_photo3.jpg',
  organization_id: 6
)
event.save
###############################################
event = Event.new(
  name: 'PetSmart Adoption Event',
  date: '2020-04-04 11:00:00 -0500',
  displaydate: 'Saturday, April 4th, 2020 11:00am',
  about: 'Meet some of our adoptable PAWS4you dogs every Saturday at PetSmart! Be ready to fall in love with each and every one of them.',
  moreinfo: 'Come find your forever friend!',
  location: 'PetSmart 13621 S Dixie Hwy Miami, FL 33176',
  category: 'Animals',
  city_state: 'Miami',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/petsmart_main.jpg',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_photo1.jpg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_photo2.jpg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_photo3.jpg',
  organization_id: 7
)
event.save
###############################################
event = Event.new(
  name: 'PetSmart Adoption Event',
  date: '2020-14-04 11:00:00 -0500',
  displaydate: 'Tuesday, April 14th, 2020 11:00am',
  about: 'Meet some of our adoptable PAWS4you dogs every Saturday at PetSmart! Be ready to fall in love with each and every one of them.',
  moreinfo: 'Come find your forever friend!',
  location: 'PetSmart 13621 S Dixie Hwy Miami, FL 33176',
  category: 'Animals',
  city_state: 'Miami',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/petsmart_main.jpg',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_photo1.jpg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_photo2.jpg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_photo3.jpg',
  organization_id: 7
)
event.save
###############################################
event = Event.new(
  name: 'PetSmart Adoption Event',
  date: '2020-21-04 11:00:00 -0500',
  displaydate: 'Tuesday, April 21st, 2020 11:00am',
  about: 'Meet some of our adoptable PAWS4you dogs every Saturday at PetSmart! Be ready to fall in love with each and every one of them.',
  moreinfo: 'Come find your forever friend!',
  location: 'PetSmart 13621 S Dixie Hwy Miami, FL 33176',
  category: 'Animals',
  city_state: 'Miami',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/petsmart_main.jpg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_photo1.jpg',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_photo2.jpg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_photo3.jpg',
  organization_id: 7
)
event.save
###############################################
event = Event.new(
  name: 'PetSmart Adoption Event',
  date: '2020-28-04 11:00:00 -0500',
  displaydate: 'Tuesday, April 28th, 2020 11:00am',
  about: 'Meet some of our adoptable PAWS4you dogs every Saturday at PetSmart! Be ready to fall in love with each and every one of them.',
  moreinfo: 'Come find your forever friend!',
  location: 'PetSmart 13621 S Dixie Hwy Miami, FL 33176',
  category: 'Animals',
  city_state: 'Miami',
  mainphoto: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_main.png',
  photo1: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_photo1.jpg',
  photo2: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_photo2.jpg',
  photo3: 'https://bettertogetherbucket.s3.us-east-2.amazonaws.com/pet_photo3.jpg',
  organization_id: 7
)
event.save
###############################################
User.create(email: 'admin@admin.com', password: 'password', admin: true)
User.create(email: 'some@guy.com', password: 'password')

p 'seeded'
