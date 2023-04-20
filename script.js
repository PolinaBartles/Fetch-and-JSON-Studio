// TODO: add code here
window.addEventListener("load", async function () {
  let response;
  try {
    response = await fetch(
      "https://handlers.education.launchcode.org/static/astronauts.json"
    );
    console.log(response);
  } catch (error) {
    console.log("Caught that error:" + error);
  }

  let jsonData = await response.json();
  console.log(jsonData);

  let container = document.getElementById("container");
  let newMarkup = "";

  for (let i = 0; i < jsonData.length; i++) {
    const skills = jsonData[i].skills.join(", ");

    newMarkup += `<div class="astronaut">
                     <div class="bio">
                        <h3>${jsonData[i].firstName} ${jsonData[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${jsonData[i].hoursInSpace}</li>
                                <li>Active: ${jsonData[i].active}</li>
                                <li>Skills: ${skills}</li>
                            </ul>
                    </div>
                        <img class="avatar" src="${jsonData[i].picture}" alt="${jsonData[i].firstName} ${jsonData[i].lastName}">
                    </div>
  `;
  }
  container.innerHTML = newMarkup;
});
