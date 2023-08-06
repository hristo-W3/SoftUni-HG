function companyUsers(input) {
    let companies = {};

    input.forEach(pair => {
        let [company, id] = pair.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(id);
    });

    let sortedCompanies = Object.entries(companies);

    sortedCompanies.sort((a, b,) => a[0].localeCompare(b[0]));

    for (let element of sortedCompanies) {
        let companyName = element[0];
        let set = new Set(element[1]);
        console.log(companyName);
        for (let ids of set) {
            console.log(`-- ${ids}`);
        }
    }
}

companyUsers(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])
console.log("------------------");
companyUsers(['SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'])