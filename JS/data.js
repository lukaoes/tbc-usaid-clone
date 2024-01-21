// about section information
const aboutData = "„ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.";
const aboutParagraph = document.getElementById('aboutParagraph');
aboutParagraph.textContent = aboutData;

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
    const courseGrid = document.getElementById('courseGrid')
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
        console.log(element)
    });
    courseGrid.innerHTML = courseCard
}

generateCourses(courseDetailedData)