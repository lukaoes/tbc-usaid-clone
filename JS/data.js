// about section information
const aboutData = "„ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.";
const aboutParagraph = document.getElementById('aboutParagraph');
aboutParagraph.textContent = aboutData;


// course grid data and fucntion to generate them
const courseDetailedData = [
    {
        id: 'ios-course',
        image: './assets/images/course-imgs/ios-course.jpg',
        title: 'iOS Development',
        registerStatus: false,
        details: 'https://www.tbcacademy.ge/usaid/ios-development',
    },
    {
        id: 'react-course',
        image: './assets/images/course-imgs/react-course.jpg',
        title: 'React',
        registerStatus: false,
        details: 'https://www.tbcacademy.ge/usaid/react',
    },
    {
        id: 'intro-python-course',
        image: './assets/images/course-imgs/intro-python-course.jpg',
        title: 'Intro to Python',
        registerStatus: false,
        details: 'https://www.tbcacademy.ge/usaid/python-basic',
    },
    {
        id: 'advanced-python-course',
        image: './assets/images/course-imgs/advanced-python-course.jpg',
        title: 'Advanced Python',
        registerStatus: false,
        details: 'https://www.tbcacademy.ge/usaid/python-advance',
    },
    {
        id: 'cyber-course',
        image: './assets/images/course-imgs/cyber-course.jpg',
        title: 'Advanced Cybersecurity Course',
        registerStatus: false,
        details: 'https://www.tbcacademy.ge/usaid/information-security-advance',
    },
    {
        id: 'tot-course',
        image: './assets/images/course-imgs/tot-course.jpg',
        title: 'ToT - Training of Trainers',
        registerStatus: false,
        details: 'https://www.tbcacademy.ge/usaid/training-of-trainers',
    },
    {
        id: 'blockchain-course',
        image: './assets/images/course-imgs/blockchain-course.jpg',
        title: 'Blockchain',
        registerStatus: false,
        details: 'https://www.tbcacademy.ge/usaid/blockchain',
    },
    {
        id: 'DevOps-course',
        image: './assets/images/course-imgs/DevOps-course.jpg',
        title: 'DevOps',
        registerStatus: false,
        details: 'https://www.tbcacademy.ge/usaid/DevOps',
    },
    {
        id: 'security-course',
        image: './assets/images/course-imgs/security-course.jpg',
        title: 'Information Security Governance',
        registerStatus: false,
        details: 'https://www.tbcacademy.ge/usaid/information-security-basic',
    }
];

const generateCourses = (data) => {
    const courseGrid = document.getElementById('courseGrid');
    let courseCard = "";
    data.forEach((element) => {
        courseCard = courseCard + `
        <div class="card">
        <img class="course-img" src="${element.image}" alt="${element.id}" />
        <div class="title">
            <h5>
                ${element.title}
            </h5>
        </div>
        <div class="register-status">
            <p>${element.registerStatus ?
                'დარეგისტრირდი კურსზე' :
                'რეგისტრაცია დასრულებულია'}
            </p>
        </div>
        <div class="course-details">
            <a href="${element.details}" class="flex">
                <img src="./assets/images/course-arrow.svg" alt="arrow" />
                კურსის დეტალები
            </a>
        </div>
    </div>
        `
    });
    courseGrid.innerHTML = courseCard
}

generateCourses(courseDetailedData);

// FAQ data, anwers and questions.
const faqData = [
    {
        id: 1,
        question: 'როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?',
        answer: `
        <p>
            კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:
        </p>
        <ul>
            <li>
                <span>I ეტაპი</span> - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია 
                კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა. 
            </li>
            <li>
                <span>I ეტაპი</span> - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე 
                კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.
            </li>
            <li>
                <span>I ეტაპი</span> - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, 
                მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა 
                მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.
            </li>
            <li>
                <span>I ეტაპი</span> - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში 
                ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.
            </li>
            <li>
        </ul>
        <p>
            * სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში 
            და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა. 
        </p>
        `
    },
    {
        id: 2,
        question: 'შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?',
        answer: `<p>
                    TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა.
                    გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.
                </p>`
    },
    {
        id: 3,
        question: 'რა ღირს სწავლა პროგრამის ფარგლებში?',
        answer: `<p>
                    პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.
                </p>`
    },
];

// generate FAQ section content
const generateFaq = (data) => {
    const questionAnswer = document.getElementById('question-answer');
    let faqQs = "";
    data.forEach((element) => {
        faqQs = faqQs + `
        <div class="question-container" onclick="toggleAnswer(${element.id})">
            <div class="question-block flex">
                <div class="question">
                    <h3>
                        ${element.question}
                    </h3>
                </div>
                <div class="faq-arrow arrow-${element.id}">
                    <img src="./assets/images/faq-arrow.svg" alt="faq-arrow" />
                </div>
            </div>
            <div class="answer  answer-${element.id}">
                ${element.answer}
            </div>
        </div>
        `
    });
    questionAnswer.innerHTML = faqQs
};

generateFaq(faqData);
console.log(faqData)

// slider 
const slidesData = [
    [
        "./assets/images/partner-imgs/usaid-partner.png",
        "./assets/images/partner-imgs/space-partner.png",
        "./assets/images/partner-imgs/tnet-partner.png"
    ],
    [
        "./assets/images/partner-imgs/tegeta-partner.png",
        "./assets/images/partner-imgs/spectre-partner.png",
        "./assets/images/partner-imgs/tbc-partner.png"
    ],
    [
        "./assets/images/partner-imgs/ufc-partner.png"
    ]
];

function createSlide(images) {
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide";

    images.forEach((imageSrc) => {
        const imageDiv = document.createElement("div");
        const img = document.createElement("img");
        img.src = imageSrc;

        const imageName = imageSrc.split("/").pop().replace("-partner.png", "");
        img.alt = imageName

        imageDiv.appendChild(img);
        slideDiv.appendChild(imageDiv);
    });

    return slideDiv;
}

function generateSlides() {
    const slidesContainer = document.querySelector('.slides');

    slidesData.forEach((images, index) => {
        const slide = createSlide(images, index);
        slidesContainer.appendChild(slide);
    });
}

generateSlides();
