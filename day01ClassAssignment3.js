/*
Use new Javascript File Name: 02_Conditional.js
 
    Objective: Learn if - else and switch - case
    Create 2 functions : launchBrowser, runTests
    where,
    a) launchBrowser need to take input as browserName (string) and do not return any
        - use if, else (chrome or otherwise)
        - just print
    b) runTests need to take input as testType (string) and do not return any
        - use switch case (smoke, sanity, regression, default (smoke))
        - just do print
 
    Call that function from the javascript
    */

 let browserName = "chrome"
    function getlaunchBrowser(){
     
        if (browserName == 'chrome')
        {
            console.log("Browser name is Chrome")
        }else if (browserName == 'firefox')
        {
            console.log("Browser name is firefox")
        }else if (browserName == 'safari')
        {
            console.log("Browser name is safari")
        }else {
            console.log("Browser name is undefined ")
        }

    }

    let testType = "smoke"
    function getrunTests(){
     
        switch (testType)
        {
        case  "smoke" :
        console.log("Test type is smoke");
        break;
        case  "sanity" :
        console.log("est type is sanity");
        break;
        case "regression" :
        console.log("Test type is regression");
        break;
        default :
        console.log("Test type is smoketest");
        break 
        }

    }
    getlaunchBrowser();
    getrunTests();

