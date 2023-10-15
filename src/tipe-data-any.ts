export type Category = {
    id: string
    name: string
}

export type Product = {
    id: string
    name: string
    price: string
    category: Category // kategori mempunyai tipe data alias dari Category yang diatas
}