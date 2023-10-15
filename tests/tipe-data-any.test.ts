describe("Tipe Data Any", function() {
    it("should be type data any", function() {
        const person:any = {
            id: 1,
            name: "enricho alkalas",
            age: 30
        }

        person.age = 31
        person.address = "Indonesia"

        // console.info(person)
    })
})