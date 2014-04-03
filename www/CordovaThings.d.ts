declare module CC {
    export interface ICordovaThings {
        getAppVersion: (successcb: (version: string) => void, failcb: (err: string) => void) => void;
        setKeyValue: (key, value, successcb?: () => void, failcb?: (err: string) => void) => void;
    }
}
