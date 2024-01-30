
# Order placement automation

  I chose to automate my scenarios in Cypress with Javascript because Cypress is one of the most modern testing frameworks that allows you to write fast automation without the need to record the testcases.

  I chose Javascript because Cypress only works with Javascript or Typescript and in the requirements Typescript was not specified.

  The design pattern I chose for my code was POM(Page Object Model). Nowdays not so popular anymore but I decided on it because with this the code can easily by read by anyone, experienced or not.

  I used envinroment variables to store my data, this is not the most 'Cypress' way of doing it, as Cypress fixtures is a better option, but I chose this again to make the code understable for everyone.

  Not all possible regression scenarios have been automated for obvious reasons, as this is only a Proof of Concept, or rather of my skill in automating testcases.
  Some possible scenarios: check you can use discount code, check all fields that are mandatory give an error, check that you can edit details in the checkout process, multiple items in cart, etc.
  This framework can easily be incorporated in a CI envinroment as Cypress integrates easily with the most popular ones.(GitHub actions, jenkins, travis, etc.)
  The 'defaultTimeout' was set to 20 seconds because the website is quite slow and the resolution to '1920x1080' to prevent test flakyness.




## Running the tests

You need to have node.js installed.

```bash
  npx cypress open