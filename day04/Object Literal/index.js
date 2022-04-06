function addressMaker(city, state) {
    // const newAddress = {newCity: city, newState: state};
    // Object Literal : 단순하게 객체 만들기
    const newAddress = {city, state};
    console.log(newAddress);
}
addressMaker('Austin', 'Texas');
// console 에 object 로 {newCity: Austin, newState: Texas} 띄우기