// require("docs\assets\scripts\analyzer")

const fs = require('fs');
const path = require('path')
const fetch = require('node-fetch');

fetch('https://raw.githubusercontent.com/CiscoSecurity/sxo-05-security-workflows/Main/docs/assets/scripts/analyzer.js')
  .then(response => response.text())
  .then(data => {
    eval(data+'');
    let repo = process.argv[2]
    let output_json = {}
    fs.readdirSync(repo).forEach(file => {
        // console.log(file);
        let wf_name = file
        file = path.join(repo,file)
        if(fs.statSync(file).isDirectory()){
            // if(file.split('\\')[7].includes('.git') || file.includes('node_modules')){
            if(file.includes('.git') || file.includes('node_modules')){
                return
            }
            fs.readdirSync(file).forEach(innerFile => {
                wf_name = `${wf_name}/${innerFile}`
                output_json[wf_name] = Array()
                innerFile = path.join(file,innerFile)
                console.log(innerFile);
                var wf = fs.readFileSync(innerFile, 'utf-8')
            
                let analyzed = analyzeWorkflow(wf)
                // console.log(analyzed)

                for (const key in analyzed['response']['details']) {
                    analyzed['response']['details'][key].forEach(element => {
                        if(element['type'] == 'error'){
                            // console.log(`${element['title']} - ${element['description']} - ${element['moreInfo']}`)
                            output_json[wf_name].push(element)
                        }
                    });
                }

                if(output_json[wf_name].length == 0){
                    delete output_json[wf_name]
                }
              });
            //   console.log(output_json)
        }
        else if(fs.statSync(file).isFile() && !file.includes('package-lock')){
            var wf = fs.readFileSync(file, 'utf-8')
        
            let analyzed = analyzeWorkflow(wf)
            console.log(analyzed)
        }
      });

      console.log(`::set-output name=OUTPUT_JSON::${JSON.stringify(output_json)}`)
  })
  .catch(err => console.error(err))