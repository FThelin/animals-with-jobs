export interface IAnimal {
    name: string,
    kindOfAnimal: string,
    job: string,
    skills?: string | string[],
    birthYear: string,
    imgUrl: string,
    employmentStartDate: string,
    employmentEndDate?: string
}