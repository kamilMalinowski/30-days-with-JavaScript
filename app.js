const challenges = [
  "JavaScript Drum Kit",
  "JS and CSS Clock",
  "CSS Variables",
  "Array Cardio Day 1",
  "Flex Panel Gallery",
  "Type Ahead",
  "Array Cardio Day 2",
  "Fun with HTML5 Canvas",
  "Dev Tools Domination",
  "Hold Shift and Check Checkboxes",
  "Custom Video Player",
  "Key Sequence Detection",
  "Slide in on Scroll",
  "JavaScript References VS Copying",
  "LocalStorage",
  "Mouse Move Shadow",
  "Sort Without Articles",
  "Adding Up Times with Reduce",
  "Webcam Fun",
  "Speech Detection",
  "Geolocation",
  "Follow Along Link Highlighter",
  "Speech Synthesis",
  "Sticky Nav",
  "Event Capture, Propagation, Bubbling and Once",
  "Stripe Follow Along Nav",
  "Click and Drag",
  "Video Speed Controller",
  "Countdown Timer",
  "Whack A Mole",
];
const num = 12;

document.querySelector(".done").innerHTML = num + 1;

const list = document.querySelector("ul");

for (let i = 0; i < challenges.length; i++) {
  const html = `
        <!-- challenge ${i + 1} -->
        <li class="${i <= num ? "" : "disabled"}">
            <a
                href="challenges/${ i + 1}">
                    <span>${challenges[i]} <br>(Day ${i + 1})</span>
                    <img 
                        src="img/challenge-${i <= num ? i + 1 : 30}.jpg"
                        alt="challenge-${i + 1}"
                    >
            </a>
        </li>
    `;

  list.innerHTML += html;
}
