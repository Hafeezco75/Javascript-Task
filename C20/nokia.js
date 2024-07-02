const prompt = require("prompt-sync")();

nokia3310App = nokiaMenu()

function nokiaMenu() {

menuPrompt = `
==========================================
HELLO!! WELCOME TO NOKIA 3310 MAIN MENU...
------------------------------------------
Press 
1 -> Phonebook
2 -> Messages
3 -> Chat
4 -> Call Register
5 -> Tones
6 -> Settings
7 -> Call Divert
8 -> Games
9 -> Calculator
10 -> Reminders
11 -> Clock
12 -> Profiles
13 -> SIM services
0 -> Back
===============||||||||||||||||||=========
`;

console.log(menuPrompt);

userInput = prompt("Select any of the available options ");

switch(userInput){
    case "1": phonebookMenu();
       break;
    case "2": messagesMenu();
       break;
    case "3": Chat();
       break;
    case "4": callRegister();
       break;
    case "5": tones();
       break;
    case "6": settings();
       break;
    case "7": callDivert();
       break;
    case "8": games();
       break;
    case "9": calculator();
       break;
    case "10": reminders();
       break;
    case "0": nokiaMenu();
       break;
}

}
                   
function phonebookMenu() {

phonebookPrompt = `
Press
1 -> Search
2 -> Service Nos
3 -> Add name
4 -> Erase
5 -> Edit
6 -> Assign tone
7 -> Send b'card
8 -> Options
9 -> Speed dials
10 -> Voice tags
`;

console.log(phonebookPrompt);

input = prompt()

switch(input)  {
    case "1": console.log("Search") 
        break;
    case "2": console.log("Service Nos")
        break;
    case "3": console.log("Add name") 
        break;
    case "4": console.log("Erase")
        break; 
    case "5": console.log("Edit") 
        break;
    case "6": console.log("Assign tone") 
        break;
    case "7": console.log("Send b' card")
        break;
    case "8": optionMenu();
        break;
    case "9": console.log("Speed dials") 
        break;    
    case "10": console.log("Voice tags")
        break;
             
    default: console.log("Wrong Selection,Pick from the available Options")

phonebookMenu();
}

}

function optionMenu() {

optionsPrompt = `
Press
1 -> Type of view
2 -> Memory status
`;

console.log(optionsPrompt)

check = prompt()
switch(check) {
   case "1": console.log("Type of view")
       break;
   case "2": console.log("Memory status")
       break;

phonebookMenu();
}

}

function messagesMenu() {

messagesPrompt = `
Press
1 -> Write messages
2 -> Inbox
3 -> Outbox
4 -> Picture messages
5 -> Templates
6 -> Smileys
7 -> Message settings
8 -> Info service
9 -> Voice mailbox number
10 -> Service command editor
`;

console.log(messagesPrompt)

output = prompt();

switch(output)  {
    case "1": console.log("Write messages")
        break; 
    case "2": console.log("Inbox")
        break;
    case "3": console.log("Outbox") 
        break;
    case "4": console.log("Picture messages") 
        break;
    case "5": console.log("Templates")
        break; 
    case "6": console.log("Smileys") 
        break;
    case "7": messageSettings();
        break;
    case "8": console.log("Info service")
	break;
    case "9": console.log("Voice mailbox number") 
	break;
    case "10": console.log("Service command editor")
        break;

    default: console.log("Wrong Selection,Enter a valid Option")

messagesMenu();
}

}
function messageSettings() {

messageSettingsPrompt = `
1 -> Set
2 -> Common
`;

console.log(messageSettingsPrompt)

messageSetting = prompt() 

switch(messageSetting)  {
     case "1": set();
	break;
     case "2": common();
        break;

   default: console.log("Wrong Option,pick a right option to proceed")
}

}

function set()  {

Prompt1 = `
1. Message centre number
2. Messages sent as
3. Message validity
`;

console.log(Prompt1)

messageSet = prompt()
switch(messageSet) {
    case "1": console.log("Message centre number")
	break;
    case "2": console.log("Messages sent as")
	break;
    case "3": console.log("Message validity")
	break;

messageSettings();     
}           

}

function common()  {

Prompt2 = `
1-> Delivery reports
2-> Reply via same centre
3-> Character support
`;

console.log(Prompt2)
	        
messageCommon = prompt()
switch(messageCommon) {
    case "1": console.log("Delivery reports")
        break;
    case "2": console.log("Reply via same centre")
	break;
    case "3": console.log("Character support")
	break;

messageSettings();
    }

 }
function Chat()  {

chatPrompt = `
1 -> Chat
`;
console.log(chatPrompt)

chats = prompt()
switch(chats)  {
    case "1": console.log("Chat")
        break;
  }

}

function callRegister() {

callRegisterPrompt = `
1 -> missed calls
2 -> received calls
3 -> Dialled numbers 
4 -> Erase recent call lists
5 -> Show call duration
6 -> Show call costs
7 -> Call cost settings
8 -> Prepaid credit
`;

console.log(callRegisterPrompt)

calls = prompt()
switch(calls)  {
    case "1": console.log("missed calls")
	break;
    case "2": console.log("received calls")
	break;
    case "3": console.log("Dialled numbers")
	break;
    case "4": console.log("Erase recent call lists")
	break;
    case "5": showCallDuration();
	break;
    case "6": showCallCosts();
	break;
    case "7": callCostSettings();
	break;
    case "8": console.log("Prepaid credit")
	break;

    default: console.log("Wrong Selection,kindly select from the available Options")

}

}
function showCallDuration() {

showDurationPrompt = `
1 -> Last call duration
2 -> All calls' duration
3 -> Received calls duration
4 -> Dialled calls duration
5 -> Clear timers
`;
console.log(showDurationPrompt)

showCall = prompt()
switch(showCall) {
    case "1": console.log("Last call duration")
	break;
    case "2": console.log("All calls' duration")
	break;
    case "3": console.log("Received calls duration")
	break;
    case "4": console.log("Dialled calls duration")
	break;
    case "5": console.log("Clear timers")
        break;

   }
}
function showCallCosts() {

Prompt4 = `
1 -> Last call cost
2 -> All calls cost
3 -> Clear counters
`;

console.log(Prompt4)

callcost = prompt()
switch(callcost) {
      case "1": console.log("Last call cost")
	  break;
      case "2": console.log("All calls'cost")
	  break;
      case "3": console.log("Clear counters")
	  break;

callRegister();
}

}

function callCostSettings()  {

Prompt5 = `
1-> Call cost limit
2-> Show call costs
`;
console.log(Prompt5)

limits = prompt()
switch(limits) {
    case "1": console.log("Call cost limit")
	  break;
    case "2": console.log("Show costs in")
	  break;

callRegister();
}

}

function tones() {

tonesPrompt = `
1-> Ringing tone
2-> Ringing volume
3-> Incoming call alert
4-> Composer
5-> Message alert tone
6-> Keypad tones
7-> Warning and game tones
8-> Vibrating alert
9-> Screen saver
`;

console.log(tonesPrompt)

tone = prompt()

switch(tone)  {
    case "1": console.log("Ringing tone")
	break;
    case "2": console.log("Ringing volume")
	break;
    case "3": console.log("Incoming call alert")
	break;
    case "4": console.log("Composer")
	break;
    case "5": console.log("Message alert tone")
	break;
    case "6": console.log("Keypad tones")
	break;
    case "7": console.log("Warning and game tones")
	break;
    case "8": console.log("Vibrating alert")
	break;
    case "9": console.log("Screen saver")
	break;

}

}

function settings() {

settingsPrompt = `
1. Call settings
2. Phone settings
3. Security settings
4. Restore factory settings
`;

console.log(settingsPrompt)

setting = prompt()
switch(setting){
    case "1": callSettings();
	break;
    case "2": phoneSettings();
	break;
    case "3": securitySettings();
	break;
    
}

}

function callSettings()  {

callSettingsPrompt = `
1-> Automatic redial
2-> Speed dialling
3-> Call waiting options
4-> Own number sending
5-> Phone line in use
6-> Automatic answer
`;
console.log(callSettingsPrompt)

callsetting = prompt()
switch(callsetting) {
    case "1": console.log("Automatic redial")
	break;
    case "2": console.log("Speed dialling")
	break;
    case "3": console.log("Call waiting options")
	break;
    case "4": console.log("Own number sending")
	break;
    case "5": console.log("Phone line in use")
	break;
    case "6": console.log("Automatic answer")
	break;

settings();
}

}

function phoneSettings()  {

phoneSettingsPrompt = `
1. Language
2. Cell info display
3. Welcome note
4. Network selection
5. Lights
6. Confirm SIM service actions
`;
console.log(phoneSettingsPrompt)

phoneSett = prompt()
switch(phoneSett)  {
    case 1: console.log("Language")
	break;
    case 2: console.log("Cell info display")
	break;
    case 3: console.log("Welcome note")
	break;
    case 4: console.log("Network selection")
	break;
    case 5: console.log("Lights")
	break;
    case 6: console.log("Confirm SIM service actions")
	break;

settings();
}

}
function securitySettings() {

securitySettingsPrompt = `
1-> PIN code request
2-> Call barring service
3-> Fixed dialling
4-> Closed user group
5-> Phone security
6-> Change access codes
`;

console.log(securitySettingsPrompt)

securitySet = prompt()
switch(securitySet) {
    case 1: console.log("PIN code request")
	break;
    case 2: console.log("Call barring service")
	break;
    case 3: console.log("Fixed dialling")
	break;
    case 4: console.log("Closed user group")
	break;
    case 5: console.log("Phone security")
	break;
    case 6: console.log("Change access codes")
	break;

settings();
}

}

function callDivert() {

callDivertPrompt = `
1-> Call Divert
`;
console.log(callDivertPrompt)

calldivert = prompt()
switch(calldivert) {
    case "1": console.log("Call divert")
         break;
  }
}

function games() {

gamesPrompt = `
1-> Games
`;
console.log(gamesPrompt)

game = prompt()
switch(game) {
    case "1": console.log("Games")
         break;
}

}

function calculator() {

calculatorPrompt = `
1-> Calculator
`;
console.log(calculatorPrompt)

calculate = prompt()
switch(calculate)  {
    case "1": console.log("Calculator")

  }
}

function reminders()  {

remindersPrompt = `
1-> Reminders
`;
console.log(remindersPrompt)

reminder = prompt()
switch(reminder) {
    case "1": console.log("Reminders")

}

}

