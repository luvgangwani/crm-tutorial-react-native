export type People = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    company: string,
    project: string,
    notes: string,
}

export type Contact = {
    people: Array<People>,
    detailView: boolean,
    personSelected: null,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    company: string,
    project: string,
    notes: string,
    toUpdate: boolean,
    isLoading: boolean,
    error: boolean,
}

export type PeopleItemProps = {
    people: People
}

export type ContactState = {
    contacts: {
        people: Array<People>,
        detailView: boolean,
        personSelected: null,
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        company: string,
        project: string,
        notes: string,
        toUpdate: boolean,
        isLoading: boolean,
        error: boolean,
    }
}