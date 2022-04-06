const bookFilghtTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = true;
            if (error) {
                // 실패
                reject("Sorry your ßpayment was not successful.");
            }
            else {
                // 성공
                resolve("Thank you, your payment was successful.");
            }
        }, 3000)
    })
}

bookFilghtTicket()
.then( (success) => console.log(success) )
.catch( (error) => console.log(error) );
