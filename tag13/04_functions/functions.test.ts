import { printName, addThirty, addTwenty, addition, einAddierenFunction, printFourtyMitString, getOnlineMessage } from "./functions";
import {expect, test} from 'vitest'


test("Print Name ('Anne')", ()=>{
    expect(printName("Anne")).toBe("Anne")
})

test("addThirty(7)results is 37", ()=>{
    expect(addThirty(7)).toBe(37)
})

test("addTwenty(18)results is 38", ()=>{
    expect(addTwenty(18)).toBe(38)
})

test("addition(9, 3)results is 12", ()=>{
    expect(addition(9, 3)).toBe(12)
})

test("einAddierenFunction(5, 6, 8)results is 19", ()=>{
    expect(einAddierenFunction(5, 6, 8)).toBe(19)
})

test("printFourtyMitString(5, 'hier soll text stehen')results is 45 hier soll text stehen", ()=>{
    expect(printFourtyMitString(5, 'hier soll text stehen')).toBe('45 hier soll text stehe')
})

test("getOnlineMessage(true)results is 'User is Online", ()=>{
    expect(getOnlineMessage(true)).toBe("User is Online")
})




