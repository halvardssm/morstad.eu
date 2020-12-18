export type ValueOf<T> = T[keyof T]
export type ActionProp<T extends Record<string, any> = Record<string, any>> = {
    type: string
} & T
