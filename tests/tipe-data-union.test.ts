describe("Tipe Data Union", function() {
    it("should be type data Union", function() {
        let sample: number | string | boolean = "Enricho" // tipe data nya boleh berubah sesuai dengan yang di set ( number / string / boolean )
        // sample = 100
        // sample = true
        
        // console.info(sample)
    })

    it("should be method to use Union Function", function() {
        function process(value: number | string | boolean):void {
            if( typeof value === "string" ) {
                return value.toUpperCase()
            } else if ( typeof value === "number" ) {
                return value + 2
            } else {
                return !value
            }
        }
        
        expect(process(100)).toBe(102)
        expect(process("Enricho")).toBe("ENRICHO")
        expect(process(true)).toBe(false)
    })
})