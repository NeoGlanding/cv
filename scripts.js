'use strict';

const ids = ['form', 'experience', 'quote', 'about', 'achievements', 'thankyou'];
const [form, experience, quote, about, achievements, thankYou] = ids.map(id => document.getElementById(id));
const elements = [form, experience, quote, about, achievements, thankYou];

const submitHandler = () => {

}

const makeSchoolExp = (school, expertise, formal, years) => {
    const obj = {
        school,
        expertise,
        formal,
        years,
    }

    return obj;
}

const makeWorkExp = (place, division, desc, years) => {
    const obj = {
        place,
        division,
        desc,
        years
    }
    return obj;
}

const schoolExp = [makeSchoolExp('SMK Negeri 1 Cibinong', 'Computer Engineering and Networking', true, '2018-2021'), makeSchoolExp('NEVTIK Academy', 'Linux Administration', false, 2018)];
const workExp = [makeWorkExp('Badan Informasi Geospasial', 'IT Support', 'Internship', 2020), makeWorkExp('NEVTIK Academy', 'Linux Administration Mentor', 'Part-Time', '2019-2021'), makeWorkExp('SMK Negeri 1 Cibinong', 'Network Engineer', 'Part-Time', '2018-2021')];
console.log(workExp);

const renderWorkExp = (datas) => {
    datas.forEach(data => {
        const html = `
        <div class="experience-work__details">
            <h4><b>${data.place}</b></h4>
            <i>${data.division}; ${data.desc}</i>
            <p>${data.years}</p>
        </div>
        `
        document.getElementById('experience-work').insertAdjacentHTML('beforeend', html);
    });
}

const renderSchoolExp = (datas) => {
    datas.forEach(data => {
        const html = `
        <div class="experience-education__details">
            <h4><b>${data.school}</b></h4>
            <i>${data.expertise}; ${data.formal === true ? 'Formal': 'Informal'}</i>
            <p>${data.years}</p>
        </div>
        `
        document.getElementById('experience-education').insertAdjacentHTML('beforeend', html);
    });
}

renderSchoolExp(schoolExp);
renderWorkExp(workExp);
const renderQuotes = (data) => {
    const html = `
    <h3>${data.content}</h3>
    <i>${data.author}</i>`

    document.getElementById('quote').insertAdjacentHTML("beforeend", html);
}

const home = async (url) => {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    renderQuotes(json);
}

home('https://api.quotable.io/random');

const renderAbout = () => {
    about.style.display = 'inline-block';
    form.style.display = 'none';
    experience.style.display = 'none';
    quote.style.display = 'none';
    achievements.style.display = 'none';
}

const renderExperience = () => {
    about.style.display = 'none';
    form.style.display = 'none';
    experience.style.display = 'flex';
    quote.style.display = 'none';
    achievements.style.display = 'none';
}

const renderContact = () => {
    about.style.display = 'none';
    form.style.display = 'block';
    experience.style.display = 'none';
    quote.style.display = 'none';
    achievements.style.display = 'none';
}

const renderAchievement = () => {
    achievements.style.display = 'block';
    about.style.display = 'none';
    form.style.display = 'none';
    experience.style.display = 'none';
    quote.style.display = 'none';
}

const stuff = (opt) => {
    const a = `render${opt.value}()`;
    console.log(a);
    eval(a);
}

document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
    e.preventDefault();
    const [nameInput, emailInput, messageInput] = ['nameInput', 'emailInput', 'messageInput'].map(id => document.getElementById(id).value);
    const inputsVal = [nameInput, emailInput, messageInput];
    let inputs = document.querySelectorAll('input');
    if (!inputsVal.includes('')) {
        alert(`
        Name: ${nameInput}
        Email: ${emailInput}
        message: ${messageInput}
            `)
        document.getElementById('thanks-name').textContent = `${nameInput}`
        form.style.display = 'none'
        thankYou.style.animation = 'fadein 2s'
        thankYou.style.display = 'block';
        setTimeout(() => {
            thankYou.style.display = 'none'
            quote.style.display = 'block';
        }, 4000)
        setTimeout(() => {
            thankYou.style.display = 'none';
            quote.style.display = 'none'
            form.style.display = 'block'
        }, 8000)
        inputs.forEach(input => input.value = '');
        document.getElementsByTagName('textarea')[0].value = '';
    } else {
        alert('Please check your form again')
    }
});