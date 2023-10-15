describe("Array", function() {
    it("should same with javascript", function() {
        const nameArray:string[] = ["enricho", "alkalas"]
        const valueArray:number[] = [1, 2, 3]
        
        // console.info(nameArray)
        // console.info(valueArray)
    })

    it("should support readonly array", function() {
        const hobbies:ReadonlyArray<string> = ["membaca", "menulis"]
        // console.info(hobbies)
        // hobbies[0] = "Main Games" // Akan error
    })

    it("should support tuple method", function() {
        const person:readonly [string, string, number] = ["enriho", "alkalas", 10]
        // console.info(person)
    })
})