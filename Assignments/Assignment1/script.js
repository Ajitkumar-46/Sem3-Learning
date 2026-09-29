let questions=[
 {q:"Which tag creates a hyperlink?",o:["Paragraph","Anchor","Heading","Image"],a:1},
 {q:"CSS is used for?",o:["Programming","Styling","Database","Server"],a:1},
 {q:"JavaScript is used for?",o:["Styling","Structure","Interactivity","Database"],a:2},
 {q:"Which tag is used for paragraph?",o:["h1","p","div","br"],a:1},
 {q:"Which language creates webpage structure?",o:["CSS","Python","HTML","Java"],a:2}
];

let i=0,score=0,time=30,timer,name;

function startQuiz(){
 name=document.getElementById("name").value;
 if(!name||!roll.value||!section.value){
  error.innerText="Fill all details!";
  return;
 }
 startPage.style.display="none";
 quizPage.style.display="block";
 show();
}

function show(){
 clearInterval(timer);
 time=30;
 document.getElementById("time").innerText=time;

 let q=questions[i];
 question.innerText=q.q;
 options.innerHTML="";

 q.o.forEach((x,n)=>{
  options.innerHTML+=`<button onclick="answer(${n})">${x}</button>`;
 });

 timer=setInterval(()=>{
  time--;
  document.getElementById("time").innerText=time;
  if(time==0) next();
 },1000);
}

function answer(n){
 if(n==questions[i].a) score++;
 next();
}

function next(){
 clearInterval(timer);
 i++;

 if(i<questions.length) show();
 else{
  quizPage.style.display="none";
  resultPage.style.display="block";
  studentName.innerText="Student: "+name;
  result.innerText="Score: "+score+"/"+questions.length;
 }
}