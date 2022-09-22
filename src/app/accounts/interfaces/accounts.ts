// get users response
export interface GetUsersResponse {
    ok?:      boolean;
    auditId?: string;
    data?:    User[];
}

export interface User {
    id?:       string;
    name?:     string;
    username?: string;
    email?:    string;
    address?:  Address;
    phone?:    string;
    website?:  string;
    company?:  Company;
}

export interface Address {
    street?:  string;
    suite?:   string;
    city?:    string;
    zipcode?: string;
    geo?:     Geo;
}

export interface Geo {
    lat?: string;
    lng?: string;
}

export interface Company {
    name?:        string;
    catchPhrase?: string;
    bs?:          string;
}

// get posts response 
export interface GetPostsResponse {
    ok?:      boolean;
    auditId?: string;
    data?:    Post[];
}

export interface Post {
    userId?: string;
    id?:     string;
    title?:  string;
    body?:   string;
}

// get photos response 
export interface GetPhotosResponse {
    ok?:      boolean;
    auditId?: string;
    data?:    Photo[];
}

export interface Photo {
    albumId?:      string;
    id?:           string;
    title?:        string;
    url?:          string;
    thumbnailUrl?: string;
}
