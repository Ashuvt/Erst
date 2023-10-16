
// Header Data main menu and router links
export const menuList = [
    {
        id:1,
        title:"home",
        submenu:[
            {
                id:"01",
                text:"Home",
                link:"/home",
            },
            {
                id:"02",
                text:"faq",
                link:"/faq",
            },
            {
                id:"03",
                text:"contact Us",
                link:"/contactus"
            }          
        ]
    },
 
];

// Home1 Service card data

export const cardData = [
    {
        id:0,
        count:1,
        title:"Predictive Analytics",
        text:"Predictive analytics is the practice of using data, statistical algorithms, and machine learning techniques to identify the likelihood of future outcomes based on historical data. With predictive analytics, businesses can anticipate future events, trends, and opportunities and make data-driven decisions to improve performance."
    },
    {
        id:1,
        count:2,
        title:"Business Intelligence",
        text:"Business Intelligence (BI) is a technology-driven process that involves analyzing data and presenting actionable insights to help businesses make informed decisions. BI tools typically include dashboards, reports, and data visualization tools that allow users to understand and interact with complex data."
    },
    {
        id:2,
        count:3,
        title:"Data Mining",
        text:"Data mining is the process of analyzing large datasets to identify patterns, relationships, and insights that can be used to make better business decisions. Data mining techniques can be used to identify customer preferences, market trends, and other factors that can help businesses optimize their operations."
    },
    {
        id:3,
        count:4,
        title:"Machine Learning",
        text:"Machine learning is a type of artificial intelligence (AI) that involves teaching computers to learn from data and improve their performance over time. Machine learning algorithms can be used to automate decision-making processes, identify patterns in data, and make predictions about future events."
    },
];


// Home1Component => Plan Component => plans

export const planData = [
    {
        id:10,
        level:"beginner",
        word:"Up to 2,000 words / mo",
        monthlyPrice:9,
        yearlyPrice:90,
        text:"Suitable for designers taking on 1 project per month.",
        btnText:"buy now",
        offer:18
    },
    {
        id:20,
        level:"PRO",
        word:"Up to 50,000 words / mo",
        monthlyPrice:59,
        yearlyPrice:590,
        text:"Suitable for designers taking on 1 project per month.",
        btnText:"buy now",
        offer:118
    },
    {
        id:30,
        level:"STARTER",
        word:"Up to 10,000 words / mo",
        monthlyPrice:19,
        yearlyPrice:190,
        text:"Suitable for designers taking on 1 project per month.",
        btnText:"buy now",
        offer:38
    }
]

// Faq Questions sec data (Questions & Answer);

export const faqData = [
    {
        id:'faq0',
        que:"What is the Intelligent Analytics Suite?",
        ans:"The Intelligent Analytics Suite is a software solution that offers advanced analytics capabilities to businesses, allowing them to collect, analyze, and visualize data from various sources to gain insights and intelligence for informed decision-making."
    },
    {
        id:'faq1',
        que:"How does the Intelligent Analytics Suite work?",
        ans:"The Intelligent Analytics Suite collects data from multiple sources, such as customer data, sales data, and operational data, and uses advanced analytics algorithms to analyze and derive insights from the data. The insights are then visualized through reports and dashboards for easy interpretation and decision-making."
    },
    {
        id:'faq2',
        que:"What types of data can the IAS analyze?",
        ans:"The Intelligent Analytics Suite can analyze a wide range of data, including structured and unstructured data from various sources, such as databases, spreadsheets, CRM systems, social media, and more."
    },
    {
        id:'faq3',
        que:"What industries can benefit from the IAS?",
        ans:"The Intelligent Analytics Suite can benefit businesses in various industries, including but not limited to retail, e-commerce, finance, healthcare, manufacturing, telecommunications, and more."
    },
    {
        id:'faq4',
        que:"What are the key benefits of using the IAS?",
        ans:"The key benefits of using the Intelligent Analytics Suite include data-driven decision-making, improved operational efficiency, enhanced customer understanding, competitive advantage, real-time monitoring and alerts, and customization and scalability."
    },
    {
        id:'faq5',
        que:"Is the Intelligent Analytics Suite scalable?",
        ans:"Yes, the Intelligent Analytics Suite is scalable, allowing businesses to easily scale the solution as their business grows. This makes it a flexible and adaptable solution that can evolve with the changing needs of the business."
    },
]