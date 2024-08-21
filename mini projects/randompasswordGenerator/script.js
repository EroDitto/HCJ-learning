const passwordBox = document.getElementById("password");
        const lengh = 12;

        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const symbol = "!@#$%^&*()_+~|}{[]<>/-=";

        const allCase = upperCase+lowerCase+number+symbol;

        function copyPassword(){

            passwordBox.select();
            document.execCommand("copy");
        }

        function createPassword(){
            let password = "";
            password += upperCase[Math.floor(Math.random() * upperCase.length)];
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            password += number[Math.floor(Math.random() * number.length)];
            password += symbol[Math.floor(Math.random() * symbol.length)];

            while(lengh > password.length){
                password += allCase[Math.floor(Math.random() * allCase.length)];
            }
            passwordBox.value = password;
        }
