# Kritter_assignment

Q1- Question 1: Normalize an Input String (Easy)
Problem Statement
Write a program that normalizes a given input string. Normalization includes the
following steps:
1. Remove any extra spaces from the beginning and end of the string.
2. Remove any special characters and punctuation, leaving only
alphanumeric characters and spaces.
3. Replace multiple spaces between words with a single space.
4. Convert the cleaned string to camel case (i.e., the first letter of each word is capitalized, and all other letters are in lowercase).
Input
A single string that may contain uppercase letters, extra spaces, and special
characters.
Output
A single normalized string in camel case.
Example
Input:
" Hello! World@ This is a Test!. ";
Output:
"Hello World This Is A Test"


Q2- Create a simple chatbot program that can answer questions based on a
predefined list of question-answer pairs. The chatbot should take in a user's
question and try to find the closest matching question from the predefined
questions by comparing words.
Input
● A list of question-answer pairs.
● A user’s input question (string).
Output
Return the answer corresponding to the closest matching question.
Example 
Question-answer pairs:
Question Answer
What is your name? My name is Chatbot.
How can I help you? I can assist you with your queries.
What is the weather today? The weather is sunny.
Input:
"What's the weather like today?";
Output:"The weather is sunny."

Q3- You are tasked with developing a program to rank a list of colleges based on user
preferences. Each college has a name, location, fees, and a current ranking. The
user can specify a preferred location, a maximum fee they are willing to pay, and
an important weight for both ranking and fees.
Filter Colleges by User Preferences:
● Only consider colleges that are in the preferred location specified by the
user.
● Further filter colleges by ensuring their fees are less than or equal to the
max fees provided by the user.
Assign a Score to Each College:
● The score will be calculated based on the college’s ranking and fees, with
each weighted according to the user's preference.
● The formula to calculate the score for a college is as follows:
Score=(Ranking × rankingWeight) + (Fees / maxFees  × feesWeight)
Sort Colleges by Score:
● After calculating the score for each eligible college, sort the colleges by
their scores in non-decreasing order (lower scores are better).
Output the College List:
● Output the list of colleges that meet the location and fees criteria, along with their calculated scores
Input
● A list of colleges represented as objects with the following attributes:
○ name (string)
○ location (string)
○ fees (integer)
○ ranking (integer)
● Four additional inputs:
○ preferred_location (string)
○ max_fees (integer)
○ ranking_weight (integer)
○ fees_weight (integer)
Output
A list of colleges that match the user’s preferences, sorted by their score in
non-decreasing order (lower scores are better).
Example
Colleges Table:
Name Location Fees Ranking
College A New York 20000 1
College B California 15000 2
College C New York 25000 3
College D New York 10000 4
Input:
String preferredLocation = "New York";
int maxFees = 20000;
int rankingWeight = 2;
int feesWeight = 1;
Output:
A list of colleges that match the user’s preferences, sorted by their score in
non-decreasing order (lower scores are better).
Name: College A, Location: New York, Fees: 20000, Ranking: 1, Score: 4.00
Name: College D, Location: New York, Fees: 10000, Ranking: 4, Score: 9.00