function matchFullName(name) {
    let regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;

    let text = name;

    let match = text.match(regex);
    console.log(match.join(' '));
}

matchFullName("Ivan Ivanov, ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan IvAnov,Ivan  Ivanov")