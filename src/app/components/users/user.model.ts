import { Product } from "../product/product.model"

export interface Users{
    id?: number | null
    userName?: string | null
    password?: string | null
    rePassword?: string | null
    cpf?: string | null
    phone?: number | null
    balance?: number | null
    url?: string | null
}