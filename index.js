// const quizData = [
//    {
//       question: "What is the capital city of France?",
//       answers: ["Paris", "Madrid", "Rome", "Berlin"],
//       correctAnswer: "Paris",
//    },
//    {
//       question: "What is the largest planet in our solar system?",
//       answers: ["Jupiter", "Saturn", "Neptune", "Uranus"],
//       correctAnswer: "Jupiter",
//    },
//    {
//       question: "What is the highest mountain in the world?",
//       answers: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
//       correctAnswer: "Mount Everest",
//    },
//    {
//       question: "What is the capital city of Japan?",
//       answers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
//       correctAnswer: "Tokyo",
//    },
//    {
//       question: "What is the smallest country in the world?",
//       answers: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
//       correctAnswer: "Vatican City",
//    },
//    {
//       question: "What is the scientific name of a butterfly?",
//       answers: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
//       correctAnswer: "Rhopalocera",
//    },
//    {
//       question: "How hot is the surface of the sun?",
//       answers: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
//       correctAnswer: "5,778 K",
//    },
//    {
//       question: "What is the capital of Spain?",
//       answers: ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
//       correctAnswer: "Madrid",
//    },
//    {
//       question:
//          "What are the school colors of the University of Texas at Austin?",
//       answers: [
//          "Black, Red",
//          "Blue, Orange",
//          "White, Burnt Orange",
//          "White, Old gold, Gold",
//       ],
//       correctAnswer: "White, Burnt Orange",
//    },
//    {
//       question: "What is 70 degrees Fahrenheit in Celsius?",
//       answers: ["18.8889", "20", "21.1111", "158"],
//       correctAnswer: "21.1111",
//    },
// ];
const quizData = [
   {
      question:
         "In the context of static characteristics of a sensor, which of the following signifies resolution?",
      answers: [
         "It provides the smallest change in the input that a sensor is capable of Sensing",
         "It is the difference between the standard value and the value produced by Sensor",
         "It is the deviation of sensor value curve from a particular straight line",
         "It represents the correctness of the output compared to a superior system",
      ],
      correctAnswer:
         "It provides the smallest change in the input that a sensor is capable of Sensing",
   },
   {
      question:
         "What is the general operating voltage range of commercial sensors which are available for circuit enthusiasts and hobbyists?",
      answers: ["3.3 to 5 V", "4.5 to 8 V", "3.5 to 12 V", "3.3 to 8 V"],
      correctAnswer: "3.3 to 5 V",
   },
   {
      question: "Which of the following actuators produce linear displacement?",
      answers: [
         "Manual Linear Actuator",
         "Fluid Power Linear Actuator",
         "Electric Linear Actuator",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question: "IEEE 802.15.4 uses __ protocol for data transmission.",
      answers: ["ALOHA", "CSMA-CA", "CSMA-CD", "None of the above"],
      correctAnswer: "CSMA-CA",
   },
   {
      question:
         "Which of the following is not an operating frequency of ZigBee?",
      answers: ["950 KHz", "868 MHz", "902-928 MHz", "2.4 GHz"],
      correctAnswer: "950 KHz",
   },
   {
      question: "What is/are the role(s) of adaptation layer in 6LoWPAN?",
      answers: [
         "Packet fragmentation & packet reassembly",
         "Compression of header",
         "Routing of data link layer",
         "All the above",
      ],
      correctAnswer: "All the above",
   },
   {
      question: "Maximum payload allowed in wireless HART is __ bytes?",
      answers: ["63", "127", "255", "512"],
      correctAnswer: "127",
   },
   {
      question: "Radio dead-spots can be bypassed using a process called __.",
      answers: ["Healing", "Multi-hop", "Adaptation", "Reduction"],
      correctAnswer: "Healing",
   },
   {
      question:
         "In which application domain does ISA 100.11a is primarily used?",
      answers: [
         "Home/Office Automation",
         "System for Smart Security and Surveillance",
         "Systems for Smart Energy Management",
         "Automation in large scale complex industries",
      ],
      correctAnswer: "Automation in large scale complex industries",
   },
   {
      question:
         "Which wireless communication technology is based on Ad-hoc Piconets?",
      answers: ["Wireless HART", "ZigBee", "Bluetooth", "Z-Wave"],
      correctAnswer: "Bluetooth",
   },
   {
      question: "What does the abbreviation, NFC, stands for?",
      answers: [
         "New Frequency communication",
         "Near Frequency communication",
         "Near Field communication",
         "Non-Friendly communication",
      ],
      correctAnswer: "Near Field communication",
   },
   {
      question:
         "Which of the following work groups extend the integration of the IoT devices from network to service level.",
      answers: ["6LoWPAN", "ROLL", "CoRE", "None of the above"],
      correctAnswer: "CoRE",
   },
   {
      question: "QoS policies for IoT Network includes _.",
      answers: [
         "Resource utilization",
         "Data timeliness",
         "Data availability",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which IoT networking protocol supports caching capabilities to improve the response time and reduce bandwidth consumption?",
      answers: ["MQTT", "XMPP", "CoAP", "AMQP"],
      correctAnswer: "CoAP",
   },
   {
      question: "Which IoT networking protocol is used in the Military?",
      answers: ["DDS RTPS", "IEEE 1888", "AMCP", "CoAP"],
      correctAnswer: "DDS RTPS",
   },
   {
      question:
         "Which industrial revolution is coined as “The second Machine Age” by Prof. Erik Brynjolfsson and Andrew McAfee of MIT?",
      answers: [
         "(a) First Industrial Revolution",
         "(b) Second Industrial Revolution",
         "(c) Third Industrial Revolution",
         "(d) Fourth Industrial Revolution",
      ],
      correctAnswer: "(d) Fourth Industrial Revolution",
   },
   {
      question:
         "Q.2. Automation in manufacturing system, computers, the Internet, and usage of renewable energies are some of the advancement in technologies, which took place during the ",
      answers: [
         "(a) First Industrial Revolution",
         "(b) Second Industrial Revolution",
         "(c) Third Industrial Revolution",
         "(d) Fourth Industrial Revolution",
      ],
      correctAnswer: "(c) Third Industrial Revolution",
   },
   {
      question:
         "Q.3. Which of the following is/are probable tipping points in 2025?",
      answers: [
         `(a) Intergalactic travels`,
         `(b) Clothes connected to the internet`,
         `(c) Mars Exploration`,
         `(d) AI with human emotions`,
      ],
      correctAnswer: "(b) Clothes connected to the internet",
   },
   {
      question:
         "Q.4. Which of the following is provided in a sustainable Industry?",
      answers: [
         `(a) Renewable energy`,
         `(b) Low toxic gas emission`,
         `(c) Low-waste production`,
         `(d) High value products`,
      ],
      correctAnswer: "(c) Low-waste production",
   },
   {
      question:
         "Q.5. Which of the following is an example of Information and Communication Technology (ICT)?",
      answers: [
         `(a) Enterprise Resource Planning (ERP)`,
         `(b) Global Positioning System (GPS)`,
         `(c) Radio Frequency Identification (RFID) system`,
         `(d) All of the above`,
      ],
      correctAnswer: "(d) All of the above",
   },
   {
      question:
         "Q.6. How many different categories of countries are there based on population growth?",
      answers: ["2", `3`, `4`, `5`],
      correctAnswer: "3",
   },
   {
      question:
         "Q.7. Which of the following is an optimistic view of population growth?",
      answers: [
         `(a) Enhances the economic growth`,
         `(b) Consumes most of the economic investments in safety, need for schools, hospitals, universities`,
         `(c) Increases globalization issue such as trade and commerce`,
         `(d) None of the above`,
      ],
      correctAnswer:
         "(c) Increases globalization issue such as trade and commerce",
   },
   {
      question: "Which company developed Lean Production System?",
      answers: [
         "Hyundai Motor Company",
         "Honda Motor Company",
         "Kia Corporation",
         "Toyota motor corporation",
      ],
      correctAnswer: "Toyota motor corporation",
   },
   {
      question: "Why should companies implement lean approach?",
      answers: [
         "Increase product quality",
         "Improved lead times",
         "Cost efficient",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which of the following cannot be considered as a medium of getting smart and connected?",
      answers: [
         "Embedded Systems",
         "Cloud computing",
         "Manufacturing system",
         "Sensors",
      ],
      correctAnswer: "Manufacturing system",
   },
   {
      question: "What are the four key attributes of smart business models?",
      answers: [
         "Value addition, revenue enhancements, and technologies",
         "Value proposition, revenue centralization, and technologies",
         "Value addition, revenue streams, and emerging trends",
         "Value proposition, revenue streams, and technologies",
      ],
      correctAnswer: "Value proposition, revenue streams, and technologies",
   },
   {
      question: "Which of the following statements are correct?",
      answers: [
         "Physical layer is responsible for collecting and acquiring data from object or environment.",
         "Digital layer processes the data.",
         "Physical layer is equipped with micro-controllers and sensors.",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "_ is a flexible system that can self-optimize performance across a broader network, self-adapt to and learn from new conditions in real or near-real time, and autonomously run entire production processes.",
      answers: [
         "Lean production system",
         "Automation system",
         "Smart factory",
         "Smart city",
      ],
      correctAnswer: "Smart factory",
   },
   {
      question: "Which of the following is not a component of smart factory?",
      answers: [
         "Smart engineering",
         "Smart machines",
         "Data analysis",
         "Smart ideas",
      ],
      correctAnswer: "Smart ideas",
   },
   {
      question:
         "Which of the following is/are the use(s) of Big Data analytics in smart factories?",
      answers: [
         "Improving value streams",
         "Future prediction",
         "Key Performance Indicator",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which of the following is true regarding Cyber-Physical Systems?",
      answers: [
         "They are devices having information processing systems embedded into them.",
         "They are typically confined to a single device",
         "They are networked set of embedded systems",
         "All of the above",
      ],
      correctAnswer: "They are networked set of embedded systems",
   },
   {
      question:
         "What are the 5 Cs in the CPS “5C architecture” for Industry 4.0?",
      answers: [
         "Connection, Conversion, Cyber, Cognition, Configuration",
         "Connection, Communication, Cyber, Cognition, Configuration",
         "Connection, Communication, Cyber, Carrier, Configuration",
         "Connection, Conversion, Cyber, Cognition, Carrier",
      ],
      correctAnswer:
         "Connection, Conversion, Cyber, Cognition, Configuration",
   },
   {
      question: "What are Smart Sensors?",
      answers: [
         "They are the integration of sensors and actuators with a processor and a communication module.",
         "They are universal sensors which can sense a wide range of different stimuli.",
         "They are the kind of sensors which do not require a power source to operate.",
         "All of the above",
      ],
      correctAnswer:
         "They are the integration of sensors and actuators with a processor and a communication module.",
   },
   {
      question:
         "Which of the following is an example of Collaboration platform",
      answers: ["Google Drive", "Outlook", "Backblaze", "ProWork Flow"],
      correctAnswer: "ProWork Flow",
   },
   {
      question:
         "State true or false — “PLM handles a product completely, from single part of the product to entire portfolio of that product”.",
      answers: ["True", "False"],
      correctAnswer: "True",
   },
   {
      question: "In PLM, how many phases does a product lifecycle have?",
      answers: ["3", "4", "5", "6"],
      correctAnswer: "5",
   },
   {
      question:
         "__ is direct/indirect views of physical world environments which are “augmented” with computer-generated superimposed images",
      answers: [
         "Augmented Reality",
         "Virtual Reality",
         "Both (a) and (b)",
         "Neither (a) nor (b)",
      ],
      correctAnswer: "Augmented Reality",
   },
   {
      question: "What are the four different types of Augmented Reality?",
      answers: [
         "Marker-Based, Markerless, Fully-immersive, Semi-immersive",
         "Marker-Based, Markerless, Non-immersive, Superimposition Based",
         "Marker-Based, Non-immersive, Fully-immersive, Semi-immersive",
         "Marker-Based, Markerless, Projection Based, Superimposition Based",
      ],
      correctAnswer:
         "Marker-Based, Markerless, Projection Based, Superimposition Based",
   },
   {
      question:
         "__ augmented reality is commonly utilized for mapping directions.",
      answers: [
         "Marker-based",
         "Markerless",
         "Projection Based",
         "Superimposition Based",
      ],
      correctAnswer: "Markerless",
   },
   {
      question:
         "Which VR type uses head-mounted displays and motion-detecting devices to simulate user’s experiences?",
      answers: [
         "Fully-immersive simulations",
         "Semi-immersive simulations",
         "Non-immersive simulations",
         "Both (a) and (b)",
      ],
      correctAnswer: "Fully-immersive simulations",
   },
   {
      question:
         "State true or false — “Linear regression, logistic regression, random forest, decision tree are some of the most popular unsupervised learning algorithms”.",
      answers: ["True", "False"],
      correctAnswer: "False",
   },
   {
      question:
         "A computer program without AI uses _ method whereas computer program with AI uses method",
      answers: [
         "Large database and algorithmic search, Large knowledge base and heuristic search",
         "Large knowledge base and heuristic search, Large database and algorithmic search",
         "Large knowledge base and algorithmic search, Large database and heuristic search",
         "None of the above",
      ],
      correctAnswer:
         "Large database and algorithmic search, Large knowledge base and heuristic search",
   },
   {
      question: "Which of the following is correct?",
      answers: [
         "Machine Learning ⊆ Deep Learning ⊆ Artificial Intelligence",
         "Deep Learning ⊆ Artificial Intelligence ⊆ Machine Learning",
         "Deep Learning ⊆ Machine Learning ⊆ Artificial Intelligence",
         "Artificial Intelligence ⊆ Machine Learning ⊆ Deep Learning",
      ],
      correctAnswer:
         "Deep Learning ⊆ Machine Learning ⊆ Artificial Intelligence",
   },
   {
      question: "Big data consists of __.",
      answers: [
         "Both structured and non-structured data",
         "Only structured data",
         "Only non-structured data",
         "None of the above",
      ],
      correctAnswer: "Both structured and non-structured data",
   },
   {
      question: "What does the word “veracity” indicate in Big Data?",
      answers: [
         "It indicates the data which have no restriction over the input data formats.",
         "It indicates velocity of generation of data.",
         "It indicates the data whose meaning is constantly changing.",
         "It indicates biasness in the data, unusualness and noise in data.",
      ],
      correctAnswer:
         "It indicates biasness in the data, unusualness and noise in data.",
   },
   {
      question:
         "Q.1. Protection of internet-connected systems from cyber-attacks is known as ___.",
      answers: [
         "Network security",
         "Internet security",
         "Web security",
         "Cybersecurity",
      ],
      correctAnswer: "Cybersecurity",
   },
   {
      question:
         "Q.2. In which category of countermeasure does an application firewall fall?",
      answers: [
         "Hardware",
         "Software",
         "Both (a) and (b)",
         "None of the above",
      ],
      correctAnswer: "Software",
   },
   {
      question:
         "Q.3. State true or false — “Cybersecurity is recognized as a subset of information security”.",
      answers: ["True", "False"],
      correctAnswer: "False",
   },
   {
      question:
         "Q.4. Which of the following is/are correct regarding network security?",
      answers: [
         "It provides protection from unofficial access, improper use, fault, deletion, demolition",
         "It is an analytical action which categorizes information benefits.",
         "It ensures the protection of applications from outer threats.",
         "All of the above",
      ],
      correctAnswer:
         "It provides protection from unofficial access, improper use, fault, deletion, demolition",
   },
   {
      question: "Q.5. What is a malware?",
      answers: [
         "A computer program which is used to disturb the computer user, such as computer viruses, spyware etc.",
         "A computer program which breaks security policy to get critical information, which is typically secured.",
         "A computer program which provides a facility to the attacker in which the attacker locks the user’s computer files by using an encryption and demand some money to unlock them.",
         "None of the above",
      ],
      correctAnswer:
         "A computer program which is used to disturb the computer user, such as computer viruses, spyware etc.",
   },
   {
      question: "Q.6. What is SDCMA stand for?",
      answers: [
         "Software-Defined Cloud Management Architecture",
         "Software-Developed Cloud Manufacturing Architecture",
         "Software-Developed Cloud Management Architecture",
         "Software-Defined Cloud Manufacturing Architecture",
      ],
      correctAnswer: "Software-Defined Cloud Management Architecture",
   },
   {
      question:
         "Q.7.What are the three key differences between IIoT and Automation?",
      answers: [
         "Connectivity, advanced analytics, and IT tools and methodologies",
         "Ubiquitous sensing, advanced analytics, and IT tools and methodologies",
         "Advance sensing, connectivity, and IT tools and methodologies",
         "Ubiquitous sensing, connectivity, and advanced analytics",
      ],
      correctAnswer:
         "Ubiquitous sensing, advanced analytics, and IT tools and methodologies",
   },
   {
      question:
         "What is the role of optimum scheduling in transportation & logistics?",
      answers: [
         "It provides good customer services by reducing cancellation and delays.",
         "It provides better safety to both the on boarded passengers and machines.",
         "It reduces maintenance expenses.",
         "It enhances end-to-end automation.",
      ],
      correctAnswer:
         "It provides good customer services by reducing cancellation and delays.",
   },
   {
      question:
         "Which one of the following digital industrial companies coined the term, Industrial Internet?",
      answers: [
         "Siemens Global",
         "General Electric",
         "Accenture",
         "Digital Industry",
      ],
      correctAnswer: "General Electric",
   },
   {
      question:
         "The ______ started with the invention of internal combustion engines and electricity",
      answers: [
         "First Stage of the Industrial Revolution",
         "Second Stage of the Industrial Revolution",
         "Third Stage of the Industrial Revolution",
         "Fourth Stage of the Industrial Revolution",
      ],
      correctAnswer: "Second Stage of the Industrial Revolution",
   },
   {
      question: "Why is outage a huge problem in power industries?",
      answers: [
         "Because the service provided by any power industry is very large.",
         "Because power lines and other equipment are not mobile.",
         "Because replacing a broken equipment is hard.",
         "Because locating a broken power line or equipment is not an easy task.",
      ],
      correctAnswer:
         "Because locating a broken power line or equipment is not an easy task.",
   },
   {
      question: "The emergence of __ system will replace the isolated systems",
      answers: ["Edge-based", "Cloud-based", "Real-time", "All of the above"],
      correctAnswer: "Cloud-based",
   },
   {
      question: "Which of the following is a sensors technology manufacturer?",
      answers: ["NVDIA", "General Electric", "Intel", "Honeywell"],
      correctAnswer: "Honeywell",
   },
   {
      question: "What are the three main modules in PLC architecture?",
      answers: [
         "CPU, power supply, and I/O",
         "Sensors, processor, and actuation",
         "Sensors, CPU, and power supply",
         "Sensors, CPU, and network",
      ],
      correctAnswer: "CPU, power supply, and I/O",
   },
   {
      question:
         "Which of the following is not an actuators technology manufacturer?",
      answers: ["MOOG", "SPAT", "ADAFRUIT", "ZABER"],
      correctAnswer: "ADAFRUIT",
   },
   {
      question:
         "Q.1. Lumada is an IoT platform with advanced AI-based analytics. Which of the following companies created Lumada?",
      answers: ["Boeing", "Hitachi", "Amazon", "Google"],
      correctAnswer: "Hitachi",
   },
   {
      question:
         "Q.2. Which type of reference architecture for IIoT enables quick device-to-device integrations, automated data delivery of applications within the buses, isolation of hierarchical subsystems, and integrations of sensors and actuators ??",
      answers: [
         "Three-tier IIoT architecture",
         "Layered Databus IIoT architecture",
         "Gateway-based IIoT architecture",
         "Virtual IIoT architecture",
      ],
      correctAnswer: "Layered Databus IIoT architecture",
   },
   {
      question:
         "Q.3. Values for customer segments in a Business Model can be categorized as _____.",
      answers: [
         "Qualitative",
         "Quantitative",
         "Both a and b",
         "None of the above",
      ],
      correctAnswer: "Both a and b",
   },
   {
      question:
         "Q.4. Which of the following properties is/are part of the Outcome-based Business Model?",
      answers: [
         "Customers are relieved from the responsibilities of ownership and maintenance.",
         "Businesses deliver to the customer the outcome that the product/service provides.",
         "It reduces the negotiation cycle.",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Q.5. In which of the business models does businesses virtually consolidate and share their IoT-enabled assets among multiple customers or with other business entities in exchange of revenue?",
      answers: [
         "Asset-Sharing Model.",
         "Outcome-based Model.",
         "Subscription Model.",
         "None of the above",
      ],
      correctAnswer: "Asset-Sharing Model.",
   },
   {
      question:
         "Q.6. What is/are the challenges of implementing IoT-as-a-Service?",
      answers: [
         "Product compatibility",
         "Better customer relation",
         "Reduced licensing cost",
         "None of the above",
      ],
      correctAnswer: "Product compatibility",
   },
   {
      question: "Q.7. Platform-as-a-Service is a type of_______________.",
      answers: [
         "Cloud-based IIoT business model",
         "Service-oriented IIoT business model",
         "Process-oriented business model",
         "None of the above",
      ],
      correctAnswer: "Cloud-based IIoT business model",
   },
   {
      question: "Q.8. What is/are the challenges(s) of IIoT business model?",
      answers: [
         "Lack of interoperability",
         "Data privacy and security",
         "Increased cost",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Q.9. Which one of the following is/are core competency(ies) of the Cloud-based IIoT business model?",
      answers: [
         "Platform",
         "Data",
         "Software infrastructure",
         "All of the above",
      ],
      correctAnswer: "Software infrastructure",
   },
   {
      question: "Q.10. Which of the following defines IIRA?",
      answers: [
         "It is a standard architecture for IIoT systems",
         "It is a business model for IIoT",
         "It is a factory manufacturing IoT products",
         "It is the fourth stage of the Industrial Revolution",
      ],
      correctAnswer: "It is a standard architecture for IIoT systems",
   },
   {
      question: "Q.11. What is the function of leading KPI?",
      answers: [
         "Leading KPI is used to predict the economy",
         "Leading KPI is used to measure the changes in economy after it has begun",
         "Leading KPI is used as a technical indicator of the economy after it has begun",
         "Leading KPI captures the number of fatalities for OSH",
      ],
      correctAnswer: "Leading KPI is used to predict the economy",
   },
   {
      question: "Q.12. What is Industrial Internet Consortium?",
      answers: [
         "A for-profit organization for promotion of open standards",
         "A non-profit organization for promotion of open standards",
         "A software platform",
         "All of the above",
      ],
      correctAnswer:
         "A non-profit organization for promotion of open standards",
   },
   {
      question:
         "Q.13. Which of the following is/are not part of the IIRA Framework?",
      answers: [
         "Stakeholder",
         "Viewpoint",
         "Architecture Frame",
         "Position Frame",
      ],
      correctAnswer: "Position Frame",
   },
   {
      question: "Q.14. How many viewpoints are there in the IIRA?",
      answers: ["6", "4", "5", "3"],
      correctAnswer: "4",
   },
   {
      question: "Q.15. What is Role in context of the Usage viewpoint of IIRA?",
      answers: [
         "Describes the functional component of the task maps.",
         "Coordination of specific tasks",
         "Set of capacities assumed by an entity or organization",
         "All of the above",
      ],
      correctAnswer: "Set of capacities assumed by an entity or organization",
   },
   {
      question:
         "What are the benefits of using sensor in industrial applications?",
      answers: [
         "Real-time monitoring",
         "Improving visibility",
         "Remote diagnosis",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question: "What is the function of LM 35 sensor?",
      answers: [
         "Analog temperature monitoring",
         "Digital temperature monitoring",
         "Analog humidity monitoring",
         "Digital humidity monitoring",
      ],
      correctAnswer: "Analog temperature monitoring",
   },
   {
      question:
         "ADXL335 sensor can generate the magnitude and direction of the acceleration. True or false?",
      answers: ["True", "False"],
      correctAnswer: "True",
   },
   {
      question:
         "MQ-2 sensor is used for measuring the concentration of which of the following gases ?",
      answers: [
         "Helium, Argon, Neon",
         "Nitrogen, Hydrogen, Oxygen",
         "LPG, Propane, Hydrogen",
         "All of the above",
      ],
      correctAnswer: "LPG, Propane, Hydrogen",
   },
   {
      question:
         "____ sensor is used to measure time-varying stresses and strains in ferromagnetic materials?",
      answers: [
         "Torque",
         "Acceleration",
         "Magnetostrictive",
         "None of the above",
      ],
      correctAnswer: "Magnetostrictive",
   },
   {
      question:
         "MOS is one of the electrical variations of gas sensing methods. What is the full form of MOS?",
      answers: [
         "Metal Oxide Semiconductors",
         "Metal Oxide Sensing",
         "Monitoring Olfactory Sensor",
         "Moisture Onsite Sensing",
      ],
      correctAnswer: "Metal Oxide Semiconductors",
   },
   {
      question: "What is/are the requirements of industrial communication?",
      answers: [
         "Real-time communication",
         "Low latency",
         "Low jitter",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question: "Industrial Ethernet is used in scenarios that require _?",
      answers: [
         "Clock synchronization",
         "Periodic I/O data transfer",
         "Local Area Network of field devices",
         "All of the above",
      ],
      correctAnswer: "Clock synchronization",
   },
   {
      question:
         "Profinet in industrial communication is based on which of the following technologies?",
      answers: ["Fieldbus", "Industrial Ethernet", "Profibus", "DeviceNet"],
      correctAnswer: "Industrial Ethernet",
   },
   {
      question:
         "How many active connections or sockets are supported by ModBus-TCP, simultaneously?",
      answers: ["10", "8", "5", "254"],
      correctAnswer: "10",
   },
   {
      question:
         "Which of the following methods is used by EtherCat for bit error recognition?",
      answers: ["Hamming code", "CRC checksum", "Parity check", "Binary check"],
      correctAnswer: "CRC checksum",
   },
   {
      question: "What is the full form of Profinet?",
      answers: [
         "Process Field Network",
         "Public Field Network",
         "Process Full Network",
         "Private Field Networking",
      ],
      correctAnswer: "Process Field Network",
   },
   {
      question:
         "What is the maximum number of subscribers supported by the Interbus?",
      answers: ["512", "215", "125", "251"],
      correctAnswer: "512",
   },
   {
      question: "Select the statement that best describes Tactile Internet.",
      answers: [
         "It enables haptic communication",
         "It enables real-time transmission of touch, sense and actuation",
         "Both a and b",
         "None of the above",
      ],
      correctAnswer: "Both a and b",
   },
   {
      question: "What is the frequency spectrum for mmWave communication?",
      answers: ["30-300 GHz", "30-300 KHz", "30-300 MHz", "30-300 Hz"],
      correctAnswer: "30-300 GHz",
   },
   {
      question: "What is the maximum payload of a SIGFOX message?",
      answers: ["12 bytes", "140 bytes", "100 bits", "257 bytes"],
      correctAnswer: "12 bytes",
   },
   {
      question: "Which of the following modulation techniques is used by LoRA?",
      answers: [
         "Frequency-hopping Spread Spectrum Modulation",
         "Direct-sequence Spread Spectrum Modulation",
         "Chirp Spread Spectrum Modulation",
         "Time-hopping Spread Spectrum Modulation",
      ],
      correctAnswer: "Chirp Spread Spectrum Modulation",
   },
   {
      question:
         "Which of the following libraries is used to work with LoRA along with NodeMCU?",
      answers: [
         "DHT Sensor Library",
         "MESH library",
         "Radiohead library",
         "Stepper library",
      ],
      correctAnswer: "Radiohead library",
   },
   {
      question:
         "Which of the following protocols is used in the physical and MAC layer of the Zigbee communication protocol?",
      answers: [
         "IEEE 802.3.4",
         "IEEE 802.15.4",
         "IEEE 804.15.4",
         "IEEE 805.3.4",
      ],
      correctAnswer: "IEEE 802.15.4",
   },
   {
      question: "What is a coordinator device in Zigbee network?",
      answers: [
         "It is a device to relay information to other nodes in the network",
         "It is a node to generate power for the other nodes in the network",
         "It is only connected to the parent node with no data relaying",
         "It is the root of the network and acts as a bridge between different networks",
      ],
      correctAnswer:
         "It is the root of the network and acts as a bridge between different networks",
   },
   {
      question:
         "XCTU is a software for configuration of which of the following devices?",
      answers: ["NodeMCU", "LoRa", "Xbee", "Bluetooth"],
      correctAnswer: "Xbee",
   },
   {
      question: "What is/are the characteristic(s) of IIoT data?",
      answers: [
         "Correlation in space, time and other dimensions",
         "Temporal and causal relationships in data",
         "Polymorphism",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "What is the function of Rule-based engine in Complex Event Processing (CEP)?",
      answers: [
         "Extract causal and temporal patterns using predefined rules",
         "Provides services according to device functionality",
         "Handle single data stream at a time",
         "Batch processing",
      ],
      correctAnswer:
         "Extract causal and temporal patterns using predefined rules",
   },
   {
      question:
         "Middleware is a software layer between infrastructure layer and application layer IIoT. True or false?",
      answers: ["True", "False"],
      correctAnswer: "True",
   },
   {
      question:
         "What are the different types of business processing analytics?",
      answers: [
         "Industrial, private, public",
         "Descriptive, prescriptive, predictive",
         "Actuation and sensing",
         "Predictive, visualization, actuation",
      ],
      correctAnswer: "Descriptive, prescriptive, predictive",
   },
   {
      question:
         "What type of analytics is supported by MIDAS: IoT/M2M platform?",
      answers: [
         "Batch analytics",
         "Runtime analytics",
         "Both a and b",
         "None of the above",
      ],
      correctAnswer: "Both a and b",
   },
   {
      question:
         "Industrial rechargeable sensor network uses ____ for grid-based routing and charging. Fill in the blanks.",
      answers: [
         "Proactive algorithm",
         "Reactive algorithm",
         "Genetic algorithm",
         "TCAM",
      ],
      correctAnswer: "Proactive algorithm",
   },
   {
      question:
         "What are the 4 major components of an industrial control system?",
      answers: [
         "Set points, process variables, controllers, and manipulating variables",
         "Data plane, control plane, variables, and controllers",
         "Set points, dynamic points, variables, and controllers",
         "Feedback loop, controllers, variables, and actuation",
      ],
      correctAnswer:
         "Set points, process variables, controllers, and manipulating variables",
   },
   {
      question:
         "How many types of control loops are there in industrial control system?",
      answers: ["Two", "Four", "Three", "Six"],
      correctAnswer: "Two",
   },
   {
      question:
         "Which of the following types of industrial control systems is used for a highly distributed industrial plant?",
      answers: ["SCADA", "PLC", "DCS", "None of the above"],
      correctAnswer: "DCS",
   },
   {
      question: "Which of the following is not a part of IIoT analytics?",
      answers: [
         "Real time data analysis",
         "Dynamic operations optimization",
         "Prognostic maintenance",
         "Renewable energy",
      ],
      correctAnswer: "Renewable energy",
   },
   {
      question:
         "Prescriptive analytics is one of the categories of IIoT analytics. True or False?",
      answers: ["True", "False"],
      correctAnswer: "True",
   },
   {
      question:
         "Volume, veracity, velocity are the characteristics of which of the following entity?",
      answers: ["SDN", "Image processing", "Big data", "Machine learning"],
      correctAnswer: "Big data",
   },
   {
      question:
         "Feature engineering is absent in which of the following tools or algorithms?",
      answers: [
         "Machine learning",
         "Deep learning",
         "Both a and b",
         "Clustering",
      ],
      correctAnswer: "Deep learning",
   },
   {
      question: "What is the purpose of diagnostic analytics?",
      answers: [
         "Detect irregular behavior of assets quickly in the timescale of milliseconds",
         "Identify the root cause of an anomaly in the timescale of minutes",
         "Inform about remaining useful life of an asset",
         "None of the above",
      ],
      correctAnswer:
         "Identify the root cause of an anomaly in the timescale of minutes",
   },
   {
      question: "How many different categories of clustering are there?",
      answers: [
         "2, hard and soft clustering",
         "2, long and short clustering",
         "2, labeled and unlabelled clustering",
         "No categories",
      ],
      correctAnswer: "2, hard and soft clustering",
   },
   {
      question: "Fuzzy c-Means Clustering can be used when –",
      answers: [
         "Data points may belong to more than one clusters",
         "Faster clustering is required",
         "Both a and b",
         "Data points strictly belong to only one cluster",
      ],
      correctAnswer: "Both a and b",
   },
   {
      question:
         "Which of the following statements is/are true about linear regression?",
      answers: [
         "It is an unsupervised learning algorithm",
         "It is used to label the data",
         "It is use for prediction of values",
         "All of the above",
      ],
      correctAnswer: "It is use for prediction of values",
   },
   {
      question:
         "Select the machine learning-base IIoT application(s) used in the retail sector?",
      answers: [
         "Drug discovery",
         "Product recommendation",
         "Dynamic price setup",
         "All of the above",
      ],
      correctAnswer: "Product recommendation",
   },
   {
      question: "Select the correct statement.",
      answers: [
         "Artificial intelligence is a subset of machine learning",
         "Machine learning is a subset of deep learning",
         "Machine learning is a subset of artificial intelligence",
         "Artificial intelligence is a subset of deep learning",
      ],
      correctAnswer: "Machine learning is a subset of artificial intelligence",
   },
   {
      question: "What does deep in deep learning refer to?",
      answers: [
         "Number of visible neurons",
         "Number of hidden layers",
         "Number of deep neurons",
         "Number of deep layers",
      ],
      correctAnswer: "Number of hidden layers",
   },
   {
      question:
         "What is/are the critical requirement(s) of deep learning applications?",
      answers: [
         "Large amount of data",
         "High quality data",
         "Both a and b",
         "Small amount of data",
      ],
      correctAnswer: "Both a and b",
   },
   {
      question:
         "Which of the following is/are example(s) of Software-as-a-Service?",
      answers: ["MindSphere", "Microsoft Azure", "DropBox", "All of the above"],
      correctAnswer: "DropBox",
   },
   {
      question: "What is/are the characteristic(s) of Good SLA?",
      answers: ["Achievable", "Meaningful", "Affordable", "All of the above"],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which of the following is/are the limitation(s) of cloud-based approaches in IIoT?",
      answers: [
         "Unlimited storage",
         "Interoperability",
         "Cost efficient",
         "Higher latency",
      ],
      correctAnswer: "Higher latency",
   },
   {
      question: "What are the advantages of using fog computing in IIoT?",
      answers: [
         "Consistent release of data from sensors and machines",
         "Need for immediate action and quick response",
         "Data may be critical as well as time-sensitive",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Organize the elements of fog computing architecture in ascending order of data processing delay.",
      answers: [
         "Industrial end devices, Fog devices, and Cloud",
         "Industrial end devices, Cloud, and Fog devices",
         "Cloud, Industrial end devices, and Fog Devices",
         "None of the above",
      ],
      correctAnswer: "Industrial end devices, Fog devices, and Cloud",
   },
   {
      question:
         "Which of the following is/are the characteristic(s) of fog-enabled IIoT?",
      answers: [
         "Real-time monitoring and visualization",
         "Shrinkable processing architecture",
         "Increased overall cost",
         "All of the above",
      ],
      correctAnswer: "Real-time monitoring and visualization",
   },
   {
      question:
         "What are the advantages of using fog-based architecture in the smart grid and power industry?",
      answers: [
         "Dynamic demand of appliances",
         "Bi-directional communication between the consumer and supplier",
         "Advanced metering infrastructure for bi-directional communication",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Select the advantages of fog-based architecture in the oil and gas industry.",
      answers: [
         "Offering real-time advanced operation",
         "Detection of unusual events",
         "Step by step automation",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which of the following data type is used in the R programming language?",
      answers: ["Logical", "Float", "Double", "String"],
      correctAnswer: "Logical",
   },
   {
      question: "Which of the following option is correct?",
      answers: [
         "e1071: Network analysis tools",
         "rpart: Regression tree etc",
         "nnet: Fuzzy clustering, support vector machine, naïve bayes classifier etc",
         "randomForest: Feedforward neural network etc",
      ],
      correctAnswer: "rpart: Regression tree etc",
   },
   {
      question: "Why is Julia programming used?",
      answers: [
         "Open source",
         "Distributed computation and parallelism possible",
         "Support efficiently Unicode",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which of the following options is/are valid for the Julia programming language?",
      answers: [
         "Use println() is used to print",
         "Variables can be assigned without defining the type",
         "Assigning strings",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question: "Select the correct cloud computing service model (s).",
      answers: [
         "Infrastructure-as-a-Service",
         "Sensing-as-a-Service",
         "Communication-as-a-Service",
         "All of the above",
      ],
      correctAnswer: "All of the aboves",
   },
   {
      question:
         "Which of the following properties is/are valid for a data center network?",
      answers: ["Stable", "Secure", "Reliable", "All of the above"],
      correctAnswer: "All of the above",
   },
   {
      question: "What is SDN?",
      answers: [
         "Restructuring the current network infrastructure for improved network management",
         "It is not a new technology – rather reshaping the current network architecture",
         "Control and data planes are decoupled from the traditional forwarding devices",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question: "Which of the following aspects is/are true for SDN?",
      answers: [
         "Rule placement",
         "Controller placement",
         "Security",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question: "Select the correct application (s) of SDN.",
      answers: [
         "WSN management",
         "IoT applications",
         "IIoT applications",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "The mining industry uses ____ to load/unload mining materials.",
      answers: ["Conveyer-belt", "Roller", "Drum", "None of the above"],
      correctAnswer: "Conveyer-belt",
   },
   {
      question: "What does the abbreviation, TSCH, stands for?",
      answers: [
         "Time slotted channel hopping",
         "Time scheduling channel hopping",
         "Time scheduled communication hopping",
         "None of the above",
      ],
      correctAnswer: "Time slotted channel hopping",
   },
   {
      question:
         "Which type of communication is used in time slotted channel hopping?",
      answers: [
         "Deterministic communication",
         "Non-deterministic communication",
         "Predictive communication",
         "None of the above",
      ],
      correctAnswer: "Deterministic communication",
   },
   {
      question: "What is/are the objective (s) satisfied in the IETF 6TiSCH?",
      answers: [
         "Unreliable link – low power and lossy network",
         "Control overhead due to message exchange between SDN controller and devices",
         "Increased jitter",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "In which layer, Software-Defined 6TiSCH supports the slicing mechanism?",
      answers: ["Layer 2", "Layer 1", "Layer 3", "Layer 4"],
      correctAnswer: "Layer 2",
   },
   {
      question: "μSDN incorporates features for minimizing ____ overhead.",
      answers: ["Data", "Controller", "Transmission", "All of the above"],
      correctAnswer: "Controller",
   },
   {
      question: "SD-Edge IIoT architecture comprises of ____.",
      answers: [
         "Cluster head",
         "Industrial cloud",
         "Edge network",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "What is/are the basic step(s) of the IIoT security risk management?",
      answers: [
         "Avoiding risks",
         "Mitigating risks",
         "Outsourcing, accepting, and balancing residual risks",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Select the correct cyber attacker class(es) from the following options.",
      answers: [
         "Outsourced firms",
         "Internal unethical employees",
         "Organized crime groups",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which of the following attack vector(s) is/are applicable in the application layer?",
      answers: [
         "Data spoofing",
         "SQL injection",
         "All of the options",
         "Reversal attack",
      ],
      correctAnswer: "All of the options",
   },
   {
      question:
         "The different type(s) of IIoT attack vectors in the physical layer is/are ____.",
      answers: [
         "DoS or DDoS",
         "Replay attack",
         "Reversal attack",
         "None of the above",
      ],
      correctAnswer: "None of the above",
   },
   {
      question:
         "The different type(s) of IIoT attack vectors in the network layer is/are ____.",
      answers: [
         "Data spoofing",
         "Reversal attack",
         "None of the options",
         "Impersonation attack",
      ],
      correctAnswer: "None of the options",
   },
   {
      question: "What is/are the benefit(s) of making factory smart?",
      answers: [
         "Reduced changeover time",
         "Reduced production time",
         "Flexibility and easy management",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question: "Kuka is a ____",
      answers: [
         "A German robotics maker company",
         "A German toy maker company",
         "A German mining company",
         "None of the above",
      ],
      correctAnswer: "A German robotics maker company",
   },
   {
      question:
         "What is/are the benefit(s) of maintaining transparency in the supply chain?",
      answers: [
         "Availability of real-time data about products",
         "Easier to find inefficiencies",
         "Easier to meet food safety regulations",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question: "What is/are the challenges associated with healthcare?",
      answers: [
         "Populations are aging all over the world",
         "Different diseases are increasing",
         "Expenditure of hospitals and medical clinic are increasing",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "The number of persons aged 60 years or over is expected to increase more than ____ during 2017-2050.",
      answers: ["Double", "Triple", "Quadruple", "Quintuple"],
      correctAnswer: "Double",
   },
   {
      question:
         "Which of the following factor(s) is/are considered in authentication in the context of software security?",
      answers: [
         "Identification of user",
         "Verification of credentials entered (local or remote)",
         "Protection of resources",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "The key factor(s) of software security in the context of plant security and safety is/are ____.",
      answers: [
         "Integrity",
         "Authentication",
         "Availability",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question: "What is/are the scope(s) of IoT in the facility management?",
      answers: [
         "Accessing new insights",
         "Implementing new technologies",
         "Addressing cost barriers",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which resource(s) is/are optimized in the IoT-based facility management system?",
      answers: ["Manpower", "Assets", "Technology", "All of the above"],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which parameter is monitored by the device developed by Dexcom?",
      answers: ["ECG", "Blood", "Glucose", "Respiration rates"],
      correctAnswer: "Glucose",
   },
   {
      question:
         "“Asthma is lifelong disease, can be controlled, not cured” __ state whether the following statement is true or false.",
      answers: ["True", "False"],
      correctAnswer: "True",
   },
   {
      question:
         "Which of the following parameter(s) is/are monitored by ADAMM?",
      answers: [
         "Asthma",
         "Blood pressure",
         "Body temperature",
         "Oxygen saturation level",
      ],
      correctAnswer: "Asthma",
   },
   {
      question: "Select the correct option (s) from the below.",
      answers: [
         "Google Fit: Keeps track of different physical activities",
         "Health Assistant: Keeps track of health condition",
         "Fingerprint Thermometer: Determine body temperature from the fingerprint",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which of the following feature(s) act(s) as the drivers of IIoT in a power plant?",
      answers: [
         "Low cost powerful chips",
         "Standardization with IPV6",
         "Standardization with software technology",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which option(s) is/are included in the power flow of a smart grid?",
      answers: [
         "Reduced changeover time",
         "Reduced production time",
         "Flexibility and easy management",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question: "Inventory management activity entails ____.",
      answers: [
         "Controlling, overseeing, and ordering",
         "Storage",
         "Determine supply for sale",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question: "What is/are the component(s) of a facility management system?",
      answers: ["Buildings", "Finance", "People", "All of the above"],
      correctAnswer: "All of the above",
   },
   {
      question:
         "The IoT-based remote patient health monitoring system is more ____.",
      answers: ["Robust", "Costly", "Secure", "All of the above"],
      correctAnswer: "Robust",
   },
   //Week12
   {
      question: "The integration of IoT with industry ____",
      answers: [
         "Maximizes profit",
         "Minimizes profit",
         "Does not affect profit optimization",
         "All of the above",
      ],
      correctAnswer: "Maximizes profit",
   },
   {
      question:
         "Which of the following type(s) of analytics is/are used in the oil and gas industry workflow?",
      answers: [
         "Predictive",
         "Prescriptive",
         "Diagnostic",
         "None of the above",
      ],
      correctAnswer: "Predictive",
   },
   {
      question:
         "IoT in the oil and gas industry improves operational excellence by using ____ maintenance.",
      answers: ["Predictive", "Prescriptive", "Diagnostic", "Descriptive"],
      correctAnswer: "Predictive",
   },
   {
      question: "IoT increases customer loyalty by ____.",
      answers: [
         "Connecting business and car",
         "Smart application",
         "Monitoring energy consumption profiles",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which of the following option(s) is/are included in a case study?",
      answers: [
         "A small geographical area",
         "A very limited number of individuals",
         "Both a and b",
         "All of the above",
      ],
      correctAnswer: "Both a and b",
   },
   {
      question: "Which of the following point(s) is/are true for a case study?",
      answers: [
         "Provides in-depth knowledge about the topic",
         "Provides clarity of concepts regarding the research topic",
         "Both a and b",
         "None of the above",
      ],
      correctAnswer: "Both a and b",
   },
   {
      question: "IoT helps the chemical industry by ____.",
      answers: [
         "Reducing energy expenses",
         "Minimizing supply chain risk",
         "Improving logistics",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "In the context of 'IoT in Chemical Industry,' the predictive maintenance ____.",
      answers: [
         "Reduces equipment breakdown",
         "Increases equipment breakdown",
         "Does not affect equipment breakdown",
         "All of the above",
      ],
      correctAnswer: "Reduces equipment breakdown",
   },
   {
      question:
         "Which of the following option(s) is/are true for IoT sensors in the pharmaceutical industry?",
      answers: [
         "Deployed in production areas",
         "Access huge data of different manufacturing departments",
         "Able to control the areas remotely",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which of the following factor(s) is/are detected by IoT in the pharmaceutical industry?",
      answers: [
         "Adverse Drugs Reaction (ADR)",
         "Effects of pharmaceutical excipients",
         "Allergies",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question: "UAVs connected to IoT ____.",
      answers: [
         "Can be programmed once",
         "Cannot be programmed",
         "Can be programmed multiple times",
         "None of the above",
      ],
      correctAnswer: "Can be programmed multiple times",
   },
   {
      question:
         "Which of the following option correctly defines the first generation of UAVs?",
      answers: [
         "Fundamental Remote Control UAVs of different forms",
         "Static design, fixing camera mount, still photography, video recording, and manual steering control",
         "Added two-axis gimbals, essential safety models. HD video, assisted guiding",
         "Transformable designs with 360°gimbals, high quality video or higher-value instrumentation, improved piloting modes",
      ],
      correctAnswer: "Fundamental Remote Control UAVs of different forms",
   },
   {
      question: "In which area(s), UAV-based systems can be used?",
      answers: [
         "Agriculture",
         "Construction Sites",
         "Mining",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "Which of the following point(s) need to be considered for all industrial case studies?",
      answers: [
         "Transformation of existing processes for Industry 4.0 adoption",
         "Assessment of existing processes",
         "Target objectives",
         "All of the above",
      ],
      correctAnswer: "All of the above",
   },
   {
      question:
         "UAVs use recorded infrared, hyperspectral, and ultraviolet images to ____.",
      answers: [
         "Monitor crop health",
         "Analyze soil quality",
         "Both a and b",
         "None of the above",
      ],
      correctAnswer: "Both a and b",
   },
];

console.log(quizData.length);
const questionContainer = document.getElementById("question-container");
const answerButtonsContainer = document.getElementById(
   "answer-buttons-container"
);
const submitButton = document.getElementById("submit-button");
const nextButton = document.getElementById("next-button");
const nextAssign = document.getElementById("next-Assign");
const resultContainer = document.getElementById("result-container");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(questionData) {
   questionContainer.innerText = questionData.question;
   answerButtonsContainer.innerHTML = "";
   questionData.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer;
      button.classList.add("correctAnswer-button");
      button.addEventListener("click", () => {
         checkAnswer(answer, questionData.correctAnswer);
      });
      answerButtonsContainer.appendChild(button);
   });
}

function checkAnswer(selectedAnswer, correctAnswer) {
   var h3 = document.getElementById("demo");
   if (selectedAnswer === correctAnswer) {
      score++;

      h3.innerHTML = "Your Answer is Correct";
   } else {
      h3.innerHTML = `Correct Answer is: \n
      \r ${correctAnswer}`;
   }
   // alert(correctAnswer);

   answerButtonsContainer
      .querySelectorAll(".answer-button")
      .forEach((button) => {
         button.disabled = true;
         if (button.innerText === correctAnswer) {
            button.classList.add("correct");
         }
         if (button.innerText === selectedAnswer) {
            button.classList.add("selected");
         }
      });
   submitButton.style.display = "none";
   nextButton.style.display = "inline-block";
}

function showResult() {
   questionContainer.style.display = "none";
   answerButtonsContainer.style.display = "none";
   submitButton.style.display = "none";
   nextButton.style.display = "none";
   resultContainer.style.display = "block";
   resultContainer.innerText = `You scored ${score} out of ${quizData.length} questions.`;
}

showQuestion(quizData[currentQuestionIndex]);

submitButton.addEventListener("click", () => {
   const selectedButton = answerButtonsContainer.querySelector(".selected");
   if (selectedButton) {
      const selectedAnswer = selectedButton.innerText;
      const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
      checkAnswer(selectedAnswer, correctAnswer);
   }
});

nextButton.addEventListener("click", () => {
   currentQuestionIndex++;
   if (currentQuestionIndex < quizData.length) {
      var h3 = document.getElementById("demo");
      h3.innerHTML = "";
      showQuestion(quizData[currentQuestionIndex]);
      submitButton.style.display = "inline-block";
      nextButton.style.display = "none";
   } else {
      showResult();
   }
});

// nextAssign.addEventListener("click", () => {
//    var assg=0,n=0,q=1;
//    q++;
//    n=currentQuestionIndex%15;
//    assg=14-n;
//    currentQuestionIndex % 12==0 ? assg = 0 : assg++;
//    currentQuestionIndex+=assg;
//    console.log(currentQuestionIndex);
//    var h2 = document.getElementById("assg");
//    h2.innerHTML=`Assignment No ${q}`;
//    if (currentQuestionIndex < quizData.length) {
//       // var h3 = document.getElementById("demo");
//       // h3.innerHTML = "";
//       showQuestion(quizData[currentQuestionIndex]);
//       // submitButton.style.display = "inline-block";
//       // nextButton.style.display = "none";
//    } else {
//       showResult();
//    }
// });
function nextA(){
   var assg=0,n=0,q=1;
   q++;
   n=currentQuestionIndex%15;
   assg=14-n;
   currentQuestionIndex % 12==0 ? assg = 0 : assg++;
   currentQuestionIndex+=assg;
   console.log(currentQuestionIndex);
   var h2 = document.getElementById("assg");
   h2.innerHTML=`Assignment No ${q}`;
   if (currentQuestionIndex < quizData.length) {
      // var h3 = document.getElementById("demo");
      // h3.innerHTML = "";
      showQuestion(quizData[currentQuestionIndex]);
      // submitButton.style.display = "inline-block";
      // nextButton.style.display = "none";
   } else {
      showResult();
   }
}
