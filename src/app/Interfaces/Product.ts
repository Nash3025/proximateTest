import { ItemMenu } from "./ItemMenu";

export interface Product extends ItemMenu{
    image: string,
    longDescription: string,
    path: string,
    shortDescription: string,
    title: string
}