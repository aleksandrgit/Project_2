let accordions;
const accordionItemContent = document.querySelector('.accordion__item-content');
const contentData = [
  {
    id:1,
    title: ' HTML',
    content: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content."
  },
  {
    id:2,
    title: ' CSS',
    content: 'CSS (Cascading Style Sheets) is the code that styles web content. CSS basics walks through what you need to get started.'
  },
  {
    id:3,
    title: ' Javascript',
    content: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.'
  },
  {
    id:4,
    title: ' REACT',
    content: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components.'
  }
];

const createAccordionTemplate = item =>{
  return`
  <div class="accordion-item">
    <div class="accordion-item-title">${item.title}</div>
    <div class="accordion-item-description">${item.content}</div>
  </div>
  `
}

const fillHTMLLIst = () =>{
  contentData.forEach(item =>{
    accordionItemContent.innerHTML += createAccordionTemplate(item);
  });
  accordions = document.querySelectorAll('.accordion-item');
}

fillHTMLLIst();

if(accordions) {
  for(item of accordions) {
    item.addEventListener('click', function(){
      if(this.classList.contains('active') == true) {
        this.classList.remove('active');
      } else {
        for( el of accordions){
          el.classList.remove('active');
        }
        this.classList.add('active');
      }
    })
  }
}