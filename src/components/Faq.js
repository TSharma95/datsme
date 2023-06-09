import React, { useState, useRef, useEffect } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState([]);
  const [activeKey, setActiveKey] = useState('Datsme Overview');
  const faqItemRef = useRef([]);
  const [itemHeights, setItemHeights] = useState([]);

  useEffect(() => {
    const calculateHeight = (index) => {
      if (faqItemRef.current[index]) {
        const height = faqItemRef.current[index].scrollHeight;
        return activeIndex.includes(index) ? `${height / 10}rem` : '0';
      }
      return '0';
    };

    const updatedHeights = faqItemRef.current.map((item, index) => calculateHeight(index));
    setItemHeights(updatedHeights);
  }, [activeIndex, activeKey]);

  useEffect(() => {
    // Set the active indexes based on the number of questions in each key
    const updatedActiveIndex = faqData.map((item, index) => {
      if (item.questions.length < 4) {
        return Array.from({ length: item.questions.length }, (_, i) => i);
      } else {
        return [0];
      }
    });

    const firstQuestionIndex = faqData.findIndex((item) => item.key === activeKey);
    if (firstQuestionIndex !== -1) {
      setActiveIndex(updatedActiveIndex[firstQuestionIndex]);
    }
  }, [activeKey]);


  const faqData = [
    {
      key: "Datsme Overview",
      questions: [
        {
          question: "What is Datsme?",
          answer: `
                <p>
                    Living in a society that satisfies material wants and needs, Little did we know that we need to find Acceptance and Meaning through Deep Human Contact. Such assurance only resides in Compatibility.
                </p>
                <p>
                    Find, Explore and Connect with Highly Compatible Friends having Similar Interests.
                </p>
                <p>
                    Based on Psychology, Datsme allows you to explore Friendships on the basis of Compatibility and Understanding.
                </p>
                <p>
                    High compatibility comes from similarities in Lifestyle, Values, Beliefs, Perceptions, Worldview, Perspectives and more, which is the Foundation of Datsme Compatibility Algorithm.
                </p>
                <p>
                    While other social media platforms focus on instant gratification of looks, Datsme focuses on the understanding the roots of Genuine Bonding and Friendship through Psychology.
                </p>
                <p>We are more than just beautiful bodies and faces. Join the Revolution - Download the Datsme App now!</p>
                `
        },
        {
          question: "How can I use Datsme?",
          answer: `
                <p>The Datsme App is now available for Android only.</p>
                <p>The iOS version of the app will be launched soon in June 2020.</p>
                <p>Download the Datsme App from the Google Play Store.</p>
                <p>Datsme currently supports minimum Android 6.0 Marshmallow and up.</p>
                <p>
                    Rather than perfecting the perception others have of you, Establish a strong sense of self by going through the Datsme Psychology Algorithm.
                </p>
                <p>
                    Answer Unique Questions based on Psychology so that Datsme can help you find friends you are Compatible with.
                </p>
                `
        },
        {
          question: "Do I have to pay for Datsme or is it free?",
          answer: `
                <p>
                    Who pays for finding friends right? We know you have a life. And that is why : Datsme was, is and always will be free.
                </p>
                <p>
                    To enhance your Datsme Experience, Premium Features of Datsme will be launched in June 2020. Stay Tuned!
                </p>
                <p>Download the Datsme App now.</p>
                `
        },
        {
          question: "Where can I use Datsme right now?",
          answer: `
                <p>
                    The Datsme App is now available in India only. In India, Prime Locations for Datsme Users are New Delhi/NCR, Hyderabad, Bangalore, Mumbai, Pune, Chennai, Kolkata, Lucknow, Jaipur, Kerala, Ahmedabad, Chandigarh and Vadodara.
                </p>
                <p>
                    Datsme will be launched in these countries soon : United States, Canada, Mexico, Brazil, Spain, France, UK, Germany and Australia.
                </p>
                <p>Stay Tuned!</p>
                `
        },
        {
          question: "What is the Minimum Age Requirement to use Datsme?",
          answer: `
                <p>The Minimum Age Requirement for Datsme is 18 years old.</p>
                <p>
                    We want you to know that Datsme is a journey of knowing yourself enough, to be able to choose friends you are compatible with.
                </p>
                `
        }
      ]
    },
    {
      key: "About Datsme",
      questions: [
        {
          question: "What is the problem Datsme is solving?",
          answer: `
                <p>
                    While other social media platforms focus on instant gratification of looks, Datsme focuses on understanding the roots of Genuine Bonding & Friendship through Psychology.
                </p>
                <p>
                    We, at Datsme, believe that Deeper Understanding & Genuine Happiness can be found among friends with High Compatibility.
                </p>
                <p>Compatibility is the Future. The Future is Datsme.</p>
                `
        },
        {
          question: "Why should users prefer Datsme over other social media platforms?",
          answer: `
                <ol>
                    <li>
                        <p>We put you in the strongest and safest position possible</p>
                        <p>
                            A 10 minutes successful Investment in the Datsme Psychological Algorithm can save you from a failed 10,000 minutes you would have invested to know someone and it would not have worked out.
                         </p>
                        <p>What if we still fail?</p>
                        <p>What if It does not work out with People I’m Compatible with?</p>
                        <p>What about People I’m not that Compatible with?</p>
                    </li>
                    <li>
                        <p>
                            Social Media Platforms have become quote Looks-centric. Datsme has overweighed here also, by using well defined, researched and surveyed, Psychological Researches and Algorithms that you would give you very better matches compared to judging from pictures.
                        </p>
                    </li>
                    <li>
                        <p>
                            The Tools and Power that Datsme offers its users are incredible. Social Media has never seen something like this before. Psychology and Compatibility, Datsme Tag Search, Datsme Location Search, Datsme Map Mode, The Filter and Sorting Criteria . This is too much to handle!
                        </p>
                    </li>
                    <li>
                        <p>
                            It is more important for a social media platform to be strong, trustworthy and dependable rather than just warm and optimistic. Datsme has carefully given thought to every aspect of its being.
                        </p>
                    </li>
                </ol>
                <p>
                    We can go on and on, Why don’t you try it out yourself? Download the Datsme App now!
                </p>
                `
        }
      ]
    },
    {
      key: "Signing Up and Getting Started",
      questions: [
        {
          question: "Where can I download Datsme?",
          answer: `
                <p>The Datsme App is now available for Android only.</p>
                <p>The iOS version of the app will be launched soon in June 2020.</p>
                <p>Download the Datsme App from the Google Play Store.</p>
                <p>Datsme currently supports minimum Android 6.0 Marshmallow and up.</p>
                `
        },
        {
          question: "How do I create a Datsme Account?",
          answer: `
                <p>To Register with Facebook :</p>
                <ol>
                    <li>Download the Datsme App for Android. The iOS version of the app will be launched soon in June 2020.<li>
                    <li>Tap “Facebook” Button</li>
                    <li>If prompted, Sign in to your Facebook Account (Datsme does not post anything to Facebook)</li>
                    <li>Fill out your Profile Info</li>
                    <li>Allow Datsme access to all required permissions</li>
                    <li>Cut to the Chase? You’re Awesome! Now Get going!</li>
                </ol>
                <p>To Register with Google :</p>
                <ol>
                    <li>Download the Datsme App for Android. The iOS version of the app will be launched soon in June 2020.</li>
                    <li>Tap “Google” Button</li>
                    <li>Select the Google Account you want to use</li>
                    <li>If the account you want to use isn’t listed, tap Use Another Account and sign in</li>
                    <li>Fill out your Profile Info</li>
                    <li>Allow Datsme access to all required permissions</li>
                    <li>Cut to the Chase? You’re Awesome! Now Get going!</li>
                </ol>
                <p>To Register with Mobile Number :</p>
                <ol>
                    <li>Download the Datsme App for Android. The iOS version of the app will be launched soon in June 2020.</li>
                    <li>Tap “Mobile Number” Button and follow the instructions on your screen</li>
                    <li>Select the Google Account you want to use</li>
                    <li>Fill out your Profile Info</li>
                    <li>Allow Datsme access to all required permissions</li>
                    <li>Cut to the Chase? You’re Awesome! Now Get going!</li>
                </ol>
                `
        },
        {
          question: "What are the diﬀerent ways by which I could sign in?",
          answer: `
                <p>There are 3 ways to login to the Datsme App :</p>
                <ol>
                    <li>Login through Facebook</li>
                    <li>Login through Google</li>
                    <li>Login through Mobile Number</li>
                </ol>
                <p>Check out -> How do I create a Datsme Account?</p>
                `
        },
        {
          question: "How do I edit my Profile?",
          answer: `
                <p>To Edit your Profile info, Open your Profile, Tap the “Edit Profile” (Pencil Icon) below your Profile</p>
                <p>Picture. Here, You can edit the following sections :</p>
                <ol>
                    <li>Profile Picture</li>
                    <li>Location</li>
                    <li>Working at</li>
                    <li>Studying at</li>
                    <li>Say Something about Yourself</li>
                </ol>
                <p>You are not allowed to edit the following sections :</p>
                <ol>
                    <li>Name</li>
                    <li>Date of Birth</li>
                    <li>Gender</li>
                </ol>
                <p>If you have any problem regarding these 3, Please delete your account and sign in again.</p>
                `
        },
        {
          question: "What are the diﬀerent filter and sorting techniques I can apply to find people?",
          answer: `
                <p>You can apply the distance filter which gives you the power to find people according to the following :</p>
                <ol>
                    <li>Locally</li>
                    <li>District</li>
                    <li>Citywide</li>
                    <li>State</li>
                    <li>Nation</li>
                </ol>
                <p>The Age Filter is coming soon!</p>
                <p>You can apply these sort techniques to find people :</p>
                <ol>
                    <li>Sort by Level : The Most Authentic Users are seen first</li>
                    <li>Sort by Activity : The Most Active Users are seen first</li>
                </ol>
                `
        }
      ]
    },
    {
      key: "Features of Datsme",
      questions: [
        {
          question: "Psychology and Compatibility ?",
          answer: `
                <p>
                    You are the average of the top 5 friends, with whom, you spend most of our time. So, choosing a right friend is an absolute necessity.
                </p>
                <p>This is where Psychology comes into the picture.</p>
                <p>
                    Based on psychology, Datsme allows you to explore friendships on the basis of compatibility and understanding. Friends have a direct effect on our personality as they connect with us on an emotional level. So, Datsme lets you engage in self introspection through a personality test which calculates your compatibility with a friend.
                </p>
                <p>
                    High Compatibility comes from similarities in Lifestyle, Values, Beliefs, Perceptions, Worldview, Perspectives and more, which is the Foundation of Datsme Compatibility Algorithm.
                </p>
                <p>
                    While other social media platforms focus on instant gratification of looks, Datsme focuses on understanding the roots of Genuine Bonding and Friendship through Psychology.
                </p>
                `
        },
        {
          question: "Datsme Tag Search ?",
          answer: `
                <p>
                    Datsme Tag Search is the Ultra Feature of the Datsme App. Combining it with Psychology and Compatibility, This feature is unstoppable and the king of Social Media!
                </p>
                <p>Here’s how :</p>
                <p>
                    Out of available 19 categories like Nature, Hobbies x Interests, Work x Profession, Personality Type etc and 320 Tags in total, You can create your own chain reaction of tags to find the type of people you want to. Multiple Tags in a Single Search.                    
                </p>
                <p>Never done before, Unleash the Power of Social Media with our cutting edge technology.</p>
                <p>Create your Chain Reaction and Experience Power at your Fingertips.</p>
                `
        },
        {
          question: "Datsme Location Search ?",
          answer: `
                <p>Datsme Location Search - Be where the buzz is</p>
                <ol>
                    <li>
                        <p>Admission into a new college?</p>
                        <p>Given the power of Multiple Tags, Find Friendly Seniors you can be thankful for.</p>
                    </li>
                    <li>
                        <p>Moving to a new place?</p>
                        <p>Find Compatible Friends with similar interests in your locality who you never knew existed.</p>
                    </li>
                    <li>
                        <p>Got a new job?</p>
                        <p>Connect with professionals who match your vibe before you even get there.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "Datsme Map Mode ?",
          answer: `
                <p>Datsme Map Mode - The Gamified Experience</p>
                <p>
                    Datsme Map Mode only displays the Top 150 profiles of the Datsme Platform RELEVANT TO YOU. That’s right, Read that again.
                </p>
                <p>
                    We go the extra mile and the users you see are relevant to you. That means everybody will see different users specially catered to themselves. This is because we care about you and want you to have the best Datsme Experience.
                </p>
                <p>You can go to settings and toggle between the following options for Map Mode :</p>
                <ol>
                    <li>
                        <p>See All : Explore 150 Users relevant to you.</p>
                    </li>
                    <li>
                        <p>Advanced Filtering : A Notch Above! Just like the name suggests.</p>
                    </li>
                    <li>
                        <p>Invisible Mode : Hide yourself from the Map Mode</p>
                    </li>
                </ol>
                `
        }
      ]
    },
    {
      key: "How does Datsme work?",
      questions: [
        {
          question: "How does Datsme incorporate Psychology?",
          answer: `
                <p>
                    Psychology is the scientific study of the Human Mind. As people are becoming more intellectual and intelligent, Smarter People need Smarter Platforms.
                </p>
                <p>
                    This is where Datsme comes into the picture, Merging the next big psychological and technological revolution.
                </p>
                <p>
                    Although you know we cannot completely reveal what our algorithm is ; But some of the Researches, Factors and Concepts that the Datsme Psychology Algorithm is based on are as follows :
                </p>
                <ol>
                    <li>Shasta Nelson’s Friendship Survey</li>
                    <li>The Frientimacy Triangle</li>
                    <li>Aristotle’s Model of Friendship</li>
                    <li>Compatibility - Chemistry Ratios</li>
                    <li>Social Penetration Theory</li>
                    <li>Social Attraction Trust Hypothesis</li>
                    <li>Social Exchange Theory</li>
                    <li>The Norm of Reciprocity</li>
                    <li>Constructive Conflict Resolution</li>
                    <li>Self - Disclosure and Reciprocity Theories</li>
                    <li>Intelligence and Emotional Quotient Criteria</li>
                    <li>Emotional Health Monitoring, and more And this will evolve with time.</li>
                </ol>
                `
        },
        {
          question: "What is Compatibility?",
          answer: `
                <p>
                    Since Compatibility is the foundation of Datsme, Datsme would like to tell you The 3 Tier Definition compatible with Datsme :
                </p>
                <ol>
                    <li>
                        <p>
                            The Natural Alignment between 2 people that comes from similarities in Lifestyle, Values, Beliefs, Perceptions, Worldview, Perspectives and more factors incorporated in the Datsme Psychology Algorithm.
                        </p>
                    </li>
                    <li>
                        <p>It is the Long Term Potential between 2 People.</p>
                    </li>
                    <li>
                        <p>It is the Success Rate between 2 People if they decide to talk.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "What if it does not work out with People I’m Compatible with?",
          answer: `
                <p>Yes it is possible that things might not click even though you have a really high compatibility. Here’s why :</p>
                <ol>
                    <li>
                        <p>
                            Datsme is a Journey of knowing yourself enough, to be able to choose friends you are compatible with. What people think about themselves are not what they truly are.
                        </p>
                    </li>
                    <li>
                        <p>
                            You are always changing and evolving. Every time you take the Datsme Algorithm after a considerable time, You will find that you have changed. Thus, Datsme also gives you an introspective approach into yourself.
                        </p>
                    </li>
                    <li>
                        <p>
                            Although Compatibility is the best way to meet people, Social Media can never replace human life interactions. This is where Chemistry (The Emotional Quotient present between 2 People when they are together) comes into the picture. You can be really highly compatible with someone, but when you meet them in real life, Things may seem dull.
                        </p>
                    </li>
                    <li>
                        <p>
                            Tag Search is the best way to ensure High Compatibility and High Chemistry for best results!
                        </p>
                    </li>
                </ol>
                `
        },
        {
          question: "What about the People I am not Compatible with?",
          answer: `
                <p>The time you can truly grow as a human being, both professionally and personally, is when you have the opportunity to listen to people who are different from you.</p>
                <p>Sometimes you remain in a fixed mindset when you hang around people who just agree with you or do the same things as you.</p>
                <p>Friends who offer new perspectives, ideas, experiences and advice can help you learn more about yourself and will help you grow as a more well rounded person.</p>
                <p>Since everything has become so temporary in these times, and People do not have the time, energy and emotions to invest in new friendships just to see people go away,</p>
                <p>We encourage Compatibility because it helps to form long lasting and trustworthy relationships.</p>
                `
        },
        {
          question: "What if I don’t want to answer the Psychology Questionnaire?",
          answer: `
                <p>Here’s why you would love to answer the Datsme Psychology Questionnaire :</p>
                <ol>
                    <li>
                        <p>Journal of Science and Psychology tells us that it takes about 50 hours of sharing time with someone before you consider someone a casual friend. How can you find great friends? By investing your time, energy and efforts. Hit and Trial in Real Life or Social Media are your only options.</p>
                        <p>Datsme helps you find new friends in minutes, and puts you in a strong position that no other social media platform can place you in.</p>
                        <p>A 10 minutes successful Investment in the Datsme Psychological Algorithm can save you from a failed 3,000 minutes you would have invested to know someone and it would not have worked out. Just be in a better position.</p>
                    </li>
                    <li>
                        <p>The Psychology Questions act as a firewall.</p>
                        <p>This Firewall lets through smart and intellectual people, People who want meaningful friendships and those who want to find friends who complete them.</p>
                        <p>Remember, Loneliness does not come from having less people around you. You can be around hundreds of people and still be lonely. Loneliness comes from not being able to share what you truly feel inside.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "Can I use the Datsme App without answering the Questionnaire?",
          answer: `
                <p>Living in a hyper-stimulating world where patience has become so costly and everything is fighting for your attention, We understand that going through the Datsme Algorithm can be a little time taking.</p>
                <p>Therefore, Before you start answering psychological questions, Click on the “I’ll Answer Later” Button to skip the question and enter the Datsme Platform.</p>
                <p>If you have already started the Questionnaire, The “I’ll Answer later Button” will appear if :</p>
                <ol>
                    <li>
                        <p>You leave the screen idle for 10 seconds</p>
                    </li>
                    <li>
                        <p>You click anywhere on the screen except the questions or answers</p>
                    </li>
                </ol>
                <p>Since Compatibility is the foundation of Datsme and you skipped the Psychological Compatibility Questionnaire, You cannot connect with other individuals unless you complete your answers. You can just explore the platform and see what the app is all about.</p>
                `
        },
        {
          question: "How can I change my answers?",
          answer: `
                <p>To change your answers/Re-answer the Datsme Questionnaire :</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Go to Settings in the Top Right corner</p>
                    </li>
                    <li>
                        <p>Click on “Change you Answers”</p>
                    </li>
                    <li>
                        <p>When the popup comes, Select Yes.</p>
                    </li>
                </ol>
                <p>Note : You will loose your previous answers and this would result in a different compatibility with every other person on the platform.</p>
                `
        },
        {
          question: "How does Datsme Tag Search work?",
          answer: `
                <ol>
                    <li>
                        <p>First open the main Datsme View (2nd from left in the bottom bar) where you see all the profiles.</p>
                    </li>
                    <li>
                        <p>In the 3-option panel above the main bottom bar, Click on the “Search” icon.</p>
                    </li>
                    <li>
                        <p>You can now select Tags from different categories, Mix it up, Create your chain reaction and Find people your type.</p>
                    </li>
                    <li>
                        <p>You can also type in the Tag Search Panel the tag that you want to search for.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How many tags can be used in a single search in Datsme Tag Search?",
          answer: `
                <p>Currently, You can use 2 Tags at a time in a single search. But hey, This is just the beginning.</p>
                <p>We have already tested Datsme Tag Search to work perfectly for 5 Tags at a time and this will increase.</p>
                <p>As the number of users increase, The power of Datsme Tag Search would be unleashed.</p>
                `
        },
        {
          question: "How does Datsme Location Search Work?",
          answer: `
                <ol>
                    <li>
                        <p>First open the main Datsme View (2nd from left in the Bottom Bar) where you see all the profiles.</p>
                    </li>
                    <li>
                        <p>In the 3-option panel above the main bottom bar, Click on the Leftmost “Search” icon.</p>
                    </li>
                    <li>
                        <p>Tag Search is pre-selected. Select “Location Search” on its right side by clicking on it.</p>
                    </li>
                    <li>
                        <p>You can now select Tags from different locations in the Quick Suggestions.</p>
                    </li>
                    <li>
                        <p>You can also type in the Location Search Panel the place that you want to search for.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "What are the locations where Datsme Location Search is available right now?",
          answer: `
                <p>Right now, Datsme Location Search is available in the following cities :</p>
                <ol>
                    <li><p>Delhi</p></li>
                    <li><p>Hyderabad</p></li>
                    <li><p>Bangalore</p></li>
                    <li><p>Mumbai</p></li>
                    <li><p>Pune</p></li>
                    <li><p>Chennai</p></li>
                    <li><p>Kolkata</p></li>
                    <li><p>Lucknow</p></li>
                    <li><p>Jaipur</p></li>
                    <li><p>Kerala</p></li>
                    <li><p>Ahmedabad</p></li>
                    <li><p>Chandigarh</p></li>
                    <li><p>Vadodara</p></li>
                </ol>
                `
        },
        {
          question: "How does Datsme Map Mode work?",
          answer: `
                <ol>
                    <li>
                        <p>First open the Main Datsme View (2nd from left, in the Bottom Bar) where you see all the profiles.</p>
                    </li>
                    <li>
                        <p>In the 3-option panel above the Main Bottom Bar, Click on the Rightmost “Location” icon to enter the Datsme Map Mode.</p>
                    </li>
                    <li>
                        <p>You can now see the Top Profile Bar and The Top 150 Users relevant to you, on the map.</p>
                    </li>
                    <li>
                        <p>To go back, Click on the “Cross” Icon which will take you back to Main Datsme View.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "Can I hide myself from the Map?",
          answer: `
                <p>Yes. You can hide yourself from the Map by following the steps below :</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Open Settings in the Top Right corner</p>
                    </li>
                    <li>
                        <p>In Settings, You will see “Map Settings”</p>
                    </li>
                    <li>
                        <p>Turn ON “Invisible Mode” to hide yourself from the Map.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "Where can I access the Map Settings?",
          answer: `
                <p>You can access the Map Settings as follows :</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Open Settings in the Top Right corner</p>
                    </li>
                    <li>
                        <p>In Settings, You will see “Map Settings”</p>
                    </li>
                </ol>
                `
        },
        {
          question: "Does the Map show my exact location? Is it safe?",
          answer: `
                <p>Before we even thought of creating the Map Mode, We were concerned about the Safety and Privacy of females. We don’t want anyone should suffer any harm because of us, and thus, we have taken the following initiatives to keep everyone safe :</p>
                <ol>
                    <li>
                        <p>Your location is displaced in a way that nobody can track where you exactly live or which area you live in. Stalkers and Creeps won’t be able to find you through the Map Mode.</p>
                    </li>
                    <li>
                        <p>The Zoom of the Map is locked in a way that nobody can track you from the Map</p>
                    </li>
                </ol>
                <p>We care about you, and are concerned about your privacy.</p>
                `
        },
        {
          question: "Can I use Multiple Modes at the same time?",
          answer: `
                <p>No, You cannot use Multiple Modes at the same time. Compatibility is the foundation of Datsme, Thus it is coupled with every other feature.</p>
                <p>Therefore, You will have to use only One Mode at a time :</p>
                <ol>
                    <li>
                        <p>Datsme with Compatibility and Filter/Sort</p>
                    </li>
                    <li>
                        <p>Datsme Tag Search with Compatibility</p>
                    </li>
                    <li>
                        <p>Datsme Location Search with Compatibility</p>
                    </li>
                    <li>
                        <p>Datsme Map Mode with Compatibility</p>
                    </li>
                </ol>
                `
        },
        {
          question: "Can I use Datsme without giving Location Permissions?",
          answer: `
                <p>Social Psychological Research finds that proximity or propinquity is the greatest predictor of friendships. This is where location comes into the picture. Datsme Algorithm is based on Location so that you can meet the people to talk.</p>
                <p>No, You cannot use Datsme without enabling Location Permissions. But if you want to hide yourself from the Datsme Map :</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Open Settings in the Top Right corner</p>
                    </li>
                    <li>
                        <p>In Settings, You will see “Map Settings”</p>
                    </li>
                    <li>
                        <p>Turn ON “Invisible Mode” to hide yourself from the Map.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How can I access Settings from the app?",
          answer: `
                <p>To open settings on your app :</p>
                <ol>
                    <li>
                        <p>From the bottom bar of the app, Open the first icon from the left.</p>
                    </li>
                    <li>
                        <p>This icon opens your profile.</p>
                    </li>
                    <li>
                        <p>On the Top Right of the screen, Click the “Gear” Icon to open “Settings”</p>
                    </li>
                </ol>
                `
        }
      ]
    },
    {
      key: "User Levels and Tags",
      questions: [
        {
          question: "What is the “Level” of a User?",
          answer: `
                <p>The “Level of a User” determines the Authenticity and Visibility of a User in the Datsme App.</p>
                <p>Since a higher level means more tags added to your profile, This gives people a chance to approach you in more friendly and interactive ways possible to break the ice.</p>
                <p>The more your level, The more other people would want to be in touch with you because of your “Authentic” Profile</p>
                <p>The more the level, The higher is your Visibility in the app and more people can see you.</p>
                `
        },
        {
          question: "How can I increase my Level?",
          answer: `
                <p>To increase your level :</p>
                <ol>
                    <li>
                        <p>Open your Profile</p>
                    </li>
                    <li>
                        <p>Click on either the “Orange Level button” below the profile picture, or on the “Edit Tags button” by scrolling down to your Tags box in your profile.</p>
                    </li>
                    <li>
                        <p>This will lead you to a screen where you see a lot of Levels.</p>
                    </li>
                    <li>
                        <p>Each Level has Multiple Categories</p>
                    </li>
                    <li>
                        <p>Answer any level to get a +1 Level Up</p>
                    </li>
                    <li>
                        <p>There is no order. You can answer whatever you like first.</p>
                    </li>
                </ol>
                <p>This is how you can Level Up till a maximum of Level 9.</p>
                `
        },
        {
          question: "Why should I increase my level? How does that help me?",
          answer: `
                <p>This is why you should increase your level :</p>
                <ol>
                    <li>
                        <p>What you seek is seeking you : A Higher level means More Tags Updated on your profile. This gives people a chance to approach you in more friendly and interactive ways possible to break the ice.</p>
                    </li>
                    <li>
                        <p>Higher Authenticity : The more your level, The more other people would want to be in touch with you because of your “Authentic” Profile</p>
                    </li>
                    <li>
                        <p>Higher Visibility : The more the level, The higher is your Visibility in the app and more people can see you.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How can I change my Tags?",
          answer: `
                <p>To change the Nature, Political Opinion, Animal Preference and Eating Habits :</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Go to Settings in the Top Right corner</p>
                    </li>
                    <li>
                        <p>Click on “Change you Answers”</p>
                    </li>
                    <li>
                        <p>When the popup comes, Select Yes.</p>
                    </li>
                </ol>
                <p>To change all the other Tags :</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Click on either the “Orange Level button” below the profile picture, or on the “Edit Tags button” by scrolling down to your Tags box in your profile.</p>
                    </li>
                    <li>
                        <p>This will lead you to a screen where you see a lot of Levels.</p>
                    </li>
                    <li>
                        <p>Each Level has Multiple Categories</p>
                    </li>
                    <li>
                        <p>Update the new tags and save the changes by clicking on the “Tick” icon in the bottom right.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How can I change my Top 5 Tags displayed to everyone?",
          answer: `
                <p>Datsme view displays your profile to everyone in 3 blocks :</p>
                <ol>
                    <li>
                        <p>First block - Profile Picture, Location, Age, College/Workplace</p>
                    </li>
                    <li>
                        <p>Second block - Bio and Compatibility</p>
                    </li>
                    <li>
                        <p>Third Block - Your 5 Tags</p>
                    </li>
                </ol>
                <p>By Default, The Top 5 tags are : Zodiac, Nature, Eating Habits, Political Inclination and Animal Preferences</p>
                <p>The power to change these top 5 tags is only given to our maximum level user i.e Level 9 User.</p>
                <p>Once you are a Level 9 User,</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Click on either the “Orange Level button” below the profile picture, or on the “Edit Tags button” by scrolling down to your Tags box in your profile.</p>
                    </li>
                    <li>
                        <p>In the topmost box, Click “Customize Tags”</p>
                    </li>
                    <li>
                        <p>From this screen, You can select your Top 5 Tags that would be visible to everyone.</p>
                    </li>
                </ol>
                `
        }
      ]
    },
    {
      key: "Profile and Account Settings",
      questions: [
        {
          question: "How can I edit my Profile?",
          answer: `
                <p>To Edit your Profile info, Open your Profile, Tap the “Edit Profile” (Pencil Icon) below your Profile Picture.</p>
                <p>Here, You can edit the following sections :</p>
                <ol>
                    <li>
                        <p>Profile Picture</p>
                    </li>
                    <li>
                        <p>Location</p>
                    </li>
                    <li>
                        <p>Working at</p>
                    </li>
                    <li>
                        <p>Studying at</p>
                    </li>
                    <li>
                        <p>Say Something about Yourself</p>
                    </li>
                </ol>
                <p>You are not allowed to edit the following sections :</p>
                <ol>
                    <li>
                        <p>Name</p>
                    </li>
                    <li>
                        <p>Date of Birth</p>
                    </li>
                    <li>
                        <p>Gender</p>
                    </li>
                </ol>
                <p>If you have any problem regarding these 3, Please delete your account and sign in again.</p>
                `
        },
        {
          question: "What all I can edit in my profile once I have created my account?",
          answer: `
                <p>You can edit the following sections :</p>
                <ol>
                    <li>
                        <p>Profile Picture</p>
                    </li>
                    <li>
                        <p>Location</p>
                    </li>
                    <li>
                        <p>Working at</p>
                    </li>
                    <li>
                        <p>Studying at</p>
                    </li>
                    <li>
                        <p>Say Something about Yourself</p>
                    </li>
                </ol>
                <p>You are not allowed to edit the following sections :</p>
                <ol>
                    <li>
                        <p>Name</p>
                    </li>
                    <li>
                        <p>Date of Birth</p>
                    </li>
                    <li>
                        <p>Gender</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How can I pause my account?",
          answer: `
                <p>To Pause your account :</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Go to Settings in the Top Right corner</p>
                    </li>
                    <li>
                        <p>Scroll down and Click on “Delete my Account”</p>
                    </li>
                    <li>
                        <p>When the popup comes, Select “Pause my Account” on the right side.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How can I delete my account?",
          answer: `
                <p>To Delete your account :</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Go to Settings in the Top Right corner</p>
                    </li>
                    <li>
                        <p>Scroll down and Click on “Delete my Account”</p>
                    </li>
                    <li>
                        <p>When the popup comes, Select “Yes, Delete It” on the left side.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How can I change my Profile picture in the app?",
          answer: `
                <ol>
                    <li>
                        <p>Open your Profile</p>
                    </li>
                    <li>
                        <p>Tap the “Edit Profile” (Pencil Icon) below your Profile Picture.</p>
                    </li>
                    <li>
                        <p>On your Profile Picture, You will see “Tap to Change”</p>
                    </li>
                    <li>
                        <p>Click anywhere on the Profile Picture</p>
                    </li>
                    <li>
                        <p>You can now choose from “Camera” or “Gallery” to change your profile picture.</p>
                    </li>
                    <li>
                        <p>Scroll Down and click on “Continue” to save your changes.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How can I change my workplace/educational institute in the app?",
          answer: `
                <ol>
                    <li>
                        <p>Open your Profile</p>
                    </li>
                    <li>
                        <p>Tap the “Edit Profile” (Pencil Icon) below your Profile Picture.</p>
                    </li>
                    <li>
                        <p>Scroll down to “I am currently” section</p>
                    </li>
                    <li>
                        <p>Select “Working” or “Studying”</p>
                    </li>
                    <li>
                        <p>You can edit your Workplace/Educational Institute here</p>
                    </li>
                    <li>
                        <p>Scroll Down and click on “Continue” to save your changes.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How can I change my location?",
          answer: `
                <ol>
                    <li>
                        <p>Open your Profile</p>
                    </li>
                    <li>
                        <p>Tap the “Edit Profile” (Pencil Icon) below your Profile Picture.</p>
                    </li>
                    <li>
                        <p>Scroll down to “Where do you Live?” section</p>
                    </li>
                    <li>
                        <p>Update your Location</p>
                    </li>
                    <li>
                        <p>Scroll down and click on “Continue” to save your changes.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How can I change my Gender?",
          answer: `
                <p>For now, Datsme does not allow you to change your Gender once you have created your account. You will have to Delete that account, and make a new one through a different means.</p>
                <p>To Delete your account :</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Go to Settings in the Top Right corner</p>
                    </li>
                    <li>
                        <p>Scroll down and Click on “Delete my Account”</p>
                    </li>
                    <li>
                        <p>When the popup comes, Select “Yes, Delete It” on the left side.</p>
                    </li>
                </ol>
                <p>When signing up again, Out of the three options - Facebook, Google and Mobile Number, Whatever method you used to sign up before deleting your account, You cannot use that now. Example : If you signed up using Mobile Number and you had to delete your name, You will now have to sign up using Facebook or Google</p>
                `
        },
        {
          question: "How can I change my name?",
          answer: `
                <p>For now, Datsme does not allow you to change your Name once you have created your account. You will have to Delete that account, and make a new one through a different means.</p>
                <p>To Delete your account :</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Go to Settings in the Top Right corner</p>
                    </li>
                    <li>
                        <p>Scroll down and Click on “Delete my Account”</p>
                    </li>
                    <li>
                        <p>When the popup comes, Select “Yes, Delete It” on the left side.</p>
                    </li>
                </ol>
                <p>When signing up again, Out of the three options - Facebook, Google and Mobile Number, Whatever method you used to sign up before deleting your account, You cannot use that now. Example : If you signed up using Mobile Number and you had to delete your name, You will now have to sign up using Facebook or Google</p>
                `
        },
        {
          question: "How can I change my status/bio?",
          answer: `
                <ol>
                    <li>
                        <p>Open your Profile</p>
                    </li>
                    <li>
                        <p>Tap the “Edit Profile” (Pencil Icon) below your Profile Picture.</p>
                    </li>
                    <li>
                        <p>Scroll down to “Describe Yourself” section</p>
                    </li>
                    <li>
                        <p>Update your Bio/Say Something about Yourself</p>
                    </li>
                    <li>
                        <p>Scroll down and click on “Continue” to save your changes.</p>
                    </li>
                </ol>
                `
        }
      ]
    },
    {
      key: "People and Friends",
      questions: [
        {
          question: "Can I search for a specific person in the app?",
          answer: `
                <p>Datsme was designed to help you find compatible friends around you, so currently we do not have the option to search for specific people.</p>
                <p>But how cool would it be to check your compatibility with people you already know?</p>
                <p>And how cool would it be to check the compatibility of your group?</p>
                <p>Amazing Features Incoming. Stay Tuned!</p>
                `
        },
        {
          question: "How can I add someone as a Friend?",
          answer: `
                <ol>
                    <li>
                        <p>You can explore new people either from Datsme View, Datsme Tag Search, Datsme location Search and Datsme Map Mode.</p>
                    </li>
                    <li>
                        <p>Click on their picture to open their profile.</p>
                    </li>
                    <li>
                        <p>On their Profile, You would see a circular floating button on the right side.</p>
                    </li>
                    <li>
                        <p>This button is the “Add Friend” button.</p>
                    </li>
                    <li>
                        <p>Click on this button to add someone as a Friend.</p>
                    </li>
                    <li>
                        <p>Once added as Friends, Open the last panel (Rightmost) in the Bottom bar of Datsme and click on “Friends List”</p>
                    </li>
                    <li>
                        <p>You can find your new friends there.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "Where do I see my Friends?",
          answer: `
                <ol>
                    <li>
                        <p>From the Bottom bar of Datsme, Open the 4th from Left (Rightmost) Icon</p>
                    </li>
                    <li>
                        <p>On Top, Click on “Friends List”</p>
                    </li>
                    <li>
                        <p>Here, You can see all your Friends</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How do I message someone?",
          answer: `
                <ol>
                    <li>
                        <p>To message someone, You need to add someone as your Friend.</p>
                    </li>
                    <li>
                        <p>Once added as Friend</p>
                    </li>
                    <li>
                        <p>Go to the 4th Icon from the Left (Rightmost) in the Datsme Bottom Bar</p>
                    </li>
                    <li>
                        <p>Open “Friends List”</p>
                    </li>
                    <li>
                        <p>Find the person you want to talk to and open their profile.</p>
                    </li>
                    <li>
                        <p>Click on the “Send Message” floating button on the right to send a message.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How do I report someone?",
          answer: `
                <p>To report someone :</p>
                <ol>
                    <li>
                        <p>Open their Profile</p>
                    </li>
                    <li>
                        <p>On the Top Right Corner, Click on the “3 dots” Icon</p>
                    </li>
                    <li>
                        <p>When Popup comes, Tap on “Report” Icon</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How do I block someone?",
          answer: `
                <p>To block someone :</p>
                <ol>
                    <li>
                        <p>Open their Profile</p>
                    </li>
                    <li>
                        <p>On the Top Right Corner, Click on the “3 dots” Icon</p>
                    </li>
                    <li>
                        <p>When Popup comes, Tap on “Block” Icon</p>
                    </li>
                </ol>
                `
        },
        {
          question: "How do I unblock someone?",
          answer: `
                <p>To unblock someone you have blocked earlier :</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Go to Settings in the Top Right corner</p>
                    </li>
                    <li>
                        <p>Scroll Down and click on “Block List”</p>
                    </li>
                    <li>
                        <p>Click “Unblock” in front of the name of the person you want to unblock.</p>
                    </li>
                </ol>
                `
        },
        {
          question: "Is the app only for Heterosexuals?",
          answer: `
                <p>Datsme is for everyone! Although we started with males and females only, Now you can select “Others” as your Gender while creating your account on the Datsme App.</p>
                <p>Everyone needs compatible friends who understand and uplift them right?</p>
                <p>This is what Datsme is all about. Download the Datsme App now.</p>
                `
        },
        {
          question: "How can I share the app with my friends?",
          answer: `
                <p>To share the app with your friends :</p>
                <ol>
                    <li>
                        <p>Go to your Profile</p>
                    </li>
                    <li>
                        <p>Go to Settings in the Top Right corner</p>
                    </li>
                    <li>
                        <p>Click on either the “Share button” or the “Illustration” and a popup will come</p>
                    </li>
                    <li>
                        <p>Select the means through which you want to share the app. Example : Whatsapp, Gmail etc</p>
                    </li>
                </ol>
                <p>This is how you can share the app with your friends.</p>
                `
        }
      ]
    }
  ];

  return (
    <main className="faq">
      <div className="faq__header">
        <div className="faq__header--heading">
          <img src="assets/faq-main.webp" alt="" />
          <div className="text">
            <h1>Frequently Asked Questions</h1>
            <p>Get answers to your most frequently asked questions</p>
          </div>
        </div>
        <div className="faq__header--content">
          <h2>Table Of Content</h2>
          <ul className="content--list">
            {faqData.map((item, index) => (
              <li key={index}>
                <a
                  className={`content--link ${item.key === activeKey ? 'content--link--active' : ''}`}
                  onClick={() => setActiveKey(item.key)}
                >
                  {item.key}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="faq__container">
        <h2>{activeKey}</h2>
        <div className="faq__section">
          <div className="faq__ques__section">
            {faqData.map((item, index) => (
              item.key === activeKey &&
              item.questions.map((question, qIndex) => (
                <div className="faq__item" key={qIndex}>
                  <div
                    className={`faq__item--head ${activeIndex.includes(qIndex) ? 'ques--active' : ''}`}
                    onClick={() => setActiveIndex([qIndex])}
                  >
                    <strong>
                      <p>{question.question}</p>
                    </strong>
                    <img className="down-arrow" src="assets/down-arrow.svg" alt="" />
                  </div>
                  <div
                    ref={(element) => (faqItemRef.current[qIndex] = element)}
                    style={{ maxHeight: activeIndex.includes(qIndex) ? itemHeights[qIndex] : '0' }}
                    className={`faq__item--body ${activeIndex.includes(qIndex) ? 'active ans--active' : ''}`}
                    dangerouslySetInnerHTML={{ __html: question.answer }}
                  ></div>
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;
