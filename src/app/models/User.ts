export interface User {
    token?: string;
    name?: string;
    sub?: string;
    companyName?: string;
    aud?: string;
    costCenter?: string
    document?: string
    exp?: number
    iat?: number
    iss?: string
}