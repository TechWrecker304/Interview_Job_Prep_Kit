# Interview Helper Chrome Extension

## Overview

The Interview Helper is a Chrome Extension powered by OpenAI's GPT-4. It generates insights and advice based on a job description to assist users in their job interview preparation and career planning.

The extension provides:

- Top 10 Interview Questions and Suggested Answers
- Cheat Sheet of Topics and Answers Relative to Job Responsibilities
- Recommended Areas of a Resume to Highlight
- Suggested Training Curriculum Relevant to the Skillsets Needed
- Advice on a Career Path that Aligns with this Kind of Job

## Download

To download the Interview Helper extension, navigate to the project's GitHub page and click on the green `Code` button. Then, click `Download ZIP` to download the files.

## Installation

1. Extract the downloaded ZIP file.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable Developer mode by clicking the toggle switch at the top right.
4. Click on `Load unpacked` and select the extracted folder.
5. You should now see the Interview Helper extension in your list of installed extensions.

## Setup

Open the `config.js` file in a text editor and replace "YOUR_OPENAI_API_KEY" with your actual OpenAI API key:

const apiKey = "PASTE YOUR API KEY HERE";
Please note that usage of the OpenAI API may incur costs. Users are solely responsible for these costs.  Make sure you paste your key INSIDE the quotes.

## Usage
Highlight a job description on any webpage.
Click the Interview Helper icon in the Chrome Extensions bar.
Click one of the buttons to generate the desired output.
Prepare for Interview button generates Interview Questions and Answers, a Cheat Sheet, and Recommended Resume Highlights.
Career and Training Advice button generates a Suggested Training Curriculum and Career Path Advice.
View the generated insights and advice in the extension popup window.
Click on Save as HTML, Save as EML, or Save as TXT buttons to download the generated output.

## Disclaimer
The developers of this extension are not responsible for any API usage costs incurred while using the extension. It's the users' responsibility to monitor their usage and manage costs associated with their OpenAI account.