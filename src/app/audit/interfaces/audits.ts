// get all audits 
export interface GetAuditsResponse {
    ok?:   boolean;
    data?: Audit[];
}

// get one audit 
export interface Audit {
    _id?:      string;
    date?:     string;
    method?:   string;
    url?:      string;
    response?: any[];
    __v?:      number;
}

// create audit 
export interface GetAuditResponse {
    ok?:   boolean;
    data?: Audit;
}


export interface Response {
    albumId?:      number;
    id?:           number;
    title?:        string;
    url?:          string;
    thumbnailUrl?: string;
}

// update audit 
export interface UpdateAuditResponse {
    ok?:   boolean;
    data?: resp;
}

export interface resp {
    acknowledged?:  boolean;
    modifiedCount?: number;
    upsertedId?:    null;
    upsertedCount?: number;
    matchedCount?:  number;
    deletedCount?: number;
}

// delete audit 
export interface DeleteAuditResponse {
    ok?:   boolean;
    data?: resp;
}
