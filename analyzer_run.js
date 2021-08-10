// require("docs\assets\scripts\analyzer")

const fs = require('fs');
const path = require('path')
const fetch = require('node-fetch');

fetch('https://raw.githubusercontent.com/CiscoSecurity/sxo-05-security-workflows/Main/docs/assets/scripts/analyzer.js')
  .then(response => response.text())
  .then(data => {
    eval(data+'');
    let repo = process.argv[2]
    fs.readdirSync(repo).forEach(file => {
        // console.log(file);
        file = path.join(repo,file)
        if(fs.statSync(file).isDirectory()){
            fs.readdirSync(file).forEach(innerFile => {
                innerFile = path.join(file,innerFile)
                console.log(innerFile);
                var wf = fs.readFileSync(innerFile, 'utf-8')
            
                let analyzed = analyzeWorkflow(wf)
                // console.log(analyzed)

                for (const key in analyzed['response']['details']) {
                    analyzed['response']['details'][key].forEach(element => {
                        if(element['type'] == 'error'){
                            console.log(`${element['title']} - ${element['description']} - ${element['moreInfo']}`)
                        }
                    });
                }
              });
        }
        else if(fs.statSync(file).isFile()){
            var wf = fs.readFileSync(file, 'utf-8')
        
            let analyzed = analyzeWorkflow(wf)
            console.log(analyzed)
        }
      });
  })
  .catch(err => console.error(err))
