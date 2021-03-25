class Question{

   constructor(){

    this.input = createInput("Name");
    this.input1 = createInput("answer.No");

    this.title = createElement('h2');

    this.greeting2 = createElement('h2');

    this.question = createElement('h3');

    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');

    this.submit = createButton("Submit");

   }

   hide(){
       this.input.hide();
       this.input1.hide();
       this.title.hide();
       this.submit.hide();
   }

   display(){

     this.title.html("My Quiz Game");
     this.title.position(200, 0);

     this.question.html("Question: What start and ends with letter E, but has only one letter?");
     this.question.position(0, 100);

     this.option1.html("1. envelope");
     this.option1.position(50, 175);

     this.option2.html("2. estimate");
     this.option2.position(50, 250);

     this.option3.html("3. example");
     this.option3.position(50, 325);

     this.input.position(0, 400);

     this.input1.position(300, 400);

     this.submit.position(250, 550);

     this.submit.mousePressed(()=>{
      question.hide();

      contestant.name = this.input.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(playerCount);
      
    })

   }

}