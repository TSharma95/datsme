import React, { useState, useRef, useEffect } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState([]);
    const [activeKey, setActiveKey] = useState('Login, Signup & Onboarding');
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

    useEffect(() => {
        // Scroll the active question into view after a delay of 300ms
        if (activeIndex.length > 0) {
            setTimeout(() => {
                const activeQuestionRef = faqItemRef.current[activeIndex[0]];
                if (activeQuestionRef) {
                    activeQuestionRef.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });
                }
            }, 100);
        }
    }, [activeIndex]);

    const faqData = [
        {
            key: "Login, Signup & Onboarding",
            questions: [
                {
                    question: "How can I log in/signup for the Datsme App?",
                    answer: `
                <p>
                    You can log in/signup onto the Datsme App using these 4 ways:
                </p>
                <p>
                    <strong>A. Signing up through Mobile Number</strong>
                </p>
                <p>
                    Step 1: Enter your mobile number.<br />
                    Step 2: Complete the OTP verification.<br />
                    Step 3: Enter OTP and proceed to account creation.
                </p>
                <p>
                    <strong>B. Signing up through Google</strong>
                </p>
                <p>
                    Step 1: Click on the Google icon to sign up using Google.<br />
                    Step 2: Upon clicking the Google icon, A list of all the Google email IDs would appear. Please select the account through which you would like to sign up.<br />
                    Step 3: Proceed to account creation.
                </p>
                <p>
                    <strong>C. Signing up through Facebook</strong>
                </p>
                <p>
                    Step 1: Click on the Facebook icon to sign up using Facebook.<br />
                    Step 2: You will be redirected to Facebook and asked to enter your Facebook login details.<br />
                    Step 3: Login through Facebook to complete the signup process.
                </p>
                <p>
                    <strong>D. Signing up through Apple</strong>
                </p>
                <p>
                    Step 1: Click on the “Sign in with Apple” button.<br />
                    Step 2: Click on “Continue”.<br />
                    Step 3: After Face ID verification, You can proceed to account creation.
                </p>
                `
                },
                {
                    question: "What is required for creating a Datsme account?",
                    answer: `
                    <p>
                        To create a Datsme account, 2 things are required:
                    </p>
                    <p>
                        A. Full Name: You have to enter your full name within 30 characters
                    </p>
                    <p>
                        B. Username: You have to select a unique username for your Datsme account. The constraints for the username are as follows:
                    </p>
                    <p>
                        - The minimum username character limit is 3 characters.<br />
                        - The maximum username character limit is 30 characters.<br />
                        - The username should be unique.<br />
                        - The username can contain letters (a-z), numbers (0-9), and periods(.)<br />
                        - You cannot include symbols or other punctuation marks as a part of your username.<br />
                    </p>
                `
                },
                {
                    question: "What are “Goals” in the Datsme App?",
                    answer: `
                <p>Datsme is a social health app to help people develop meaningful connections.
                Goals are different dimensions/areas of your social health you can work on to become a better friend!</p>
                <p>There are 5 different goals you can choose from:</p>
                <p>
                    A. Feel more positivity in my friendships 
                    B. Build new friendships
                    C. Develop deeper friendships
                    D. Protect my friendships from challenges
                    E. Practice advanced friendship strategies
                </p>
                <p>In step 1, You will be asked to select up to 3 goals from the above-mentioned.
                In step 2, You will be asked to select your top priority.</p>
                <p>Based on your inputs, Your Datsme experience will be personalized.</p>
                `
                }
            ]
        },
        {
            key: "About the “Learn” section",
            questions: [
                {
                    question: "What is the purpose of “How are you feeling today”?",
                    answer: `
                <p>
                This section is like a Daily Mood Tracker that tracks your mood on a weekly and monthly basis.
                </p>
                <p>
                There are 5 different moods that you can select from. The goal is to help you identify and track your emotions.
                </p>
                <p>The app analyzes your mood to give you mood improvement insights like “You felt X% better than the previous month”</p>
                `
                },
                {
                    question: "What is “Streak” in the Datsme app?",
                    answer: `
                <p>
                If you can measure it, You can improve it!
                </p>
                <p>
                Your streak shows how committed you are to building better friendships. The higher the streak, the more consistent you are.
                </p>
                <p><strong>The streak feature tracks:</strong></p>
                <p><strong>A. Days in the app</strong> - The total number of days you have logged in on the Datsme App in the current year.</p>
                <p><strong>B. Perfect weeks</strong> - A streak of 7 means 1 perfect week! Whenever you complete a streak of 7, +1 will be added to your perfect week counter.</p>
                <p><strong>C. Weekly login reports</strong> - All the days you’ve logged in (7 days - from Sunday to Saturday) will be represented by a green dot below the date. The current date is highlighted in a green circle as well.</p>
                `
                },
                {
                    question: "What is “Level” in the Datsme app? How many levels are there in total?",
                    answer: `
                    <p>Your level is based on your engagement in our community and your commitment to growth! Level 10 is the highest credibility and visibility.</p>
                    <p>Every user starts as Level 1 and can go to a maximum of Level 10. The levels are -</p>
                    <p>
                    <strong>Level 1 - </strong>Bronze Level 1<br />
                    <strong>Level 2 - </strong>Bronze Level 2<br />
                    <strong>Level 3 - </strong>Silver Level 1<br />
                    <strong>Level 4 - </strong>Silver Level 2<br />
                    <strong>Level 5 - </strong>Gold Level 1<br />
                    <strong>Level 6 - </strong>Gold Level 2<br />
                    <strong>Level 7 - </strong>Platinum Level 1<br />
                    <strong>Level 8 - </strong>Platinum Level 2<br />
                    <strong>Level 9 - </strong>Luxury Level 1<br />
                    <strong>Level 10 - </strong>Luxury Level 2
                    </p>
                `
                },
                {
                    question: "How can I level up on the Datsme app?",
                    answer: `
                    <p>You can level up on the datsme app by completing the following in-app goals and activities -</p>
                    <p>
                    <strong>+1 Level - </strong>Activate your social profile and complete the Twelve Rings test.<br />
                    <strong>+1 Level - </strong>Add 5 contacts in the connection management interface (Manage section in the app).<br />
                    <strong>+1 Level - </strong>Add 20 contacts in the connection management interface (Manage section in the app).<br />
                    <strong>+1 Level - </strong>Complete 5 expert sessions.<br />
                    <strong>+1 Level - </strong>Complete 12 expert sessions.<br />
                    <strong>+1 Level - </strong>Complete 25 expert sessions.<br />
                    <strong>+1 Level - </strong>Complete 50 expert sessions.<br />
                    <strong>+1 Level - </strong>Update 3 out of 4 tags categories (Choose your favorite tags from Movies, TV Series, Games, and Anime).<br />
                    <strong>+1 Level - </strong>Update 3 out of 5 tags categories (Choose your favorite tags from Hobbies & Interests, Things I like to talk about, Sports & Activities, Preferred Weekend Activity, and Language).<br />
                    <strong>+1 Level - </strong>Luxury Level 2
                    </p>
                    <p>Every user starts as Level 1 and can go to a maximum of Level 10.</p>
                `
                },
                {
                    question: "Why should I “level up” on the Datsme App?",
                    answer: `
                <p>
                Your level is based on your engagement in our community and your commitment to growth! Level 10 is the highest credibility and visibility.
                </p>
                <p>
                If you have a higher level on the Datsme app, Your social visibility is increased, and your chances of getting discovered by possible meaningful connections increase!
                </p>
                `
                },
                {
                    question: "What is “Progress” on the Datsme app?",
                    answer: `
                <p>
                Your progress reveals how far along you are in expert sessions. There are currently 80+ sessions on the Datsme app and your progress is calculated based on the number of sessions you have completed.
                </p>
                <p>
                Take the sessions and self-reflect for greater progress!
                </p>
                `
                },
                {
                    question: "What is “Activity” on the Datsme app?",
                    answer: `
                <p>
                Your activity tracks how much time you've spent learning from the expert sessions on how to become a better friend.
                </p>
                `
                },
                {
                    question: "What is “Recommended Chapters” section in the Datsme app?",
                    answer: `
                <p>
                The Datsme app offers more than 80 audio sessions developed by our co-founder and world-leading friendship expert - Shasta Nelson, based on her years of expertise and research.
                </p>
                <p><strong>All sessions are divided into 7 chapters.</strong></p>
                <p>
                <strong>Chapter 1 - </strong>How friendships are made (12 Sessions)<br />
                <strong>Chapter 2 - </strong>Tips for meeting new friends (9 Sessions)<br />
                <strong>Chapter 3 - </strong>Commit to Consistency (12 Sessions)<br />
                <strong>Chapter 4 - </strong>Add tons of Positivity (12 Sessions)<br />
                <strong>Chapter 5 - </strong>Increasing Vulnerability (12 Sessions)<br />
                <strong>Chapter 6 - </strong>The 5 Friendship Threats (13 Sessions)<br />
                <strong>Chapter 7 - </strong>Advanced Friendship Strategies (11 Sessions)
                </p>
                <p>The last 3 chapters from which you have taken sessions will be displayed under the section “Recommended Chapters”.</p>
                `
                },
                {
                    question: "What are “Chapters” on the Datsme app?",
                    answer: `
                <p>
                The Datsme app offers more than 80 audio sessions developed by our co-founder and world-leading friendship expert - Shasta Nelson, based on her years of expertise and research.
                </p>
                <p>All sessions are divided into 7 chapters.</p>
                <p>
                <strong>Chapter 1 - </strong>How friendships are made (12 Sessions)<br />
                <strong>Chapter 2 - </strong>Tips for meeting new friends (9 Sessions)<br />
                <strong>Chapter 3 - </strong>Commit to Consistency (12 Sessions)<br />
                <strong>Chapter 4 - </strong>Add tons of Positivity (12 Sessions)<br />
                <strong>Chapter 5 - </strong>Increasing Vulnerability (12 Sessions)<br />
                <strong>Chapter 6 - </strong>The 5 Friendship Threats (13 Sessions)<br />
                <strong>Chapter 7 - </strong>Advanced Friendship Strategies (11 Sessions)
                </p>
                `
                },
                {
                    question: "What is the “Positivity” and “Positivity Analysis”?",
                    answer: `
                <p>Positivity, the actions that leave others feeling pleasant emotions is the 1st requirement to all healthy friendships because it’s why everyone wants friends: we want to feel happier.</p>
                <p>We gravitate to people who leave us feeling happier because we enjoy each other, make each other laugh, and feel affirmed. We feel closer to people who we know like us and with whom we don’t feel judged.</p>
                <p>The Positivity Analysis is a self-assessment framework developed by Shasta Nelson (Global Friendship Expert & Co-Founder of Datsme) to assess and improve your positivity dimension.</p>
                <p>Based on the results of your assessment, We also give you custom tips so that you can improve your positivity dimension.</p>
                `
                },
                {
                    question: "What is “Consistency” and “Consistency Analysis”?",
                    answer: `
                <p>Consistency, the regular time we spend together sharing experiences and interacting, is the 2nd Requirement to all healthy relationships because it’s what builds friendship. Without time together, we won’t have the opportunity to get to know each other and enjoy each other.</p>
                <p>We feel closest to people whom we’ve spent the most time with because our shared history leaves us feeling more comfortable and safe as we better know what to expect. </p>
                <p>The Consistency Analysis is a self-assessment framework developed by Shasta Nelson (Global Friendship Expert & Co-Founder of Datsme) to assess and improve your consistency dimension.</p>
                <p>Based on the results of your assessment, We also give you custom tips so that you can improve your consistency dimension.</p>
                `
                },
                {
                    question: "What is “Vulnerability” and “Vulnerability Analysis”?",
                    answer: `
                <p>Vulnerability, the way we share who we are with each other, is the 3rd Requirement to all healthy relationships because it’s how a friendship develops closeness. When we spend time with someone (consistency) and enjoy each other (positivity) then we get to know each other as we incrementally reveal our opinions, personality, ideas, thoughts, and needs with each other.</p>
                <p>The Vulnerability Analysis is a self-assessment framework developed by Shasta Nelson (Global Friendship Expert & Co-Founder of Datsme) to assess and improve your vulnerability dimension.</p>
                <p>Based on the results of your assessment, We also give you custom tips so that you can improve your vulnerability dimension.</p>
                `
                },
                {
                    question: "What is the Frientimacy Profile?",
                    answer: `
                <p>When we look at the science of social wellness - whether it’s looking at how people create bonds, or whom they call a best friend, or what builds trust, or what makes up the perfect team - we always see the same 3 non-negotiables: Positivity, Consistency & Vulnerability.</p>
                <p>Like a formula, a healthy bond must have all three: Positivity (P), Consistency (C), and Vulnerability (V).</p>
                <p>The Frientimacy Profile is an introspective framework engineered to assess our 3 Bonding Dimensions of P, C, and V through the Frientimacy quiz.</p>
                <p>The Frientimacy Profile will spark the self-awareness that will inform you how you can most strategically foster more meaningful connections in your life.</p>
                <p>Based on the results of your assessment, We also give you custom tips so that you can improve your Frientimacy profile (made up of P, C, and V). We hope you develop better friendships with Datsme!</p>
                `
                }
            ]
        },
        {
            key: "About the “Connect” section",
            questions: [
                {
                    question: "How can I create my social profile on Datsme?",
                    answer: `
                <p><strong>How can I create my social profile on Datsme?</strong></p>
                <p><strong>Step 1 - </strong>Create your account by entering the following details:</p>
                <p>
                    A. Full Name<br />
                    B. Hometown<br />
                    C. Profession & Occupation<br />
                    D. Company<br />
                    E. 3 things I love to discuss
                </p>
                <p><strong>Step 2 - </strong>Upload at least 2 pictures to the profile.</p>
                <p><strong>Step 3 - </strong>Take the Twelve Rings Test.</p>
                <p>The Twelve Rings Test is a proven framework that reveals which of the 12 Datsme Rings is your primary bonding style.</p>
                <p>The Twelve Rings of Datsme Social :</p>
                <p>
                    (1) The Innovators<br />
                    (2) The Pragmatics<br />
                    (3) The Benevolents<br />
                    (4) The Altruistics<br />
                    (5) The Allegiants<br />
                    (6) The Socialites<br />
                    (7) The Visionaries<br />
                    (8) The Intellectuals<br />
                    (9) The Pioneers<br />
                    (10) The Valiants<br />
                    (11) The Futurists<br />
                    (12) The Mavericks
                </p>
                <p>Once step 3 is complete, We connect you with the most meaningful people based on your bonding style!</p>
                `
                },
                {
                    question: "Is it important for me to turn on the notifications in the Datsme App?",
                    answer: `
                <p>Turning on notifications will only enhance your overall app experience.
                Datsme App never bothers you with irrelevant updates.</p>
                <p>It just notifies you regarding what’s important like:</p>
                <p><strong>A. Connection requests received -</strong></p>
                <p>Datsme is home to mindful individuals looking for meaningful connections. If someone tries to reach you, You will see a connection request notification in this section.</p>
                <p><strong>B. Connection requests accepted -</strong></p>
                <p>You can send connection requests to potential connects by clicking the “Add Friend” button (leftmost bottom of the connect section)</p>
                <p>Once a connection request is accepted, We notify you about the same.</p>
                <p><strong>C. Birthday notifications -</strong></p>
                <p>Birthdays are special, and we make sure that you never forget a friend’s birthday again by notifying you.</p>
                <p><strong>D. Important updates that you might be interested in -</strong></p>
                <p>We inform you about some important updates like product upgrades, new features, and the features you may have missed out on in the app</p>
                <p>You may access the notifications section by clicking on the bell icon on the top right corner of the “Connect” section.</p>
                <p>In a nutshell, Turning on notifications is not mandatory but it is highly recommended.</p>
                `
                },
                {
                    question: "How can I access my messages or chats?",
                    answer: `
                <p>You may see the messages that you received or your chats by clicking on the “Message Button” in the top right corner of the connection screen.</p>
                <p>All your chats with your connections are accessible through this section only. You may also start a new chat by visiting the connection section and choosing the person you want to talk to.</p>
                `
                },
                {
                    question: "Why do I see my message box empty?",
                    answer: `
                <p>You can only talk to people in this section who already are your “Connections” on the Datsme app.</p>
                <p>Once you have accepted someone’s connection request or once your connection request has been accepted by someone, They are added as a connection.</p>
                <p>You may tap on their profile under the “Connection” tab, and start a chat with them.</p>
                <p>Please note that you can only talk to someone after they are added as a connection. If you wish to talk to someone before adding them as a connection, You may use the “Message Request” feature.</p>
                `
                },
                {
                    question: "Can I send emojis/images/videos using the chat feature on the Datsme App?",
                    answer: `
                <p>Yes, You will be able to share emojis, GIFs, and images with your connections to enhance your overall conversation.</p>
                <p>Considering the fair use policy, sharing videos through the Datsme App is not allowed at the moment.</p>
                <p>We highly recommend that you send in the chats (either images or GIFs) to be non-explicit to keep up with the community guidelines.</p>
                <p>Any such image/GIFs reported may lead to a permanent ban from the platform.</p>
                `
                },
                {
                    question: "What are “Message Requests'' on the Datsme app? How can I access this feature on the Datsme app?",
                    answer: `
                <p>Message Requests is a special feature of Datsme wherein you can choose to talk to a person before adding them as a connection.</p>
                <p>Message Requests is a premium feature and can only be accessed through a “Datsme Spark” subscription.</p>
                <p>If you are a premium user with a Datsme Spark subscription, You may send up to 5 message requests every day.</p>
                <p>Non-premium users will only be able to send a message to someone after their connection request has been accepted.</p>
                <p>However, A non-premium user will be able to see a message request sent to them by a premium user in the message request section.</p>
                <p>You may access this section by first clicking on the “Message Icon” on the top right corner of the “Connect” section, and then clicking on the top right icon (Gold DM Icon) to see the messages requests you have sent or the message requests you have received.</p>
                <p>Note: Unresponded message requests will automatically vanish after 15 days from the time they were sent.</p>
                `
                },
                {
                    question: "How do I add a new connection on the Datsme App/How can I send connection requests?",
                    answer: `
                <p>You may send a connection request by clicking on the “Add Connection” icon in the bottom left corner of the Connect section.</p>
                <p>For a premium user, The number of connection requests per day is unlimited, while non-premium users may only send up to 2 connection requests per day.</p>
                <p>The algorithm of the Datsme app fetches the most relevant profiles for you and you may choose to switch between different profiles before sending them a connection request by tapping on the “Next” or “Previous” icons on the bottom right corner of the “Connect” section.</p>
                `
                },
                {
                    question: "I saw an inappropriate image as a profile photo. How do I block/report this person?",
                    answer: `
                <p>The Datsme community follows strict guidelines for explicit/obscene content and we highly recommend that users report any such inappropriate/fake profile to keep the community clean.</p>
                <p>You can report/block such profiles by tapping on the 3 dots present at the top right corner of the profile picture.</p>
                <p>Blocking a profile means that this profile will never be shown to you (or will be permanently blocked) in the connect section.</p>
                <p>If you choose to report a profile, Please select the appropriate category i.e.</p>
                <p>
                <strong>A. Fake</strong><br />
                <strong>B. Inappropriate Content (Nudity, Sexual Content, Violence, Hate Speech, Harassment, Other)</strong><br />
                <strong>C. Scam</strong><br />
                </p>
                <p>Reporting a user profile will not lead to its automatic block. Please make sure that you also block this profile after reporting it.</p>
                <p>Team Datsme will take strict action against the said profile if found malicious.</p>
                `
                },
                {
                    question: "What is the “View Synergy Report” I see on a profile in the Connect section?",
                    answer: `
                <p>Each user of Datsme has a unique bonding style and we have categorized these bonding styles into 12 Datsme Rings.</p>
                <p>By tapping on the “View Synergy Report” button, You may get an insight into their social ring and learn more about their bonding style.</p>
                <p>You can also see the commonalities between yourself and this connection on topics such as:</p>
                <p>
                A. Preferred social activities<br />
                B. Ideal topics of conversation<br />
                C. Preferred way of communication<br />
                D. Weekly availability schedule<br />
                E. Other shared similarities
                </p>
                <p>You may use these insights to explore a possible meaningful connection before sending them a connection request.</p>
                `
                },
                {
                    question: "What is the purpose of the “Interests” tab in the “Connect” section?",
                    answer: `
                <p>You may see 2 different tabs on a profile:</p>
                <p>
                A. 3 Things I love to discuss<br />
                B. My Interests
                </p>
                <p>These are specially curated sections answered by each individual themselves. The purpose of this section is to give the users a better insight into the hobbies/interests of a connection to explore the possibility of future synergy.</p>
                <p>Based on these insights, A user would be able to decide whether or not to send a connection request to this user.</p>
                <p>These tags may also serve as an icebreaker while initiating a conversation after a connection has been established.</p>
                `
                }
            ]
        },
        {
            key: "About the “Manage” section",
            questions: [
                {
                    question: "How can I manage my connections on Datsme?",
                    answer: `
                <p>The Connection Management system of Datsme has been designed to manage the Top 30 people in your life.</p>
                <p>Other than the people you stay in touch with on a day-to-day basis, You can add connections in this section that you want to stay in touch with.</p>
                <p>This includes your school friends, college friends, friends near your home, friends who have switched jobs, residences, family members, cousins, business connections, investors, workplace friends from previous jobs, etc.</p>
                <p><strong>Step 1</strong>: Add a connection manually or import contacts through your contacts list.</p>
                <p>If you add a connection manually, You have to provide details such as the connection’s name, birthday, the category you want to assign them to, tags, and the frequency you want to stay in touch with them (Once a week, Once every 2 weeks, etc).</p>
                <p>If you are importing connections through your phone contact list, You need to first give access to Datsme to fetch contact names. Once done, Select the connections you want to import by clicking on the “Add” button and selecting the category you want to assign them to. In the next step, Select the frequency you want to stay in touch with them by clicking on “Schedule”. Hit “Save” to get started!</p>
                <p><strong>Step 2</strong>: Get weekly reminders.</p>
                <p>You will now find all your added connections in different categories under the “Organize” tab.</p>
                <p>Click on the “Schedule” tab and under the Events section, You will find a list of people that you should get in touch with for the following week! You’ll get a reminder every Monday that your weekly list is ready. There will be a follow-up reminder on Saturdays to make sure you are maintaining a healthy social circle.</p>
                <p>It is highly recommended that you enable push notifications on the app to get the best experience.</p>
                <p>As a free user, You can manage 7 connections through the Datsme Manage feature.</p>
                <p>As a premium user (Datsme Sync), You can manage up to 30 connections through the Datsme Manage feature.</p>
                <p>For more help, Click on the bulb icon on the top right corner of your screen in the “Manage” section!</p>
                `
                },
                {
                    question: "What is the progress/milestone dashboard in the “Manage” section?",
                    answer: `
                <p>The progress or milestones section is designed to help you set up and get started with the connection management system.</p>
                <p><strong>It has 3 milestones:</strong></p>
                <p><strong>Milestone 1</strong> - Import Contacts - The goal is to import 5 connections from your phone contacts.</p>
                <p><strong>Milestone 2</strong> - Set Frequency - The goal is to set a frequency with 5 connections that you want to stay in touch with.</p>
                <p><strong>Milestone 3</strong> - Add Birthday - The goal is to add the birthdays of 5 of your connections so that the Datsme app reminds you about their birthday.</p>
                <p>This feature helps you to add missing birthdays, tags, and connection stay-in-touch frequencies!</p>
                `
                },
                {
                    question: "What is the purpose of the connection dashboard in the “Manage” section?",
                    answer: `
                <p>The connection dashboard tracks:</p>
                <p>
                    A. Overall circle health - Making sure you are maintaining healthy connections and staying in touch with the people who matter to you.<br />
                    B. The total number of connections.<br />
                    C. Connections in Group 1 (By default as “Inner Circle”).<br />
                    D. Connections in Group 2 (By default as “Second Circle”).<br />
                    E. Connections in Group 3 (By default as “Third Circle”).<br />
                    F. Connections in Group 4 (If a new category has been created).<br />
                    G. Connections in Group 5 (If a new category has been created).<br />
                    H. It enables you to add a connection.<br />
                    I. It also enables you to import connections from your phone’s contacts list.
                </p>
                `
                },
                {
                    question: "What is “Add a Connection” in the Manage section of the Datsme app? How can I add connections in the app?",
                    answer: `
                <p>This feature helps you add a contact/connection to the manage section so that you can track this bond and maintain positive bond health with the person.</p>
                <p>If you add a connection, You have to provide details while adding them such as:</p>
                <p>
                    A. Connection’s name.<br />
                    B. Birthday.<br />
                    C. Category you want to assign them to.<br />
                    D. Tags (Friends, Family, School, College, Network, Services, Colleagues, etc).<br />
                    E. Frequency you want to stay in touch with them (Once a week, Once every 2 weeks, Once in 3 weeks, etc).
                </p>
                <p>Click “Save” to successfully add the connection to your connection management system at Datsme.</p>
                <p>You can add a connection by:</p>
                <p>
                    A. Clicking on “Add a connection” from the connection dashboard under the “Organize” tab.<br />
                    B. Clicking on “+” and then click on “Add new contact”.<br />
                    C. Scrolling down to “My Connections”, Opening any category by clicking the drop-down icon and then clicking on “Add a Connection”.
                </p>
                `
                },
                {
                    question: "What is “Import Contacts'' in the Manage section of the Datsme app? How can I import connections in the app?",
                    answer: `
                <p>This feature helps you to import a lot of connections to the Datsme Manage section in a single go.</p>
                <p>If you are importing connections through your phone contact list, You need to first give access to Datsme to fetch contact names. Once done, Select the connections you want to import by clicking on the “Add” button and selecting the category you want to assign them to. In the next step, Select the frequency you want to stay in touch with them by clicking on “Schedule”. Hit “Save” to get started!</p>
                <p>You can import connections by:</p>
                <p>
                    A. Clicking on “Import Connections” from the connection dashboard under the “Organize” tab.<br />
                    B. Clicking on “+” and then clicking on “Import from contacts”.
                </p>
                `
                },
                {
                    question: "How many categories can I add connections to? How can I create a new category?",
                    answer: `
                <p>You have 3 categories by default to which you can add connections:</p>
                <p>
                    <strong>A. Inner Circle</strong><br />
                    <strong>B. Second Circle</strong><br />
                    <strong>C. Third Circle</strong>
                </p>
                <p>You can edit the name of the above categories by clicking on the drop-down icon in front of the category and then clicking on the pencil icon.</p>
                <p>You can add a total of 5 Categories. To add a new category, Click on the “+” icon and then click on “Create new category”. Enter the name of your new category and click “Save”. You will now find your new category under the “My Connections” section.</p>
                `
                },
                {
                    question: "How can I “sort by” connections in the manage section?",
                    answer: `
                <p>You can sort connections by clicking on the “Filter” button on the right side of the search bar under the “My Connections” tab.</p>
                <p>You can sort all your connections based on:</p>
                <p><strong>A. Sort by Priority (Default)</strong></p>
                <p>By default, All your connections can be added into 3 categories - Inner Circle, Second Circle, and Third Circle. This is based on Priority. You can create 2 more categories as Fourth Circle and Fifth Circle to maintain your order of priority. You can also rename all your categories based on convenience (Example: School friends, College friends, Work friends, Family & Relatives, and Business Connections)</p>
                <p><strong>B. Sort by Bond Health</strong></p>
                <p>All your connection cards under the categories can be 1 of the 4 colors.</p>
                <p>- Blue (If you have not added how often you want to stay in touch i.e. frequency with that particular connection, Their connection card will be displayed as Blue).</p>
                <p>- Red (If it has been a long time since you were supposed to get in touch with the connection but didn’t, the connection card will be displayed as Red).</p>
                <p>- Yellow (If it has been a little time since you were supposed to get in touch with the connection but didn’t, the connection card will be displayed as Yellow).</p>
                <p>- Green (If you are perfectly staying in touch with a connection based on the frequency you set, The connection card will be displayed as Green).</p>
                <p><strong>C. Sort by Birthday</strong></p>
                <p>This is based on recency. The connections who have their birthdays coming soon will be shown on top of the list, and vice versa.</p>
                <p><strong>D. Sort by Name</strong></p>
                <p>This follows Alphabetical order.</p>
                <p><strong>E. Sort by Tags</strong></p>
                <p>Whenever you add a connection, You have to assign tags to that connection like Friends, Family, School, College, Network, Services, and Colleagues.
                You can sort out all the connections belonging to a particular tag by sorting through this feature!</p>
                `
                },
                {
                    question: "Why are the connection cards colored? What does it mean?",
                    answer: `
                <p>All your connection cards in the “Organize” tab are colored. Every connection card can be 1 of the 4 colors and they mean the following:</p>
                <p>- Blue (If you have not added how often you want to stay in touch i.e. frequency with that particular connection, Their connection card will be displayed as Blue).</p>
                <p>- Red (If it has been a long time since you were supposed to get in touch with the connection but didn’t, the connection card will be displayed as Red).</p>
                <p>- Yellow (If it has been a little time since you were supposed to get in touch with the connection but didn’t, the connection card will be displayed as Yellow).</p>
                <p>-Green (If you are perfectly staying in touch with a connection based on the frequency you set, The connection card will be displayed as Green).</p>
                `
                },
                {
                    question: "How can I change the tags assigned to a connection?",
                    answer: `
                <p>To change the tags assigned to a connection,</p>
                <p>
                    A. Click on the connection card.<br />
                    B. This will open the connection profile.<br />
                    C. Scroll down to the tags section.<br />
                    D. Select/Deselect tags you want to add/remove to update tags for that connection.<br />
                    E. Click on “Save” on the top right section of your screen for the changes to take effect.
                </p>
                `
                },
                {
                    question: "How can I change the stay-in-touch frequency of a connection?",
                    answer: `
                <p>To change the stay-in-touch frequency of a connection,</p>
                <p>
                    A. Click on the connection card.<br />
                    B. This will open the connection profile.<br />
                    C. Scroll down to the frequency section.<br />
                    D. Click on the new frequency you want to assign to the connection.<br />
                    E. Click on “Save” on the top right section of your screen for the changes to take effect.
                </p>
                `
                },
                {
                    question: "How can I change the Birthday of a connection?",
                    answer: `
                <p>To change the birthday of a connection,</p>
                <p>
                    A. Click on the connection card.<br />
                    B. This will open the connection profile.<br />
                    C. Click on the Edit Pencil icon above the name of the connection.<br />
                    D. When the bottom sheet opens, Tap on birthday.<br />
                    E. Select the new birthday.<br />
                    F. Click on “Save” on the bottom sheet.<br />
                    G. Click on “Save” on Edit Connection screen.
                </p>
                `
                },
                {
                    question: "How can I change the Category of a connection?",
                    answer: `
                <p>To change the tags assigned to a connection,</p>
                <p>
                    A. Click on the connection card.<br />
                    B. This will open the connection profile.<br />
                    C. Find the section “Select a category to add this connection to”.<br />
                    D. Click on the category that is added already (in black).<br />
                    E. Select the new category from the drop-down list.<br />
                    F. Click on “Save” on the top right section of your screen for the changes to take effect.
                </p>
                `
                },
                {
                    question: "What is the “Add Notes” feature when I click on a connection card?",
                    answer: `
                <p>This section is designed to give you a consecrated space to store all the important information about a connection.</p>
                <p><strong>Example</strong>: Married to Lena, 2 Kids - Alex and Daisy, Dog Name - Chester, Works at Company & Co.</p>
                <p>You can store notes for all your connections making a note of all the things of value and importance!</p>
                `
                },
                {
                    question: "What is the “Add Reminder” feature when I click on a connection card?",
                    answer: `
                <p>This section is designed to give you guided reminders. This works like an alarm with a text reminder. </p>
                <p>You can use this feature whenever you want to get reminders on your device for your connections.</p>
                <p><strong>Example</strong>: Check up on Dave after his doctor’s appointment, Call Rena to make sure she has landed safely after her flight, etc.</p>
                <p>It is recommended that you should turn on your push notifications for the best experience on the Datsme app.</p>
                `
                },
                {
                    question: "Can I update a picture of a connection in the “Manage” section?",
                    answer: `
                <p>Yes, You can update the connection card picture by following these steps:</p>
                <p>
                    A. Click on the connection card.<br />
                    B. This will open the connection profile.<br />
                    C. Click on the Edit Pencil icon above the name of the connection.<br />
                    D. When the bottom sheet opens, Tap on the circular upload icon.<br />
                    E. Click on “Upload Image”.<br />
                    F. Select a picture from your phone gallery.<br />
                    G. Once uploaded, Click on “Save” on the bottom sheet.<br />
                    H. Click on “Save” on Edit Connection screen.
                </p>
                `
                },
                {
                    question: "What is the “Reset” feature in the connection management system? How can I reset the system?",
                    answer: `
                <p>When many of your connection cards have gone “Red” because you were not able to get in touch with them, You can use the reset feature.</p>
                <p>The reset feature sets all your connection cards to green, so it is like a fresh start!</p>
                <p>To reset the system:</p>
                <p>
                    A. Go to the “Schedule” tab in connection management<br />
                    B. Click on the 3 dots on the right side of “Events”<br />
                    C. From the drop-down options, Select “Reset”<br />
                    D. Confirm that you want to reset by clicking on “Reset all connections”<br />
                    E. Voila! All your connections are now reset.
                </p>
                `
                },
                {
                    question: "What is the “Snooze” feature in the connection management system? How can I snooze the system?",
                    answer: `
                <p>It is sometimes hard to stay in touch with all your connections, or you may just need some space or time off everyone and everything. For times like these, you can snooze the system.</p>
                <p>If you snooze for 7 days, It means that the connections you had to get in touch with today will be shifted 7 days in the future.</p>
                <p>This feature offers you the flexibility to take care of your social life at your own pace!</p>
                <p>To snooze the system:</p>
                <p>
                    A. Go to the “Schedule” tab in connection management<br />
                    B. Click on the 3 dots on the right side of “Events”<br />
                    C. From the drop-down options, Select “Snooze”<br />
                    D. Click on “Set Snooze”<br />
                    E. Select the snooze duration<br />
                    F Click “Save” on the bottom sheet<br />
                    E. Voila! All your connections have now been snoozed
                </p>
                <p>You will now find the message “Snoozed for 7 days” under the Events section.
                To remove the snooze, Click on the “Stop Snooze” button to end the snooze.</p>
                `
                }
            ]
        },
        {
            key: "Profile & Settings",
            questions: [
                {
                    question: "How can I reset my session journey on the Datsme App?",
                    answer: `
                    <p>To reset your session journey,</p>
                    <p>
                        A. Click the fourth icon (from the left) in the bottom bar of Datsme app).<br />
                        B. On the top right section of the screen, Click on the “Settings” icon.<br />
                        C. Under the “Learn” section settings, Click the second option which says “Reset your session journey”.<br />
                        D. Click on “Reset Psychological progress” to confirm.
                    </p>
                    <p>Your session progress is now reset successfully!</p>
                `
                },
                {
                    question: "Can I answer the Twelve Rings Test/Questionnaire on the Datsme app again?",
                    answer: `
                    <p>Yes, You can retake the Twelve Rings Test by following these steps:</p>
                    <p>
                        A. Click the fourth icon (from the left) in the bottom bar of the Datsme app).<br />
                        B. On the top right section of the screen, Click on the “Settings” icon.<br />
                        C. Under the “Learn” section settings, Click the second option which says “Retake: The Twelve Rings Test”.
                    </p>
                    <p>Slide to start the test!</p>
                `
                },
                {
                    question: "How can I pause my account on Datsme?",
                    answer: `
                    <p>You can pause your Datsme account by following these steps:</p>
                    <p>
                        A. Click the fourth icon (from the left) in the bottom bar of the Datsme app)<br />
                        B. On the top right section of the screen, Click on the “Settings” icon<br />
                        C. Under the “Learn” section settings, Click the third option which says “Pause your Datsme account”<br />
                        D. Once a popup comes, Click on “Yes, Pause account”
                    </p>
                    <p>This will pause your Datsme account!</p>
                `
                },
                {
                    question: "What if I want to hide my social profile from the Datsme app, and just want to focus on learning?",
                    answer: `
                    <p>Datsme allows you to turn off your social profile visibility. Follow these steps:</p>
                    <p>
                        A. Click the fourth icon (from the left) in the bottom bar of the Datsme app).<br />
                        B. On the top right section of the screen, Click on the “Settings” icon.<br />
                        C. Under the “Connect” section settings, The Social Profile button must be turned on.<br />
                        D. Click on the blue button to turn it off.
                    </p>
                    <p>This will hide your social profile from the Datsme app and allow you to continue using the app without the social feature!</p>
                `
                },
                {
                    question: "How can I unblock a user profile on the Datsme app?",
                    answer: `
                    <p>To unblock a user on the Datsme app:</p>
                    <p>
                        A. Click the fourth icon (from the left) in the bottom bar of the Datsme app).<br />
                        B. On the top right section of the screen, Click on the “Settings” icon.<br />
                        C. Under the “Connect” section settings, Click on “Block List”.<br />
                        D. Find the profile you want to unblock by clicking on the “Unblock” button.
                    </p>
                    <p>This is how you can unblock a user on the Datsme app!</p>
                `
                },
                {
                    question: "I have deleted the Datsme app, but have an active subscription. How can I restore my purchases?",
                    answer: `
                    <p>To restore your purchases:</p>
                    <p>
                        A. Click the fourth icon (from the left) in the bottom bar of Datsme app).<br />
                        B. On the top right section of the screen, Click on the “Settings” icon.<br />
                        C. Under the “Misc” section settings, Scroll down and click on “Advanced Settings”.<br />
                        D. Now, Click on “Restore Purchases”.
                    </p>
                    <p>If you have an active subscription, It will be restored!</p>
                    <p>If you still have trouble restoring your purchases, Please connect with us at hello@datsme.io</p>
                `
                },
                {
                    question: "How can I delete my Datsme account?",
                    answer: `
                    <p>To delete your Datsme account:</p>
                    <p>
                        A. Click the fourth icon (from the left) in the bottom bar of Datsme app).<br />
                        B. On the top right section of the screen, Click on the “Settings” icon.<br />
                        C. Under the “Misc” section settings, Scroll down and click on “Advanced Settings”.<br />
                        D. Now, Click on “Delete my account”.<br />
                        E. Select your reason for deleting the Datsme app, or click on “skip”.<br />
                        F. Click on “Delete my account” popup.
                    </p>
                    <p>This will permanently delete your Datsme account!</p>
                `
                },
                {
                    question: "How can I logout from the Datsme App?",
                    answer: `
                    <p>To log out from the Datsme app:</p>
                    <p>
                        A. Click the fourth icon (from the left) in the bottom bar of the Datsme app).<br />
                        B. On the top right section of the screen, Click on the “Settings” icon.<br />
                        C. Under the “Misc” section settings, Scroll down and click on “Logout”.<br />
                        D. Now, Click on “Yes, Log out” to confirm.
                    </p>
                `
                }
            ]
        },
        {
            key: "Pricing & Revenue Model",
            questions: [
                {
                    question: "What is Datsme Rise?",
                    answer: `
                    <p>Unlock the full potential of the Learn section of Datsme! The <strong>#1 choice</strong> for raising your social EQ through science and skill-building for better connecting!</p>
                    <p><strong>Benefits of Datsme Rise:</strong></p>
                    <p>
                        - Learn from the world’s leading experts.<br />
                        - Master the art of meaningful friendships.<br />
                        - Feel happy, secure and fulfilled.
                    </p>
                    <p><strong>Features of Datsme Rise:</strong></p>
                    <p>
                        - 80+ Masterclass Sessions unlocked!<br />
                        - Learn from the world’s leading experts.<br />
                        - Gain full access to our vault of acclaimed Expert Sessions.<br />
                        - Regular updates with new content catering to social wellness development in a holistic manner.
                    </p>
                `
                },
                {
                    question: "What is Datsme Spark?",
                    answer: `
                    <p>Unlock the full potential of the Connect section of Datsme! The #1 choice for meeting, connecting, and building meaningful connections.</p>
                    <p><strong>Benefits of Datsme Spark:</strong></p>
                    <p>
                        - Access to 300+ elite members of The Twelve Rings community.<br />
                        - Advanced matching based on your bonding style.<br />
                        - 3X More profiles & enhanced visibility.<br />
                        - 150+ Message Requests.
                    </p>
                    <p><strong>Features of Datsme Spark:</strong></p>
                    <p>
                        - Explore & connect with mindful individuals of The Twelve Rings community.<br />
                        - 5 Message Requests/day (150+ Message Requests/month).<br />
                        - 10 connections/day (300 connections/month).<br />
                        - 3X social visibility for more connections!
                    </p>
                `
                },
                {
                    question: "What is Datsme Sync?",
                    answer: `
                    <p>Unlock the full potential of the Manage section of Datsme! Bring thoughtfulness & depth to your personal & professional network!</p>
                    <p><strong>Benefits of Datsme Sync:</strong></p>
                    <p>
                        - Consciously build & manage your circles.<br />
                        - Carry the people who matter to you.<br />
                        - Defeat the constraints of a busy life.
                    </p>
                    <p><strong>Features of Datsme Sync:</strong></p>
                    <p>
                        - Manage up to 30 connections.<br />
                        - Add, edit and customize up to 5 categories.<br />
                        - Reminder notes - Unlocked!
                    </p>
                `
                },
                {
                    question: "What is Datsme Hybrid?",
                    answer: `
                    <p>Unlock the full potential of the Datsme app! The #1 choice for elevating all your bonds through ongoing learning & meaningful connecting!</p>
                    <p><strong>Benefits of Datsme Hybrid:</strong></p>
                    <p>
                        - Full access to all Expert Sessions.<br />
                        - Premium access to Datsme Social.<br />
                        - Elevate your social EQ with Datsme.
                    </p>
                    <p><strong>Features of Datsme Hybrid:</strong></p>
                    <p>
                        - 80+ Masterclass Sessions unlocked!<br />
                        - Learn from the world’s leading experts.<br />
                        - Gain full access to our vault of acclaimed Expert Sessions.<br />
                        - Regular updates with new content catering to social wellness development in a holistic manner.<br />
                        - Explore & connect with mindful individuals of The Twelve Rings community.<br />
                        - 5 Message Requests/day (150+ Message Requests/month).<br />
                        - 10 connections/day (300 connections/month).<br />
                        - 3X social visibility for more connections!
                    </p>
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
                            <li key={index}
                                className={`content--link ${item.key === activeKey ? 'content--link--active' : ''}`}
                                onClick={() => setActiveKey(item.key)}
                            >
                                {item.key}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="faq__container">
                <h2>{activeKey}</h2>
                <div className="faq__section">
                    <div className="faq__ques__section">
                        {faqData.map((item, index) =>
                            item.key === activeKey &&
                            item.questions.map((question, qIndex) => (
                                <div className="faq__item" key={qIndex}>
                                    <div
                                        className={`faq__item--head ${activeIndex.includes(qIndex) ? 'ques--active' : ''}`}
                                        onClick={() => {
                                            setActiveIndex([qIndex])
                                        }}
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
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Faq;
