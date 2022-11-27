export interface userData {
   firstName: string
   lastName: string
   tell: string
   tell2?: string
}

export interface addressData {
   Home_number: number
   Muu_number: number
   Khet: string
   Ampao: string
   city: string
}

export interface workData {
   workType: string
   location: string
   monk: number
   time: Date
   detail: string
   user_edit: string
}

export interface Ninome {
   userData: {
      firstName: string
      lastName: string
      tell: string
      tell2?: string
   }
   addressData: {
      Home_number: number
      Muu_number: number
      Khet: string
      Ampao: string
      city: string
   }
   workData: {
      workType: string
      location: string
      monk: number
      time: Date
      detail: string
      user_edit: string
   }
}