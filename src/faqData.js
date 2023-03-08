import { FaChevronUp, FaChevronDown } from "react-icons/fa";
export const faqData = [
  {
    id: 1,
    question: "What is Condueet and what does it offer?",
    article:
      "Condueet is an open-banking data infrastructure that provide connectivity for businesses to get a unified view of customer financial footprint across.",
    helpful: "Was this article helpful?",
    yes: "yes",
    no: "no",
    chevronUp: <FaChevronUp />,
    chevronDown: <FaChevronDown />,
    text: " ",
  },
  {
    id: 2,
    question: "What is Condueet’s mission?",
    article:
      "Condueet’s mission is to create an open financial data system for everyone and every businesses in Africa ",
    helpful: "Was this article helpful?",
    yes: "yes",
    no: "no",
    chevronUp: <FaChevronUp />,
    chevronDown: <FaChevronDown />,
    text: " ",
  },
  {
    id: 3,
    question:
      "When Condueet retrieves my financial data, who has access to it?",
    article:
      "When you connect to Condueet widget, the app you gave authorization will have access to your data. Condueet has no access to your financial data or keep it.",
    helpful: "Was this article helpful?",
    yes: "yes",
    no: "no",
    chevronUp: <FaChevronUp />,
    chevronDown: <FaChevronDown />,
    text: " ",
  },
  {
    id: 4,
    question:
      "Can I remove app access, delete my data from Condueet, or revoke my consent to Condueet?",
    article:
      "Absolutely. Condueet helps you share your financial data with the apps you choose––but if you’d like to make a change at any time, we are here to help. There are several ways you can take action to change how you’re sharing data, to withdraw Condueet’s access to your financial data, and, subject to a few exceptions, delete your data from Condueet’s systems.",
    helpful: "Was this article helpful?",
    yes: "yes",
    no: "no",
    chevronUp: <FaChevronUp />,
    chevronDown: <FaChevronDown />,
    text: " ",
  },
  {
    id: 5,
    question: "Does Condueet have access to my credentials?",
    article:
      "The type of connection Condueet has to your financial institution determines whether or not we have access to the login credentials for your financial account: your username and password.",
    helpful: "Was this article helpful?",
    yes: "yes",
    no: "no",
    chevronUp: <FaChevronUp />,
    chevronDown: <FaChevronDown />,
    text: "In many cases, when you link a financial institution to an app via Condueet, you provide your login credentials to us and we securely store them. We use those credentials to access and obtain information from your financial institution in order to provide that information, at your direction, to the apps and services you want to use. For more information on how we use your data, please refer to our PRIVACY POLICY.",
  },
  {
    id: 6,
    question:
      "After I add all my financial accounts to the Condueet Portal, will I see all of my app connections?",
    article:
      "Yes, you will get view of all your connected apps on Condueet portal and see your financial accounts connected.",
    helpful: "Was this article helpful?",
    yes: "yes",
    no: "no",
    chevronUp: <FaChevronUp />,
    chevronDown: <FaChevronDown />,
    text: " ",
  },
];

// infoUsage
export const InfoUsage = [
  {
    id: 1,
    statement: "How Conduet Use Our Information",
    infoUsage:
      "We use the information we collect to operate, improve, and protect the services we provide, and to develop new services. More specifically, we use your information",
    disclaimer: "",
    list: [
      "To improve, enhance, modify, add to, and further develop our services",
      "To protect you, our developers, our partners, or Mono from fraud, malicious activity, and other privacy and security-related concerns",
      "To develop new services",
      "To develop new services",
      "To investigate any misuse of our service or our developers’ applications, including violations of our Client Terms of Service, criminal activity, or other unauthorised access to our services",
      "For any other purpose with your consent",
    ],
    chevronUp: <FaChevronUp />,
    chevronDown: <FaChevronDown />,
    helpful: "Was this article helpful?",
    yes: "yes",
    no: "no",
    anonymized: "",
    retainInfo: "",
  },
  {
    id: 2,
    statement: "How Conduet Use Our Information",
    infoUsage:
      "We take deliberate steps designed to protect End-User information in our possession. These steps include maintaining information security controls such as data encryption, firewalls, logical and physical access controls, and continuous monitoring. These controls are regularly evaluated for effectiveness against industry standards internally and by independent security auditors.",
    disclaimer:
      "We do not sell or rent End-User information to marketers or other third parties. But we do share End-User information with third parties as described in this Policy. For example, we share your information with the developer of the application you are using and as directed by that developer (such as with another third party if so directed by you). We also share your information:",
    list: [
      "With your consent",
      "With our service providers, partners, or contractors in connection with the services they perform for us or our developers",
      "If we believe in good faith that disclosure is appropriate to comply with applicable law, regulation, or legal process (such as a court order or subpoena)",
      "In connection with a change in ownership or control of all or a part of our business (such as a merger, acquisition, reorganisation, or bankruptcy)",
      "Between and among Mono and our current and future parents, affiliates, subsidiaries and other companies under common control or ownership",
      "As we believe reasonably appropriate to protect the rights, privacy, safety, or property of you, our developers, our partners, or Mono",
    ],
    chevronUp: <FaChevronUp />,
    chevronDown: <FaChevronDown />,
    anonymized:
      "We may collect, use, and share information in an aggregated or anonymized manner (that does not identify you personally) for any purpose permitted under applicable law. This includes creating or using aggregated or anonymized data based on the collected information to develop new services and to facilitate research.",
    retainInfo:
      "We retain information we collect about you for as long as necessary to fulfill the purposes for which we collected it, unless a longer retention period is required or permitted under applicable law. As permitted under applicable law, even after you stop using an application or terminate your account with one of our developers, we may still retain your information (for example, if you still have an account with another developer). However, your information will only be processed as required by law or in accordance with this Policy",
    helpful: "Was this article helpful?",
    yes: "yes",
    no: "no",
  },
];

// personalData
export const personalData = [
  {
    id: 1,
    statement: "What data does Condueet access from my financial institution?",
    receivedInfo:
      "The information we receive from the financial institutions and other financial service providers that maintain your financial accounts varies depending on the Condueet services our developers use to power their applications and websites, as well as the information made available by those institutions and providers. But, in general, we collect the following types of information from your financial institutions and other financial service providers:",
    personalDetails: [
      "Personal information: name, date of birth, full address(es), email address, phone number, gender",
      "Account type (E.g. Current, Saving, Investment, Credit Card)",
      "Account Name",
      "Account number (both local and international)",
      "Currency",
      "Account balance information",
      "Current balance",
      "Available balance",
      "Transactions",
      "Time",
      "Description",
      "Amount",
    ],
    deviceInfo: "",
    showData: false,
    otherSource: "",
    chevronUp: <FaChevronUp />,
    chevronDown: <FaChevronDown />,
    helpful: "Was this article helpful?",
    yes: "yes",
    no: "no",
  },
  {
    id: 2,
    receivedInfo:
      "The information we receive from the financial institutions and other financial service providers that maintain your financial accounts varies depending on the Condueet services our developers use to power their applications and websites, as well as the information made available by those institutions and providers. But, in general, we collect the following types of information from your financial institutions and other financial service providers:",
    statement: "Information received from your devices",
    personalDetails: [
      "Personal information: name, date of birth, full address(es), email address, phone number, gender",
      "Account type (E.g. Current, Saving, Investment, Credit Card)",
      "Account Name",
      "Account number (both local and international)",
      "Currency",
      "Account balance information",
      "Current balance",
      "Available balance",
      "Transactions",
      "Time",
      "Description",
      "Amount",
    ],
    deviceInfo:
      " Our technology is generally embedded in our developers’ applications. When you use your device to connect to our services through a developer application, we receive information about that device, including IP address, hardware model, operating system, and other technical information about the device. We also use cookies or similar tracking technologies to collect usage statistics and to help us provide and improve our services; you can find more information about how we use cookies and your related choices in our Cookies Policy.",
    otherSource:
      "We also receive information about you directly from the relevant developer or other third parties, including service providers and identity verification services. For example, our developers may provide information to us about you, such as your full name, email address, phone number, or information about your account transactions.",
    chevronUp: <FaChevronUp />,
    chevronDown: <FaChevronDown />,
    helpful: "Was this article helpful?",
    yes: "yes",
    no: "no",
    showData: true,
  },
];
