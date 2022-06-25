import {resizeImg,getMetaData,checkIfExists}from '../functionsOFsharp'
import { resize}from '../middlewares/imgMdlwr'
import jasmine from 'jasmine'

describe('suite description', () => {

it("test my func", async() => {
       
    expect(checkIfExists).toBe(true);
})
it("test my func", async() => {
       
    expect(resize).toBe(true);
})
it("test my func",async () => {
       
    expect(resizeImg).toBe(true);
})
it("test my func", async() => {
       
    expect(getMetaData).toBe(true);
})
})