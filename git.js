class Github {
    constructor() {
        this.clientId = "Ov23liXX3dbJgZF9KQHp";
        this.clientSecret = "6c539a6df46b19d0f0655d3f4e34645d8da960de";
    }
    async getDetails(user){
        const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
        const profile = await response.json();

        return{
            profile
        }
    }

}
