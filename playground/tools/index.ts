
export type Computed<T> ={
    [K in keyof T]:T[K];
}