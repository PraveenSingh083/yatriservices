import {writeFile} from 'fs/promises'
import { NextResponse } from "next/server";

export async function POST(req){
    const data = await req.formData();
const file = data.get('file');
const adharcard = data.get('adharcard');
const lastmodifie = data.get('lastmodifie');
if(!file){
    return NextResponse.json({"messege" : "Pancard is not uploaded Please upload pancard and after Registers", success: false})
}
if(!adharcard){
    return NextResponse.json({"messege" : "adharCard Is Mendotry ", success: false})
}
const byteData = await file.arrayBuffer();
const buffer = Buffer.from(byteData);
const path = `./public/img/pancards/${lastmodifie}${file.name}`;
await writeFile(path,buffer);



// adharcard

const byteDataadhar = await adharcard.arrayBuffer();
const bufferadhar = Buffer.from(byteDataadhar);
const pathadhar = `./public/img/pancards/${lastmodifie}${adharcard.name}`;
await writeFile(pathadhar,bufferadhar);


return NextResponse.json({"messege":"file uploaded", success:true})
}