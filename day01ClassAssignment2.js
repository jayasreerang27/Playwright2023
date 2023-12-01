/* Create a function by name getBrowserVersion
    Create if condition inside function to check if browser is chrome, then
    Declare a local variable -- use var first (browserVersion) and print that variable inside function (outside block)
    Call that function from the javascript
 
    - Use 'var' first as block variable and then convert that as 'let'
    - Confirm how it works

    - function how to write and how to call
    - basic if condition and block variable
    - let vs var
    */

     const  browserName = "chrome"

    function getBrowserVersion() {

      if (browserName.startsWith("chrome")){
         console.log("Browser name is " + browserName)
         let  browserVersion = "chrome version 91.0.1"


      } else {
        console.log("Browser name is not chrome " + browserName)

      }
      console.log(browserVersion)
    }
      getBrowserVersion();

  
    
    