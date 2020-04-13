General aims:
 - produce a full piece of software - deploy a finished product that is complete and usable, even if it is ugly - SHORT TERM
 - develop intuition for physics concepts - this can be extended as I continue to study - LONG TERM
 - create something suitable for a portfolio project - show what I can do - MEDIUM TO LONG TERM
 - get a better understanding of browser rendering and graphics - LONG TERM
 - implemnt ci/cd from scratch - SHORT TERM
 - develop fluency with oAuth/openId flows in relation to a single page application with a backend SHORT TERM
 - move away from frontend centric view of an application LONG TERM
 - gain confidence with React with the aim of moving onto React contracts in the near future - SHORT TERM

What do I actually want this application to do?
 - provide some sort of visual intuition for the concepts of velocity, acceleration and forces - a la brilliant.
 - especially uniform circular motion, and the idea that velocity as a vector is changing even if it maintains a constant speed, but changes direction
 - show the derivation of uniform circular motion equations somehow in order to give some sort of intuitive sense of why they make sense
 - work out how to render equations to a browser

Uniform cirular motion - why? Because it makes no effin sense to me and I'd like it to.

Tech to use:
 - css/canvas - probably canvas... for the animations etc.
 - database for persisting UI state - don't really care whether it's sql or nosql. Topic for research
 - OAuth login using authorization code flow - figure out what the actual fuck you are supposed to do with tokens
 - React for forms etc. for setting up different simulation parameters and for routing between simulations
 - make my own visual assets - design basics

Approach:
 - very quickly get to a fully working skeleton system that is:
   - deployed continuously - try github's tooling for this
   - rendering something to a screen that depends on variables
   - able to react to changes in variables provided by a user
   - persisted to a database
   - tied to a specific user (i.e. implement a login)

A successful skeleton could be used as a seed project for other similar things in future

Other ideas...

 - set up systems based on physics rules, and user supplied variables, then produce data visualisations based on the results once the system is released


Step 1) Deploy something using something modern (hello world)
  - Heroku? Fuck it I'll just use this
  - Just deploy client code to start with - Use React - make some hello world shit
  - use semantic release to automate all the shit 
  - tag hello world generated app with a version and deploy it using semantic release and Travis


multiplayer physics sandbox - set up physics rules, both players can add objects to system

start with bouncing ball, and define gravity and size of room.

will need:
  - a backend with business logic and access to a database, which exposes a public API, use node because why not
  - a language for communicating user inputs to the server, and game state back to the user's session maybe via websockets?
  - a way of authenticating users (login I guess...), regular 'ol http service
  - a database for storing user details
  - a way of rendering the fizziks stuff nicely (webgl probs)
