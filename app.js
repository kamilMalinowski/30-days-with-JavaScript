const challenges = [
    'JavaScript Drum Kit',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
]
const list = document.querySelector("ul");

for (let i = 0; i < challenges.length; i++) {
const html = `
    <!-- challenge ${i + 1} -->
    <li>
        <a class="${i <= 0 ? '' : 'disabled'}" href="https://www.kamil--m.com/education/30js-challenge/day/${i + 1}">
            <span>${challenges[i]} <br>(Day ${i + 1})</span>
            <img src="https://www.kamil--m.com/education/30js-challenge/img/challenge-${i <= 0 ? i + 1 : 30}.jpg" alt="challenge-${i + 1}">
        </a>
    </li>
    `;

list.innerHTML += html;
}