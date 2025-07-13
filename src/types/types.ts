export type Uzivatel={
  id: number
  spolocnost:string
  ulica: string
  mesto: string
  psc: string
  ico: string
  dic: string,
  icdph: string,
  email: string
}
export type UzivatelPrihlaseny=boolean

export type Objednavky={
  id:number
  platba:string
  doprava:string
  adresa:string
  sumaBezDPH:number
  sumaSDPH:number
  datum:string
  poznamka:string
  kosik:Kosik[]
}

export type Kosik={
  nazov:string
  pocet:number
  cenaZaKus:number
  fotografiaMala:string
  kodProduktu:number
  sklad:string
}

export type Produkty={
  id:number,
  typProduktu: 'prislusenstvo' | 'inyTyp'
  nazov: string
  nazovUrl: string
  fotografiaMala: string
  jeAkcia: boolean
  novinka: boolean
}