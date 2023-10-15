import { sayHello } from "../src/say-hello";

describe('sayHello', function():void {
    it('should return hello Enricho', function():void {
        expect(sayHello('Enricho')).toBe('Hello Enricho')
    })
})