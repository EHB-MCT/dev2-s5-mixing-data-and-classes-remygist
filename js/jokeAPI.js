export default
class joke{
    constructor(category,flags,joketype,safe){
        this.category = category;
        this.flags = flags;
        this.joketype = joketype;
        this.safe = safe;
    }

    get htmlString(){
        return `
        <h2>${this.category}</h2>
        <h2>${this.flags}</h2>`
    }
}
