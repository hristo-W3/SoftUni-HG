function solve(input) {
        
    function formatGrade(grade) {
        let grades = ["Poor", "Good", "Very good", "Excellent"];
        let breaks = [3.49, 4.49, 5.49, 6];
        let index = 0;

        if (grade <= 2.99){
            return "Fail (2)";
        } else {
            for (let i = 0; i < breaks.length; i++) {
                if (breaks[i] >= grade){
                    index = i;
                    break;
                }
            }
        }
        return `${grades[index]} (${grade.toFixed(2)})`;        
    }
    console.log(formatGrade(input));
}

solve(3.99)