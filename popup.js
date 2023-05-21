async function getHighlightedText() {
  return new Promise((resolve, reject) => {
    chrome.tabs.executeScript(
      {
        code: "window.getSelection().toString();",
      },
      function (selection) {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(selection[0]);
        }
      }
    );
  });
}

function displayResults(data) {
  let outputText = data.choices[0].message.content;

  // Add HTML tags
  outputText = outputText.replace(/(\r\n|\n|\r)/gm, "<br />"); // Replace newlines with <br>
  outputText = outputText.replace(/Section (\d+): (.*?)(<br \/>|$)/gm, "<h2>Section $1: $2</h2><br />"); // Replace section headers with <h2>

  document.getElementById("results").innerHTML = outputText;
}


document.getElementById("interviewAdvisorButton").addEventListener("click", async () => {
  const model = "gpt-4";
  const highlightedText = await getHighlightedText();

  // Show the loading spinner
  document.getElementById("loading").style.display = "block";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey,
    },
    body: JSON.stringify({
      model: model,
      messages: [
        {
          role: "user",
          content: `You are a career coach. Based on the following job description, generate the top 10 interview questions and answers one should be prepared for, and a cheat sheet of topics and answers relative to the job description tasks and responsibilities. Additionally outline which areas of a resume should be accentuated or highlighted to match this type of job. Job Description - ${highlightedText}`,
        },
      ],
      temperature: 0.8,
      max_tokens: 1000,
    }),
  });

  const data = await response.json();
  displayResults(data);

  // Hide the loading spinner
  document.getElementById("loading").style.display = "none";
});

document.getElementById("trainingButton").addEventListener("click", async () => {
  const model = "gpt-4";
  const highlightedText = await getHighlightedText();

  // Show the loading spinner
  document.getElementById("loading").style.display = "block";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey,
    },
    body: JSON.stringify({
      model: model,
      messages: [
        {
          role: "user",
          content: `You are a career coach. Based on the following job description, generate a training curriculum relevant to the skillsets needed and advice on a career path that aligns with this job. Job Description - ${highlightedText}`,
        },
      ],
      temperature: 0.8,
      max_tokens: 800,
    }),
  });

  const data = await response.json();
  displayResults(data);

  // Hide the loading spinner
  document.getElementById("loading").style.display = "none";
});


document.getElementById("resourcesButton").addEventListener("click", async () => {
  const model = "gpt-4";
  const highlightedText = await getHighlightedText();

  // Show the loading spinner
  document.getElementById("loading").style.display = "block";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey,
    },
    body: JSON.stringify({
      model: model,
      messages: [
        {
          role: "user",
          content: `You are a career coach. Based on the following job description generate a a list of online resources that are directly related to the topics and tasks in the requirements.  Where there is a mature website resource such as Wikipedia and the link include active hyperlinks to that resource. Also create a list of frameworks, publications, and guides that would be helpful such as a NIST SP guidance for example relative to the technology or requirement. Create all this in a nice formatted output for the user ensure all output aligns with this job. Job Description - ${highlightedText}`,
        },
      ],
      temperature: 0.8,
      max_tokens: 600,
    }),
  });

  const data = await response.json();
  displayResults(data);

  // Hide the loading spinner
  document.getElementById("loading").style.display = "none";
});



function saveAsHTML(content) {
  let blob = new Blob([content], {type: "text/html;charset=utf-8"});
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "output.html";
  link.click();
}

function saveAsText(content) {
  let blob = new Blob([content], {type: "text/plain;charset=utf-8"});
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "output.txt";
  link.click();
}

document.getElementById("saveAsHTML").addEventListener("click", function() {
  let content = document.getElementById("results").innerHTML;
  saveAsHTML(content);
});

document.getElementById("saveAsTXT").addEventListener("click", function() {
  let content = document.getElementById("results").textContent;
  saveAsText(content);
});
