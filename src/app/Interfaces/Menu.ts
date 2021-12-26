import { ItemMenu } from "./ItemMenu";

export interface Menu extends ItemMenu{
    icon: string,
    productId: string,
    redirectTo: string
}