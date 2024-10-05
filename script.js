function runCode() {
    const selectedLanguage = document.querySelector('input[name="language"]:checked');
    const code = document.getElementById('code').value;
    const outputDiv = document.getElementById('output');
    
    if (!selectedLanguage || !code) {
        outputDiv.innerHTML = 'Please select a programming language and enter your code.';
        return;
    }

    const language = selectedLanguage.value;

    switch (language) {
        case 'python':
            outputDiv.innerHTML = 'Python code execution not supported in browser. Please use a Python environment.';
            break;
        case 'javascript':
            try {
                const result = eval(code);
                outputDiv.innerHTML = result !== undefined ? result : 'Code executed successfully';
            } catch (e) {
                outputDiv.innerHTML = 'Error: ' + e.message;
            }
            break;
        case 'cpp':
            outputDiv.innerHTML = 'C++ code execution not supported in browser. Please use a C++ environment.';
            break;
        default:
            outputDiv.innerHTML = 'Unsupported language.';
    }
}


