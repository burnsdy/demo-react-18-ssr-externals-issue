
    export type RemoteKeys = 'remote/Content';
    type PackageType<T> = T extends 'remote/Content' ? typeof import('remote/Content') :any;