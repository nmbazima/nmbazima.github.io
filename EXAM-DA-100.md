# Exam-DA-100-ADWM-Power-BI
 Path to the **Exam DA-100: Analyzing Data with Microsoft Power BI**.

[Journey]: https://github.com/nmbazima/Exam-DA-100-ADWM-Power-BI/blob/main/assets/Microsoft-Data-Analyst-Associate.PNG 

#### The journey to Microsoft Certified: Data Analyst Associate
![ Journey ][Journey]

## MICROSOFT CLOUD SKILLS CHALLENGE
### Microsoft Ignite
#### Cloud Skills Challenge March 2021

![March2021](/assets/Microsoft%20Ignite%20Challenge.jpg)

I took this challenge because I am excited about designing and building scalable data models, cleaning and transforming data, and enabling advanced analytic capabilities that provide meaningful business value through easy-to-comprehend data visualizations.

After finishing the Microsoft Ignite Cloud Skills Challenge, I was issued with a free certification exam for **Exam DA-100: Analyzing Data with Microsoft Power BI**.

## Discover Data Analysis 

![Module1](/assets/data-analytics-and-microsoft.svg)

**In this module, I will explore the different roles in data and learn the different tasks of a data analyst.**

### Introduction

![DataAbundance](/assets/abundance-data-ss.png)

**Thoughts:** At work and home we get a lot of data, that is generated. From transactional data to social media.

**Notes**
At work the goal is not to overcome the challenge of understanding and using the data to positively effect change within the organization.

As Data Analysts we should be able to **tell a story with that data, unlocking its secrets**.

This can be done by developing reports that tell that story allowing the oganization to take action on that data.

The data must be accurate, in order to take advantage and be competitive, which will rely on acting on that data.

We need the ability to see metrics and clearly understand the meaning behind those metrics.

This will require working with other members who handle the data within the organization. This helps in overcoming challenges with insights on hidden values in data.

### Overview of data analysis

![Reporting](/assets/reporting-trusted-data-ss.png)

**Thoughts** Data analysis is the process of identifying, cleaning, transforming, and modeling data to find meaningful information.

**Notes**
The reports are the storytellers that help support critical analysis.

Core components of analytics are divided into these categories below:

##### Descriptive
Descriptive analytics assist in answering questions on what happened using historical data. These provide a summary of large datasets describing outcomes.

##### Diagnostic
Diagnostic analytics answer questions of why something happened, this helps basic descriptive anayltics, by using the findings from descriptive analytics to discover the cause of those events.

##### Predictive
Predictive analytics help answer questions of what will happen in the future. It uses historical data to identify trends and determin if they will recur. Tools provide valuable insights into what can happen in the future. Predictive analytics provide a variety of statistical and amchine learning techniques such as neural networks, decision tress and regression.

##### Prescriptive
Prescriptive analytics help answer questions about what actions should be taken to achieve a goal or target. Techniques of using insights from predictive analytics and machine learning strategies to find patterns in large datasets, can help estimate different outcomes, in uncertainty to make informed decisions.

##### Cognitive
Cognitive analytics attempt to draw inferences from existing data and patterns, and derive conclusions using knowledge bases, then add these findings back into the knowledge base for future inferences, self-learning feedback loops.


The data analysis process will capture data from trusted sources and shape it into something that is consumable, meaningful, and easily understood to help with the decision-making process.
---

### Roles in Data

Today's applications and projects can be large and intricate, often involving the use of skills and knowledge from numerous individuals. 

![DataRoles](/assets/roles-data-ss.png)

Excessive expansion of the size and different types of data has caused these roles to evolve into more specialized sets of skills that modernize and streamline the processes of data engineering and analysis.

##### Business analyst
A business analyst is closer to the business and is a specialist in interpreting the data that comes from the visualization.

##### Data analyst
Data analysts profile, clean, and transform data through visualization and reporting tools such as Microsoft Power BI. This includes design,build scalable and effective data models, and enable and implement the advanced analytics capabilities into reports for analysis. 

##### Data engineer
Data engineers provision and set up data platform technologies that are on-premises and in the cloud, they also manage and secure the flow of structured and unstructured data from multiple sources, such data platforms can be from relational databases, nonrelational databases, data streams, and file stores. 

##### Data scientist
Data scientists perform advanced analytics to extract value from data. Descriptive analytics evaluate data through a process known as exploratory data analysis (EDA).

##### Database administrator
A database administrator monitors and manages the overall health of a database and the hardware that it resides on, whereas a data engineer is involved in the process of data wrangling, in other words, ingesting, transforming, validating, and cleaning data to meet business needs and requirements.

### Tasks of a Data Analyst

![Tasks](/assets/tasks-data-analyst-ss.png)

**Thoughts** Data Analysts assist organizations gain valuable insights in the vast datalake they have. This requires them to work with various stakeholders in an organization.

##### Prepare
Before a report can be created, data must be prepared. Data preparation is the process of profiling, cleaning, and transforming your data to get it ready to model and visualize.

##### Model
 An effective data model makes reports more accurate, allows the data to be explored faster and more efficient, decreases time for the report writing process, and simplifies future report maintenance.

##### Visualize
The ultimate goal of the visualize task is to solve business problems, by using appropriate visualizations and interactions, the data analyst can provide an effective report that guides the reader through the content quickly and efficiently, therefore allowing the reader to follow a narrative into the data.

##### Analyze
The analyze task is an important step to understand and interpret the information that is displayed on the report. A Data Analyst, should understand the analytical capabilities of Power BI and use those capabilities to find insights, identify patterns and trends, predict outcomes, and then communicate those insights in a way that everyone can understand.

##### Manage
As a data analyst, they are responsible for the management of the Power BI assets ( including reports, dashboards, workspaces, datasets, and more), overseeing the sharing and distribution of items, such as reports and dashboards, and ensuring the security of Power BI assets.

### Summary
A data analyst performs tasks that help ensure that decisions are based on trusted data.

## Get Data in Power BI

![Module2](/assets/get-data.svg)

**In this module i will learn how to retrieve data from a wide variety of data sources, including Microsoft Excel, relational databases, and NoSQL data stores. Also learning how to improve performance while retrieving data.**

### Introduction

You’ve been tasked by senior leadership to create a suite of reports that are dependent on data in several different locations.


![DataSource](/assets/1-data-source-scenario-c.png)

The data repositories are different from each other, some are in Microsoft SQL Server, some are in Microsoft Excel, but all the data is related.

Power Query (the query engine used by Power BI and Excel) helps clean data, like renaming columns, replacing values, removing errors, and combining query results. After the data has been cleaned and organized, it will be ready to build reports in Power BI.

**Requirements in Exam**
Get data from different data sources
1. identify and connect to a data source
2. change data source settings
3. select a shared dataset or create a local dataset
4. select a storage mode
5. choose an appropriate query type
6. identify query performance issues
7. use Microsoft Dataverse
8. use parameters
9. use or create a PBIDS file
10. use or create a data flow
11. connect to a dataset using the XMLA endpoint

### Get data from files

A flat file is a type of file that has only one data table and every row of data is in the same structure. The file does not contain hierarchies (.csv) files, delimited text (.txt) files, and fixed width files. Microsoft Excel workbooks (.xlsx).

![Filetypes](/assets/2-file-types-c.png)

