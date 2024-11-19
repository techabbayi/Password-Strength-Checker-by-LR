        // Function to check password strength
        function checkPasswordStrength(password) {
            // Criteria for password strength
            const lengthCriteria = password.length >= 8;
            const uppercaseCriteria = /[A-Z]/.test(password);
            const lowercaseCriteria = /[a-z]/.test(password);
            const numberCriteria = /[0-9]/.test(password);
            const specialCharCriteria = /[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>/?]/.test(password);

            // Calculate how many criteria are met
            const criteriaMet = [
                lengthCriteria, 
                uppercaseCriteria, 
                lowercaseCriteria, 
                numberCriteria, 
                specialCharCriteria
            ].filter(Boolean).length;

            // Determine password strength based on criteria
            let strength = "";
            if (criteriaMet <= 2) {
                strength = "Weak";
                document.getElementById("strength").className = "strength weak";
            } else if (criteriaMet === 3 || criteriaMet === 4) {
                strength = "Medium";
                document.getElementById("strength").className = "strength medium";
            } else if (criteriaMet === 5) {
                strength = "Strong";
                document.getElementById("strength").className = "strength strong";
            }

            return strength;
        }

        // Event listener for input
        document.getElementById("password").addEventListener("input", function() {
            const password = this.value;
            const strength = checkPasswordStrength(password);
            document.getElementById("strength").innerText = "Strength: " + strength;
        });
