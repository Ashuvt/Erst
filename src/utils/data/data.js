// Header Data main menu and router links
import { images } from "../images/images";

export const menuList = [
  {
    id: 1,
    title: "home",
    submenu: [
      {
        id: "01",
        text: "Home1",
        link: "/home1",
      },
      {
        id: "022",
        text: "About",
        link: "/about",
      },
      {
        id: "023",
        text: "Blogs",
        link: "/blogs",
      },
      {
        id: "02",
        text: "Home2",
        link: "/home2",
      },
      {
        id: "03",
        text: "faq",
        link: "/faq",
      },
    ],
  },
  {
    id: 2,
    title: "company",
    submenu: [
      {
        id: "04",
        text: "contact Us",
        link: "/contactus",
      },
      {
        id: "05",
        text: "careers",
        link: "/careers",
      },
      {
        id: "06",
        text: "about our services",
        link: "/about_our_services",
      },
      {
        id: "07",
        text: "Software Developer",
        link: "/software_developer",
      },
      {
        id: "08",
        text: "New Technology",
        link: "/new_technology",
      },
    ],
  },
  {
    id: 3,
    title: "Services",
    submenu: [
      // {
      //   id: "09",
      //   text: "shop",
      //   link: "/shop",
      // },
      {
        id: "10",
        text: "blogdetail",
        link: "/blogs/2",
      },
      {
        id: "11",
        text: "roadmap",
        link: "/roadmap",
      },
    ],
  },
];

// Home1 Service card data

export const cardData = [
  {
    id: 0,
    count: 1,
    title: "Lorem, ipsum dolor.",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, excepturi dolor dignissimos suscipit accusantium consequuntur repellendus exercitationem dolores magnam expedita alias, iure quis itaque unde. Animi culpa impedit maxime ab aliquid accusamus, laboriosam, aut qui laudantium nostrum in tempore, totam reiciendis dicta!"
  },
  {
    id: 1,
    count: 2,
    title: "Lorem, ipsum dolor.",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, excepturi dolor dignissimos suscipit accusantium consequuntur repellendus exercitationem dolores magnam expedita alias, iure quis itaque unde. Animi culpa impedit maxime ab aliquid accusamus, laboriosam, aut qui laudantium nostrum in tempore, totam reiciendis dicta!"
  },
  {
    id: 2,
    count: 3,
    title: "Lorem, ipsum dolor.",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, excepturi dolor dignissimos suscipit accusantium consequuntur repellendus exercitationem dolores magnam expedita alias, iure quis itaque unde. Animi culpa impedit maxime ab aliquid accusamus, laboriosam, aut qui laudantium nostrum in tempore, totam reiciendis dicta!"
  },
  {
    id: 3,
    count: 4,
    title: "Lorem, ipsum dolor.",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, excepturi dolor dignissimos suscipit accusantium consequuntur repellendus exercitationem dolores magnam expedita alias, iure quis itaque unde. Animi culpa impedit maxime ab aliquid accusamus, laboriosam, aut qui laudantium nostrum in tempore, totam reiciendis dicta!"
  },
];

// Home1Component => Plan Component => plans

export const planData = [
  {
    id: 10,
    level: "beginner",
    word: "Up to 2,000 words / mo",
    monthlyPrice: 9,
    yearlyPrice: 90,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    btnText: "buy now",
    offer: 18,
  },
  {
    id: 20,
    level: "PRO",
    word: "Up to 50,000 words / mo",
    monthlyPrice: 59,
    yearlyPrice: 590,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    btnText: "buy now",
    offer: 118,
  },
  {
    id: 30,
    level: "STARTER",
    word: "Up to 10,000 words / mo",
    monthlyPrice: 19,
    yearlyPrice: 190,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    btnText: "buy now",
    offer: 38,
  },
];

// Faq Questions sec data (Questions & Answer);

export const faqData = [
  {
    id: "faq0",
    que: "What is Lorem Ipsom amet?",
    ans:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi molestias incidunt beatae voluptatem at non omnis quo, itaque provident ab quibusdam nihil animi eaque. Magni ducimus voluptas dicta error molestias doloremque iure."
  },
  {
    id: "faq1",
    que:"What is Lorem Ipsom amet?",
    ans:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi molestias incidunt beatae voluptatem at non omnis quo, itaque provident ab quibusdam nihil animi eaque. Magni ducimus voluptas dicta error molestias doloremque iure."
  },
  {
    id: "faq2",
    que:"What is Lorem Ipsom amet?",
    ans:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi molestias incidunt beatae voluptatem at non omnis quo, itaque provident ab quibusdam nihil animi eaque. Magni ducimus voluptas dicta error molestias doloremque iure."
  },
  {
    id: "faq3",
    que:"What is Lorem Ipsom amet?",
    ans:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi molestias incidunt beatae voluptatem at non omnis quo, itaque provident ab quibusdam nihil animi eaque. Magni ducimus voluptas dicta error molestias doloremque iure."
  },
  {
    id: "faq4",
    que:"What is Lorem Ipsom amet?",
    ans:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi molestias incidunt beatae voluptatem at non omnis quo, itaque provident ab quibusdam nihil animi eaque. Magni ducimus voluptas dicta error molestias doloremque iure."
  },
  {
    id: "faq5",
    que:"What is Lorem Ipsom amet?",
    ans:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi molestias incidunt beatae voluptatem at non omnis quo, itaque provident ab quibusdam nihil animi eaque. Magni ducimus voluptas dicta error molestias doloremque iure."
  },
];

export const ourServicesPlanData = [
  {
    id: 0,
    type: "Beginner",
    text: "Buy an annual subscription and save your money.",
    price: 9,
    detail:
      "The Intelligent Analytics Suite pricing package offers predictable costs, which can help businesses plan their budget and avoid unexpected expenses. The pricing package can be customized to the needs of the business, allowing it to scale as the business grows.",
    features: [
      "Pricing package expands analytical capabilities",
      "Helps businesses gain a competitive advantage",
      "Includes real-time monitoring and alerting capabilities",
      "Optimizes its activities by analyzing data from sources",
      "Deep understanding of customer behavior",
    ],
  },

  {
    id: 1,
    type: "Freelancer",
    text: "Buy an annual subscription and save your money.",
    price: 19,
    detail:
      "The Intelligent Analytics Suite pricing package offers predictable costs, which can help businesses plan their budget and avoid unexpected expenses. The pricing package can be customized to the needs of the business, allowing it to scale as the business grows.",
    features: [
      "Pricing package expands analytical capabilities",
      "Helps businesses gain a competitive advantage",
      "Includes real-time monitoring and alerting capabilities",
      "Optimizes its activities by analyzing data from sources",
      "Deep understanding of customer behavior",
    ],
  },

  {
    id: 2,
    type: "Professional",
    text: "Buy an annual subscription and save your money.",
    price: 39,
    detail:
      "The Intelligent Analytics Suite pricing package offers predictable costs, which can help businesses plan their budget and avoid unexpected expenses. The pricing package can be customized to the needs of the business, allowing it to scale as the business grows.",
    features: [
      "Pricing package expands analytical capabilities",
      "Helps businesses gain a competitive advantage",
      "Includes real-time monitoring and alerting capabilities",
      "Optimizes its activities by analyzing data from sources",
      "Deep understanding of customer behavior",
    ],
  },

  {
    id: 3,
    type: "Company",
    text: "Buy an annual subscription and save your money.",
    price: 59,
    detail:
      "The Intelligent Analytics Suite pricing package offers predictable costs, which can help businesses plan their budget and avoid unexpected expenses. The pricing package can be customized to the needs of the business, allowing it to scale as the business grows.",
    features: [
      "Pricing package expands analytical capabilities",
      "Helps businesses gain a competitive advantage",
      "Includes real-time monitoring and alerting capabilities",
      "Optimizes its activities by analyzing data from sources",
      "Deep understanding of customer behavior",
    ],
  },
];


export const blogsData = [
  {
    id:"0",
    tag:"Staying Safe Online",
    title:"Tips to Protect Against Cyber Attacks during these days",
    date:"October 19, 2023",
    img:images.blogA,
    para:[
      {
        id:"00",
        p:"Over the past few days, while the external world has collectively focused its attention on a particular matter, the digital world has not stopped; instead, its activities have increased. With people taking their thoughts to social media platforms and various websites, this increase has unintentionally increased the chances of exploitation by hackers."
      },
      {
        id:"01",
        p:"Recent news reports have confirmed this increase in cyber-attacks, reporting more than 60 incidents globally in the past week alone. These attacks span a range of techniques and targets, including distributed denial-of-service (DDoS) attacks on government websites, data breaches affecting academic entities, hackers taking advantage of a critical flaw in a DevOps Tool, and even a ransomware warning issued by the Chilean government following a customs incident."        
      },
      {
        id:"02",
        p:"Yet, what we currently know may only be the tip of the iceberg. Cyber threats often lurk in the shadows, taking time to manifest on our detection systems. Moreover, not all DDoS attacks are reported, given their brief duration and swift resolution."
      },
      {
        id:"03",
        p:"Given this landscape, it becomes our duty to summarize the guidance shared by cybersecurity experts on a daily basis during these couple of days. These recommendations aim to strengthen our defenses against the cyber-attacks:"
      }

    ],
    descList:[
      {
        id:'01',
        title:"Secure WhatsApp Web Logout:",
        des:"Ensure a secure logout from WhatsApp Web to prevent unauthorized access to your account."
      },
      {
        id:'02',
        title:"Avoiding Unfamiliar Links and Attachments:",
        des:"Exercise caution and do not click on links or open attachments from unknown sources to minimize the risk of malware infiltration."
      },
      {
        id:'03',
        title:"WhatsApp Group Security: ",
        des:"Take control of your WhatsApp groups by blocking automatic additions, enhancing privacy and security."
      },
      {
        id:'04',
        title:"Password Hygiene:",
        des:"Regularly change passwords and stay clear of automatically generated ones. Option for passwords that are both long and strong, created by you."
      },
      {
        id:'05',
        title:"System Updates:",
        des:"Keep your computer system up to date with the latest patches and updates to patch vulnerabilities that may be exploited by cyber threats."
      },
      {
        id:'06',
        title:"Two-Factor Authentication: ",
        des:"Strengthen your account security by enabling two-factor authentication, an additional layer of defense against unauthorized access."
      },
      {
        id:'07',
        title:"VPN Installation:",
        des:"Consider installing a Virtual Private Network (VPN) protection software, particularly if you frequently use public networks on your laptop. VPNs encrypt traffic, enhancing privacy and security."
      }

    ],
  },
  {
    id:"1",
    tag:"Revealing the Hidden Threat",
    title:"Deep Learning Unlocks Acoustic Side Channel Attacks on Keyboards",
    date:"August 6, 2023",
    img:images.blogB,
    para:[
      {
        id:"20",
        p:"In our increasingly interconnected world, where technology's reach spans from personal devices to online services, the threat landscape continues to evolve. One emerging threat that has caught the attention of cybersecurity researchers is acoustic side channel attacks (ASCA) on keyboards. The fusion of advanced deep learning techniques with the ubiquity of microphones and online platforms has unlocked new avenues for exploiting this vulnerability. In a recent paper, researchers delve into this threat, proposing a novel approach that sheds light on the feasibility and potential impact of such attacks."
      },
      {
        id:"21",
        p:"Acoustic side channel attacks involve extracting sensitive information from a target system by analyzing sound emanating from its physical components, such as keystrokes on a keyboard. These attacks have gained traction due to the convergence of multiple factors: the rise of deep learning models, the widespread use of microphones in various devices, and the growing dependence on online services. In their paper, the researchers systematically explore the landscape of ASCA, introducing a groundbreaking method that harnesses the power of deep learning for keyboard attacks."
      },
      {
        id:"22",
        p:"The core of their approach lies in the integration of deep learning models to classify keystrokes based on acoustic signals. To validate their methodology, the researchers conducted experiments using two modes of data collection: recording keystrokes through a phone placed nearby and recording them via the Zoom video conferencing tool for remote attacks. The results were nothing short of impressive. The deep learning model achieved remarkable accuracy levels - a top-1 accuracy of 95% for phone-recorded keystrokes and 93% accuracy for keystrokes recorded through Zoom."
      },
      {
        id:"23",
        p:"These findings are a testament to the potency of the proposed approach. The research not only highlights the effectiveness of the method but also underscores the ease of executing such attacks with off-the-shelf equipment and algorithms. The paper provides a sobering realization that an adversary could exploit the vulnerabilities in microphone-enabled devices and online platforms to compromise sensitive information through ASCA."
      },
      {
        id:"24",
        p:"Beyond the technical aspects, the authors also discuss mitigation strategies. They underline the evolution of keyboard acoustics and microphone technology as catalysts for these attacks. The integration of deep learning models, now more accessible than ever, and the vulnerability of modern laptops in public spaces further compound the challenge. The research emphasizes the significance of key positions in keystroke recognition, with erroneous classifications providing insights into the actual key's location on the keyboard."
      },
      {
        id:"25",
        p:"Moreover, the paper identifies future research directions to tackle this evolving threat. Exploring more robust methods of isolating keystrokes from single recordings, investigating the use of smart speakers for recording keystrokes due to their omnipresence, and considering the integration of language models alongside the proposed deep learning approach are just a few of the avenues that researchers could delve into."
      },
      {
        id:"26",
        p:"In conclusion, the study provides a comprehensive exploration of acoustic side channel attacks on keyboards, leveraging the power of deep learning for classification. By introducing an innovative approach and evaluating its effectiveness, the researchers have laid the foundation for understanding the potential impact of ASCA in real-world scenarios. With this paper, the cybersecurity community is armed with valuable insights to fortify defenses against this emerging threat, ultimately safeguarding our increasingly interconnected digital world."
      },
    ],
    descList:[]

  },
  {
    id:"2",
    tag:"Safeguarding the Banking Sector",
    title:"SaaS verses on premises software",
    date:"July 25, 2023",
    img:images.blogC,
    para:[
      {
        id:"30",
        p:"In a recent groundbreaking discovery, cybersecurity researchers have unveiled what appears to be the first-ever open-source software supply chain attacks specifically targeting the banking sector. The attackers demonstrated a high level of sophistication, employing advanced techniques to infiltrate the digital assets of victim banks."
      },
      {
        id:"31",
        p:"A leading cybersecurity firm, reported on the attacks, revealing that they involved malicious functionalities attached to specific components in the web assets of the targeted banks. These malicious components were cleverly disguised, making them challenging to detect through traditional security measures."
      },
      {
        id:"32",
        p:"Furthermore, the attackers used deceptive tactics to enhance their credibility and evade detection. One such tactic involved creating fake LinkedIn profiles, lending an air of legitimacy to their actions. Additionally, they employed customized command-and-control (C2) centers for each target, further complicating detection efforts."
      },
      {
        id:"33",
        p:"Upon discovering the npm packages used in the attacks, swift action was taken to report and take them down. However, the names of the packages remain undisclosed, emphasizing the need for heightened vigilance within the banking industry."
      },
      {
        id:"34",
        p:"In one of the attacks, the threat actors posed as an employee of the target bank and uploaded packages to the npm registry in April 2023. These packages came equipped with preinstall scripts designed to activate the infection sequence. To complete the deception, the attackers even created a fake LinkedIn profile to reinforce their cover."
      },
      {
        id:"35",
        p:"Once launched, the script analyzed the host operating system, enabling the attackers to download a second-stage malware from a remote server using a subdomain on Azure that incorporated the name of the targeted bank. This clever tactic allowed them to bypass traditional deny list methods, taking advantage of Azure's legitimate status as a service provider."
      },
      {
        id:"36",
        p:"The second-stage payload, known as Havoc, is an open-source command-and-control (C2) framework that malicious actors increasingly employ to evade detection. It has garnered attention due to its ability to sidestep security measures commonly used against threats like Cobalt Strike, Sliver, and Brute Ratel."
      },
      {
        id:"37",
        p:"Another attack, unrelated to the first, targeted a different bank in February 2023. In this instance, the adversary meticulously designed an npm package to blend seamlessly into the victim bank's website. The package lay dormant until activated, covertly intercepting login data and exfiltrating it to an actor-controlled infrastructure."
      },
      {
        id:"38",
        p:"The implications of these attacks underscore the critical importance of supply chain security. Protecting the entire software creation and distribution process, from development to the end-user, becomes paramount to prevent breaches. Once a malicious open-source package enters the software pipeline, the consequences can be instantaneous and overwhelming, rendering subsequent countermeasures ineffective."
      },
      {
        id:"39",
        p:"The emergence of supply chain attacks in the banking sector serves as a stark reminder of the persistent threat landscape. As cybercriminals continue to exploit vulnerabilities, financial institutions must remain vigilant and proactive in their defense strategies."
      },
    ],
    descList:[]
  },
  {
    id:"3",
    tag:"WormGPT",
    title:"Emerging AI Tool Raises Concerns over Advanced Cyber Threats",
    date:"July 19, 2023",
    img:images.blogD,
    para:[
      {
        id:"40",
        p:"In the ever-evolving landscape of cybersecurity, a new AI tool named WormGPT has surfaced, posing significant risks to organizations worldwide. This generative AI cybercrime tool, built upon the GPTJ language model, has been designed to facilitate sophisticated phishing and Business Email Compromise (BEC) attacks."
      },
      {
        id:"41",
        p:"WormGPT, developed in 2021, boasts a range of noteworthy functionalities that enhance its malicious potential. Its extensive character support, ability to retain chat memory, and code formatting capabilities allow it to craft highly convincing fake emails tailored to individual recipients. This level of personalization significantly increases the success rate of the attacks, making it a formidable weapon in the hands of cyber adversaries."
      },
      {
        id:"42",
        p:"As organizations increasingly adopt AI-based security measures, adversaries are turning to AI tools like WormGPT to bypass these safeguards. Both OpenAI ChatGPT and Google Bard have implemented measures to counter the misuse of Large Language Models (LLMs) for deceptive phishing and harmful code generation."
      },
      {
        id:"43",
        p:"Generative AI has opened new avenues for cybercriminals, enabling even those with limited expertise to conduct advanced BEC attacks. By crafting emails with perfect grammar and authenticity, generative AI reduces the chances of arousing suspicion in potential victims. This democratization of AI-driven cyberattacks poses serious challenges for cybersecurity professionals in their efforts to protect organizations against increasingly sophisticated threats."
      },
      {
        id:"44",
        p:"As the risks posed by AI-driven cyber threats continue to grow, organizations must take proactive measures to defend against these attacks. Companies should invest in updated training programs to educate their employees on the dangers of AI-enhanced BEC attacks. Strengthening email verification processes can also bolster defenses against AI-driven phishing attempts, providing additional protection."
      },
      {
        id:"45",
        p:"In conclusion, the emergence of WormGPT and other AI-powered cybercrime tools underscores the importance of staying vigilant and proactive in the face of evolving threats. By adopting robust cybersecurity practices and raising awareness among employees, organizations can significantly reduce their vulnerability to advanced AI-driven attacks and safeguard their valuable data and assets."
      },
    
    ],
    descList:[]

  },
]
