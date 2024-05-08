var tourSteps = [
    
        {
            title: "Step 1",
            content: "Welcome to Step 1!",
            element: "#step1"
          },
          {
            title: "Step 2",
            content: "This is Step 2.",
            element: "#step2"
          },
          {
            title: "Step 3",
            content: "Final step!",
            element: "#step3"
          }
    
];

$(document).ready(function() {
    var tour = new Tour({
      steps: tourSteps,
      backdrop: true,
      storage: false
    });
    
    tour.init();
    tour.start();
  });